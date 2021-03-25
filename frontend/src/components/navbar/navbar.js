import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {validateLogin, signout} from "../../state/actions/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NavBar extends Component {

    showLogin(userinfo) {
        return (
            userinfo && userinfo.username ?
                <Form inline>
                    <span id="usernameDisplay">{this.props.userinfo.username}</span>
                    <Button id="signOutBtn" variant="primary"
                    onClick={() => this.props.signout()} >
                        <b>Sign Out</b>
                    </Button>
                </Form>
            :
                <Form inline>
                    <FormControl id="usernameInput" type="text" placeholder="Username" className="mr-sm-2" />
                    <FormControl id="passwordInput" type="password" placeholder="Password" className="mr-sm-2" />
                    <Button id="signInBtn" variant="primary"
                    onClick={() => this.props.validateLogin({
                        username: document.getElementById("usernameInput").value,
                        password: document.getElementById("passwordInput").value
                    })} >
                        <b>Sign In / Sign Up</b>
                    </Button>
                </Form>
        )
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                {this.showLogin(this.props.userinfo)}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        validateLogin,
        signout
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);