fetch("https://randomuser.me/api/?results=20")
.then((response) => response.json())
.then((data) => console.log(data))