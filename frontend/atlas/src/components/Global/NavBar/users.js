import axios from 'axios'

export const registerUndergraduate = async (user) => {
    try {
        const response = await axios.post('http://localhost:8080/users/register', user);
        const data = response.data;
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}

export const registerCompany = async (user) => {
    try {
        const response = await axios.post('http://localhost:8080/users/register', user);
        const data = response.data;
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}
