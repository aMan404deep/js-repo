// Stack (Primitive) , Heap (Non-Primitive)

// let myYoutube = "AmandeepYt"

// let anothername = myYoutube
// anothername = "SinghAman"

console.log(myYoutube);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi : "user@byl"
}

let userTwo = userOne
userTwo.email = "amandeep@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);