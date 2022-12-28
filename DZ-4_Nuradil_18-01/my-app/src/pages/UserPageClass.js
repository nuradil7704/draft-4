import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchUserAction} from "../redux/action/action";
import UserList from "../component/userList/UserList";

class UserPageClass extends Component {

    getUsers = () => {
        this.props.fetchUserAction()
    }

    render() {
        return (
            <div>
                <ul>
                    <li>phone</li>
                    <li>name:</li>
                    <li>adress:</li>
                    <li>email:</li>
                    <li>username:</li>
                </ul>
                <button onClick={this.getUsers}>get user</button>
                {this.props.users.map(user => <UserList userInfo={user}/>)}
            </div>
        );
    }
}

const mapStateProps = state => {
    return {
        users: state.userReducer.users
    }
}

const mapDispatchProps = {
    fetchUserAction
}

export default connect(mapStateProps,mapDispatchProps) (UserPageClass);