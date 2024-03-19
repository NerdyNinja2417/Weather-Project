fetch("https://randomuser.me/api/?results=20")
//basiclly used to fetch 20 randomly creeated users from the api
  
//the then statements from what i found on internet is just a method that makes api calls more managable and readable
//the other information i found on it is that before .then the term they used was handling asynchronous operations was that it often involved nesting callouts whitch led to what is callled "callback hell" witch is basically deeply nested difficult-to-read-code and 
//the other bit of information that i found on this particular assignment is that its actually using a function to return a promise using a function and it said "A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises have states: pending, fulfilled, or rejected."
//and from what have gathered and understand the promise is the opertion of the api call. including the initiation of the request.and then is used to handle the problem once its resolved and then you use the respone object in the  .then statment to further process the data 
.then((response) => response.json())
 //in this .then it is tiied to the previous then and the data part of it is representing the data collected from the api and is basically making it to where the code can be further proccesed 
 //the consts are whats being used to create a variable to first put the data collected in and then its getting the id of div in the html i assume so that the data collected can be rendered on the html page
//the card const is creating variable that holds the actual div and creates a new element to hold it
//card.classList.add("contact-card") is adding the contact card class to the html so that it can be called upon in the css?
//the const name and const phone const address and const picture are creating p elements within the html to hold the collected data 
// and as far as from the information i gathered on using the  `${user.name.first}` `${user.name.last}` as well as something similiar for the address as well they are called template literals you can use them in JavaScript and the defintion on what they do and how they work "Template literals allow you to embed expressions inside a string literal, denoted by backticks ( ). Within a template literal, you can directly insert variables or expressions by wrapping them in ${}."
//from past experience and from what some others were having troubles with pictures not pulling up thats why I picture.alt ="profile picture" just in case my pictures are not working i know whrere to go to chck and verfy and validate why a picture is not rendering so that i can fix it
//and from what i gathered on appendchild. appendChild takes the parameters which is the parent element you and the child element and it attaches the child element to the parent element but only if it is already a part of the html DOM otherwise it its added to the end of the list of children of the parent element
// so using appendChild its adding the phone address name and picture elements to the card element created in the html to create and construct the layout of the  contact card for the html?
//and then it uses the container.appendChild(card) to add the parent element card with each child element we added to the the div to further construct the contact card layout for the html
 .then((data) => {
    const users = data.results;
    const container = document.getElementById("container");

    users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("contact-card");

      const name = document.createElement("p");
      name.textContent = `${user.name.first} ${user.name.last}`;

      const phone = document.createElement("p");
      phone.textContent = user.phone;

      const address = document.createElement("p");
      address.textContent = `${user.location.street.number} ${user.location.street.name}`;

      const picture = document.createElement("img");
      picture.src = user.picture.large;
      picture.alt = "Profile Picture";

      card.appendChild(picture);
      card.appendChild(name);
      card.appendChild(phone);
      card.appendChild(address);
      container.appendChild(card);
    });
  });