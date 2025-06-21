// const validUsername="Vishnu";
// const validPassword="12345";

const users = [
    { username: "Gowtham", password: "12345" },
    { username: "Dinesh", password: "12345" },
    { username: "Varun", password: "12345" }
];


function validateLogin() {
    const enteredUsername=document.getElementById("username").value;
    const enteredPassword=document.getElementById("password").value;

    const matchedUser=users.find(user =>
        user.username===enteredUsername && user.password===enteredPassword
    )
    if(matchedUser)
    {
        document.getElementById("result").style.color="green";
        document.getElementById("result").innerHTML = `Welcome, ${matchedUser.username}!`;

    }
    else
    {
       document.getElementById("result").style.color="red";
        document.getElementById("result").innerHTML="Invalid Username or Password";
    }
}