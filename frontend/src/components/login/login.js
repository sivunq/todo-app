import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {validateLogin, signout} from "../../state/actions/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Login extends Component{

    render(){
        return(
            this.props.userinfo ?
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
            :
            <Form inline>
                {this.props.userinfo.username}
                <Button id="signOutBtn" variant="primary"
                onClick={() => this.props.signout()} >
                    <b>Sign Out</b>
                </Button>
            </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);