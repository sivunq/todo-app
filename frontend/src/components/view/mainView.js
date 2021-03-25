import React,{ Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NavBar from "../navbar/navbar";
import Tasks from "../tasklist/taskList";
import TaskAdder from "../tasklist/taskAdder";
import {initView} from "../../state/actions/actions";
import Jumbotron from "react-bootstrap/Jumbotron";


export class MainView extends Component {

    componentDidMount() {
        this.props.initView();
    }

    render() {
        return (
            <div className="MainView">
                <NavBar userinfo={this.props.userinfo} />
                <Jumbotron>
                    <Tasks tasks={this.props.tasks} userinfo={this.props.userinfo} />
                    <TaskAdder userinfo={this.props.userinfo} />
                </Jumbotron>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo,
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        initView
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(MainView);