import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Signup extends Component{

    signup(values){
        fetch('http://localhost:4011/signup',{
            method:'POST',
            body:values
        });
    }
    render(){
        return(
            <Form inline>
                <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                <Button id="signUpBtn" onclick={this.signup(values)} variant="primary"> Sign Up </Button>
            </Form>
        );
    }
}
export default Login;