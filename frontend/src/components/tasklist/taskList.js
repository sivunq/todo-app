import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {completeTask} from "../../state/actions/actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Tasks extends Component{

    showTasks(tasks, userinfo) {
        let taskIds = Object.keys(tasks);
        return (
            taskIds.map((key) => {
                return (
                    <Row>
                        <Col>
                            {tasks[key].task.taskdescription}
                        </Col>
                        <Col>
                            <Button id={key} variant="success" onClick={() => this.props.completeTask(key, userinfo)}>Complete</Button>
                        </Col>
                    </Row>
                )
            })
        );
    }

    render() {
        const { tasks, userinfo } = this.props;
        console.log(this.props);
        return (
            <Container>
                {
                    tasks.length === 0 || !(userinfo && userinfo.username)?
                    <div>No Tasks</div> :
                    this.showTasks(tasks, userinfo)
                }
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        userinfo: state.userinfo
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        completeTask
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);