import axios from "axios"
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyDWwpVdxX4yUrWkBFjv46f46a9ZNbyb0yg";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};