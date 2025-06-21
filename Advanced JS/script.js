function para(){

const paragraph=document.getElementById("mypara");
paragraph.textContent="Pragraph contect changed"
const btn=document.getElementById("btn");
btn.addEventListener("click",function() {
    alert("Button is clicked")
})
}
//call back function
function greeting(name){
    console.log("Hello "+name);
}
function input(callback) {
    const name="Gowtham";
    callback(name);
}
input(greeting)


console.log("Before delay")
setTimeout(()=> {
    console.log("This runs after 3 secs")
}, 3000)
console.log("After Delay")

setInterval(() => {
    console.log('This runs every 4 seconds');
}, 4000);

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>response.json())
.then(data=> console.log(data))
.catch(error=> console.error("Error:",error));

async function getPosts() {
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await response.json();
        console.log(data)
    }
    catch(error) {
        console.error("Error: ",error)
    }
}
getPosts();