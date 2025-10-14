let age = 22;
let citizen = true;
let isRegistered = false;

if (age >= 18) {
    if(citizen) {
        if(isRegistered) {
            console.log('you are eligible to vote');    
        }else{
            console.log('you are not eligible due to registration status');
        }
    }else{
        console.log('you are not eligible due to citizenship status ');
    }
}else{
    console.log('you are not eligible to vote (younger) ');
}