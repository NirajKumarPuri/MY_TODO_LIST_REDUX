import React from 'react';
import styles from "./todo.module.css";

import { addTodoItem,deleteItem } from "../Actions/todo";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

class Todo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            item: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addTodoItem(this.state.item)
        this.setState({
            item:''
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content1}>
                    <div className={styles.headingbox}>
                        <h1 className={styles.heading}>MY Todo List</h1>
                    </div>
                    <div className={styles.inputbox}>
                <input className={styles.input } name='item' value={this.state.item} onChange={this.handleChange} type='text' />
                <button className={styles.button} onClick={this.handleSubmit}>Add</button>
                </div>
                </div>
                <div className={styles.content2}>
                    {
                        this.props.todoList.map((item, index) => {
                            return (
                                <diV className={styles.box}>
                                <p className={styles.para} key={index}>
                                    {item}
                                </p>
                                <button className={styles.delete} onClick={()=>this.props.deleteItem(index)}>Delete</button>
                                </diV>
                                
                            )
                        })
                    }
                </div>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTodoItem,deleteItem},dispatch)
    
}


const mapStateToProps = (store) => {
    console.log(store);

    return {
        todoList: store.todoItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

