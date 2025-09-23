import asyncio
import aiohttp
import os
import threading
import time
import pickle
from datetime import datetime
from urllib.parse import urlparse
from pathlib import Path

# Constants
DOWNLOAD_DIR = 'downloads'
METADATA_FILE = 'metadata.pkl'
MAX_RETRIES = 3

# Thread-safe list for metadata
download_metadata = []
metadata_lock = threading.Lock()


def get_filename_from_url(url):
    parsed = urlparse(url)
    return os.path.basename(parsed.path) or f"file_{int(time.time()*1000)}"


def save_file(data, filepath):
    """Thread target to write file to disk"""
    with open(filepath, 'wb') as f:
        f.write(data)


def record_metadata(filename, url, status):
    with metadata_lock:
        entry = {
            'filename': filename,
            'url': url,
            'status': status,
            'timestamp': datetime.now().isoformat()
        }
        download_metadata.append(entry)


async def download_file(session, url):
    retries = 0
    while retries < MAX_RETRIES:
        try:
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.read()
                    filename = get_filename_from_url(url)
                    filepath = os.path.join(DOWNLOAD_DIR, filename)

                    # Write file in separate thread
                    thread = threading.Thread(target=save_file, args=(data, filepath))
                    thread.start()
                    thread.join()

                    record_metadata(filename, url, 'success')
                    print(f"✅ Downloaded: {filename}")
                    return
                else:
                    raise Exception(f"Failed with status {response.status}")
        except Exception as e:
            retries += 1
            print(f"⚠️ Retry {retries} for {url} - {e}")

    # After max retries
    record_metadata(get_filename_from_url(url), url, 'failed')
    print(f"❌ Failed to download: {url}")


async def main(urls):
    os.makedirs(DOWNLOAD_DIR, exist_ok=True)
    async with aiohttp.ClientSession() as session:
        tasks = [download_file(session, url) for url in urls]
        await asyncio.gather(*tasks)


def save_metadata():
    with open(METADATA_FILE, 'wb') as f:
        pickle.dump(download_metadata, f)
    print(f"📝 Metadata saved to {METADATA_FILE}")


if __name__ == '__main__':
    # Load URLs
    with open('urls.txt') as f:
        urls = [line.strip() for line in f if line.strip()]

    asyncio.run(main(urls))
    save_metadata()
 



 