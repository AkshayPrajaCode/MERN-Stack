var user={
    Name :"Akshay Kumar Prajapati",
    email:"akshaykumarprajapati@hotmail.com",
    Mobile : "8987918309",
    Address: {
        StreetName : "Vijaya Nagar",
        City : "Bhilwara",
        State : "Rajasthan",
        Country : "India"
    }
}
console.log(user);
//Accessing the property of an object using dot notation  
console.log("User's name is "+user.Name)  

//Accessing nested objects in JavaScript 
console.log("City where User lives   is "+user.Address.City)            

