
let firstName: string = "Jared";
let lastName: string = "Brown";

function myName(first: string, last: string): string{
    return "Hello " + first + " " + last;
}

console.log(myName(firstName, lastName));