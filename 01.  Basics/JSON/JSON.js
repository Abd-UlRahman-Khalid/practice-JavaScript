//JSON

const Person = {
  name: "John Doa",
  age: 20,
  email: "js@gmail.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "NewYork",
    idk: true,
  },
};
//JSON.stringify()
const jsonString = JSON.stringify(Person); //convert from object into JSON
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
