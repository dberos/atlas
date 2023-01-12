import axios from 'axios'

export const addInterest = async (interest) => {
    try {
      const response = await axios.post('http://localhost:8080/interests', interest);
      const data = response.data;
      console.log(data);
      return data;
    }
    catch(error) {
        console.error(error);
    }
}

export const addMarks = async (id, marks) => {
    try {
        const response = await axios.put(`http://localhost:8080/interests/${id}`, marks);
        const data = response.data;
        console.log(data);
        return data;
      }
      catch(error) {
          console.error(error);
      }
}
