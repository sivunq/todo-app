import React,{Component} from 'react';

class Newtask extends Component{

    handleSubmit(values){
        fetch('http://localhost:4011/addtask',{
            method:'POST',
            body:values
        }).then((response)=>{console.log(response)});
    
    }

    render(){
        return(
            <div>
                <Form onSubmit={(values) => this.handleSubmit(values)}>
                    <Label htmlFor="taskid" >Task Id</Label>
                    <input type="text" id="taskid" className="form-input"/>
                    <Label htmlFor="taskdescription" >Task Description</Label>
                    <textarea id="taskdescription" className="form-input"></textarea>
                </Form>
            </div>
        )
    }
}