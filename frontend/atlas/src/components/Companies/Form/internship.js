import axios from "axios";

export const addInternship = async (internship) => {
    try {
        const response = await axios.post('http://localhost:8080/internships', internship);
        const data = response.data;
        console.log(data);
        return data;
      }
      catch(error) {
          console.error(error);
      }
}