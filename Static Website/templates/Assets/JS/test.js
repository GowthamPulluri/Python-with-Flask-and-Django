let a=10;
let b=5;

console.log(a+b)
console.log(a==b)

function adult(age)
{
    if (age>18){
        return "Major";
    }
    else
    {
        return "Minor";
    }
}
console.log(adult(20));
function greet(name)
{
    return "Hello "+name;
}
console.log(greet("Arun"));

let friend =["Arun","John"];
console.log(friend[1]);