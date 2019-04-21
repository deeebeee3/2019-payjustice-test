import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4350aad5e239db395b9a15b70618b7adbde58196ac64bbdec7c8af1c5f0ae895"
  }
});
