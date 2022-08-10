import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserInfo } from "../redux/actions/users";

const UserList = props => {
    const [tempState, setTempState] = useState({
        textInput: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setTempState({...tempState, [name]: value});
    }

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const setData = (type) => {
        switch (type) {
            case 'name': 
                dispatch(setUserInfo({ name: tempState.textInput }));
                break;
            case 'info1': 
                dispatch(setUserInfo({ info1: tempState.textInput }));
                break;
            case 'info2': 
                dispatch(setUserInfo({ info2: tempState.textInput }));
                break;
        
            default:
                break;
        }
        setTempState({...tempState, textInput: ''});
    }

    return (
        <>
            <div className="container">
                <h1>User List</h1>
                <p>
                    Practice using React Redux. Details encoded below will be displayed on all pages - see footer.
                </p>


                <div className="main-userlist">
                    <ul className="users-info">
                        <li>{(users.info.name) ? 'Name: ' + users.info.name : ''}</li>
                        <li>{(users.info.info1) ? 'Info 1: ' + users.info.info1 : ''}</li>
                        <li>{(users.info.info2) ? 'Info 2: ' + users.info.info2 : ''}</li>
                    </ul>

                    <div className="form-group">
                        <input 
                            type='text' 
                            name='textInput' 
                            value={tempState.textInput} 
                            onChange={handleOnChange}
                        />
                        <div className="button-group">
                            <button onClick={() => setData('name')}>Set Name</button>
                            <button onClick={() => setData('info1')}>Set Info 1</button>
                            <button onClick={() => setData('info2')}>Set Info 2</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default UserList;