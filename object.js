const person1 = {
    firstName: "ram",
    lastName: "joshi",
    age: 21,
    eyeColor: "blue"
  };
  
  const person2 = {firstName: "smit",lastName: "patel"};
 
  Object.assign(person2, person1);
  
  let text = Object.entries(person1);
  const p=document.getElementById("object");
  p.innerText = text;

  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  };
  
  Object.defineProperty(person, "year", {value:"2008"})
  
  document.getElementById("adding").innerHTML = person.year;

