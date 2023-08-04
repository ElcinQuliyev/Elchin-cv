import axios from "axios";
let baseURL = "https://api.github.com";

export async function getRepos() {
  let req = await axios.get("/users/ElcinQuliyev/repos", {
    baseURL: baseURL,
  });
  return req.data;
}
