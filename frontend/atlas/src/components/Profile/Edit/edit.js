import axios from "axios";

export const editUser = async (user) => {
    try {
        const response = await axios.put('http://localhost:8080/users/edit', user);
        const data = response.data;
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}
