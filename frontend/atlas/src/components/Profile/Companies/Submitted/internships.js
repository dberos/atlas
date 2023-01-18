import axios from "axios";

export const acceptInternship = async (user) => {
    try {
        const response = await axios.put('http://localhost:8080/internships/accept', user);
        const data = response.data;
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}

export const acceptInterest = async (interest) => {
    try {
        const response = await axios.put('http://localhost:8080/interests/accept', interest);
        const data = response.data;
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}

export const rejectInterest = async (interest) => {
    try {
        const response = await axios.put('http://localhost:8080/interests/reject', interest);
        const data = response.data;
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}

export const answerAllInterests = async (id) => {
    try {
        const response = await axios.put(`http://localhost:8080/interests/answer/${id}`);
        const data = response.data;
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
}
