import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import './profileEdit.css'
import { editUser } from './edit';
import { IsLogged } from '../../Global/NavBar/Login/IsLogged';

const ProfileEdit = () => {

    const { setLogged } = useContext(IsLogged);

    const [email, setEmail] = useState([]);
    const [name, setName] = useState([]);
    const [surname, setSurname] = useState([]);
    const [oldTelephone, setOldTelephone] = useState([]);
    const [telephone, setTelephone] = useState([]);
    const [oldPassword, setOldPassword] = useState([]);
    const [password, setPassword] = useState([]);
    const [confirmPassword, setConfirmPassword] = useState([]);
    const [error, setError] = useState([]);
    const [notification, setNotification] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('id');
        const type = localStorage.getItem('type');

        const getUser = async () => {
            const response = await axios.get(`http://localhost:8080/users/id=${id}`);
            const data = response.data;
            setEmail(data.email);
            setOldTelephone(data.telephone);
            setTelephone(data.telephone);
            if(!data.telephone) {
                setTelephone([]);
                setOldTelephone([]);
            }
            setOldPassword(data.password);
            setPassword(data.password);
        }
        getUser();

        if(type === 'undergraduate') {
            const getUndergraduate = async () => {
                const response = await axios.get(`http://localhost:8080/undergraduates/id=${id}`);
                const data = response.data;
                setName(data.first_name);
                setSurname(data.last_name);
            }
            getUndergraduate();
        }
        else {
            const getCompany = async () => {
                const response = await axios.get(`http://localhost:8080/companies/id=${id}`);
                const data = response.data;
                setName(data.name);
            }
            getCompany();
        }

    }, [])

    useEffect(() => {
        if(password.length === 0) {
            setError('Ο κωδικός είναι υποχρεωτικός');
            setIsDisabled(true);
        }
        else if(password !== confirmPassword && confirmPassword.length !== 0) {
            setError('Οι κωδικοί πρόσβασης πρέπει να ταιριάζουν');
            setIsDisabled(true);
        }
        else if(password !== oldPassword && confirmPassword.length === 0) {
            setError('Οι κωδικοί πρόσβασης πρέπει να ταιριάζουν');
            setIsDisabled(true);
        }
        else {
            setError([]);
            setIsDisabled(false);
        }
    }, [password, confirmPassword, oldPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password === oldPassword
            && telephone === oldTelephone ) {
                setNotification('Δεν πραγματοποιήθηκε κάποια αλλαγή')
            }
        else {
            setNotification('Τα στοιχεία σας αλλάξαν με επιτυχία!');
            const user = {
                "id": localStorage.getItem('id'),
                "telephone": telephone.length !== 0 ? telephone : null,
                "password": password
            }
            await editUser(user);
            if(password !== oldPassword) {
                localStorage.clear();
                setLogged(false);
            }
        }
    }

  return (
    <div className="profile-edit-container">
        <div className="profile-edit-wrapper">
            <div className="profile-edit-header">
                <div className="profile-edit-name">
                    <h1>
                        {name} {surname.length !== 0 && surname}
                    </h1>
                </div>
                <div className="profile-edit-email">
                    <h1>
                        {email}
                    </h1>
                </div>
            </div>
            <form
            style={{width: '100%'}}
            onSubmit={handleSubmit}
            >
                <div className="profile-edit-value-container">
                    <div className="profile-edit-value">
                        <label>
                            Τηλέφωνο
                        </label>
                        <input 
                        type="text"
                        placeholder='Ποιό είναι το τηλέφωνό σου;'
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value.replace(/[^0-9/]/g, ''))}
                        />
                    </div>
                </div>
                <div className="profile-edit-value-container">
                    <div className="profile-edit-value"
                    style={{borderImageSource: 'none', borderImageSlice: 'none', borderBlockStart: 'none'}}
                    >
                        <label>
                            Κωδικός Πρόσβασης
                        </label>
                        <input 
                        type="password"
                        placeholder='Ποιός θες να είναι ο κωδικός πρόσβασης;'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="profile-edit-value-container">
                    <div className="profile-edit-value"
                    style={{borderImageSource: 'none', borderImageSlice: 'none', borderBlockStart: 'none', marginBottom: '30px'}}
                    >
                        <label>
                            Επιβεβαίωση Κωδικού
                        </label>
                        <input 
                        type="password"
                        placeholder='Επανάλαβε τον κωδικό πρόσβασης'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{border: error.length !== 0 
                                && password.length !== 0
                                && confirmPassword.length !== 0
                                && '2px solid red',
                                outline: error.length !== 0 
                                && password.length !== 0 
                                && confirmPassword.length !== 0
                                && 'none'}}
                        />
                    </div>
                </div>
                <div className="profile-edit-button-container">
                    {
                        notification.length === 0 ?
                            <button
                            disabled={isDisabled}
                            style={{cursor: isDisabled && 'not-allowed', backgroundColor: isDisabled && '#ADABA8'}}
                            >
                                Υποβολή
                            </button> :
                                <p>
                                    {notification}
                                </p>
                    }
                </div>
            </form>
        </div>
    </div>
  )
}

export default ProfileEdit