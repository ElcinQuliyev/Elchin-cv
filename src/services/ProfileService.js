import axios from "axios";
const baseURL = "https://el-db.vercel.app";

export async function getProfile() {
  const req = await axios.get("userData", {
    baseURL,
  });
  return req.data;
}

export async function getExperience() {
  const req = await axios.get("/Experience", {
    baseURL,
  });
  return req.data;
}

export async function getEducation() {
  const req = await axios.get("/Education", {
    baseURL,
  });
  return req.data;
}
export async function getTech() {
  const req = await axios.get("/Tech", {
    baseURL,
  });
  return req.data;
}
