export let message = "ES6 modules";

export function user(name){
 console.log(`Hello ${name}`);
}

export class text{
    constructor(){
        console.log("Constructor Method");
    };
}

//short hand
//export{ message, user, text};