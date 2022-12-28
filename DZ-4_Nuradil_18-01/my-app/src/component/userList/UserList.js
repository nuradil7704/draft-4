import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchUserActions} from "../../redux/action/action";

function UserList({userInfo}) {
    // const [setUsers] = useState({})
    const dispatch = useDispatch()
    const rosteRemployees = (event) => {
        dispatch(fetchUserActions(event.target.value))
            // .then(data => {setUsers({
            //     phone:data.phone,
            //     name:data.name,
            //     adress:data.adress,
            //     email:data.email,
            //     username:data.username,
            // })
            // })
    }
    return (
        <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.id}</li>
            <li><button onClick={rosteRemployees} value={userInfo.id}>show info</button></li>
        </ul>
    );
}

export default UserList;