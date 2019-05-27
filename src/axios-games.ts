import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakewebpage-b18d3.firebaseio.com/"
})

export default instance;