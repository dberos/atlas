import axios from "axios";

export const findResults = async (res) => {
    try {
      const response = await axios.post('http://localhost:8080/internships/search', res);
      const data = response.data;
      console.log(data);
      return data;
    }
    catch(error) {
        console.error(error);
    }
}