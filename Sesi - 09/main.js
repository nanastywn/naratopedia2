const endpoint = "https://reqres.in/api/users";

fetch(endpoint, {
  method: "POST",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "aaa@gmail.com",
    firstName: "awan333",
  }),
})
  .then((result) => result.json())
  .then((data) => console.log(data));
