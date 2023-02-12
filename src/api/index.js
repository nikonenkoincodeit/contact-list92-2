import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/contacts";

const BASE_URL = "http://localhost:3000/contacts";

// const options = {
//   method: "POST",
//   body: "",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// export async function saveData(payload) {
//   options.body = JSON.stringify(payload);

//   const response = await fetch(BASE_URL, options);
//   return await response.json();
// }

// export async function saveData(payload) {
//   const response = await axios.post("", payload);
//   return response.data;
// }

const req = new XMLHttpRequest();

export async function saveData(payload) {
  return new Promise((resolve, reject) => {
    req.open("POST", BASE_URL);
    req.responseType = "json";
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(payload));

    req.onload = () => resolve(req.response);
    req.onerror = () => reject(req.console.error());
  });
}