import React, { Component } from 'react';
import TodoItem from './Components/TodoItem';
import AddNewItem from './Components/AddNewItem';
import './App.css';

class App extends Component {

  state={
    task: [{completed: false ,description: "Task1"},
    {completed: false ,description: "Task2"},
    {completed: false ,description: "Task3"}
  ],
  newItem: ""
  }
  
  checkItem = (des) => {
    // let pos=0;
    // for(let i=0;i<this.state.task.length;i++)
    // {
    //   if(des === this.state.task[i].description)
    //   { pos=i;
    //     break;
    //   }
    // }
    const newTask = this.state.task.map(data => {
      if(data.description === des){
        data.completed = !data.completed;
      }
      return data;
    })
    // console.log(pos);
    // const  isChecked = !this.state.task[pos].completed;
    // const newTask = [...this.state.task];
    // newTask[pos].completed = isChecked;
    this.setState({
      task: newTask
    });
    // console.log(isChecked);    
  }

  removeCompleted = () => {
    const newTask = [];
    for(let i=0;i<this.state.task.length;i++){
      if(this.state.task[i].completed !== true){
        newTask.push(this.state.task[i]);
      }
    }
    
    this.setState({
      task: newTask
    })
  }

  handleChange = (event) => {
    this.setState({
      newItem: event.target.value
    })
  }

  addItem = () => {
    if(this.state.newItem !== ""){
      const newTask = {
        completed: false,
        description: this.state.newItem
      }
      const newList = [...this.state.task];
      newList.unshift(newTask);
      this.setState({
        task: newList
      })
    }
  }

  render() {
    const TodoList = this.state.task.map((data,index) => {
      return <TodoItem 
      checked={data.completed} 
      description={data.description} 
      onclick={() => {this.checkItem(data.description)}} 
      key={index}/>
    })

    return (
      <div className="main">
        <h2>Todo List</h2>
        <AddNewItem onsubmit={this.addItem} onchange={this.handleChange} description={this.state.newItem} remove={this.removeCompleted}/>
        {TodoList}
      </div>
    );
  }
}

export default App;
