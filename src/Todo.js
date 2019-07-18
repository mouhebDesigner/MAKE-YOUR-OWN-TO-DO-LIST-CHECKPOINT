import React from 'react'
import List from './List'
import './css/style.css'
const Tasks = [];
var Content = "";
var ListItem = "";
export default class Todo extends React.Component{
    state = {
        task : [],
        value: '',
        validation: true,
        styles : {
            backgroundColor: '#ff2851',
        },
        header:{
            backgroundColor: '#0a0224'
        }
    }
    
    AddTask(val){
        Tasks.push(val);
        this.setState({
            task: Tasks,
            validation: true,
            styles : {
                backgroundColor: '#ff2851',
            },
            header:{
                backgroundColor: '#0a0224'
            }
        });
    }
    handleSubmit(event){
        alert(`Hello ${event.target.value}`);
    }
    handleChange(event){
        this.setState({
            task: event.target.value
        })
    }

      onChange(event) {
          this.setState({value: event.target.value});
      }
      setText(){
          return 'line-through';
      }
    render(){
        if(this.state.validation === true){
            ListItem = this.state.task.map((task, i) => <List index={i}>{task}</List>);
            Content = <button onClick={()=> {
                this.setState({
                    validation: false,
                    styles: {
                        backgroundColor: '#0a0224'
                    },
                    header:{
                        backgroundColor: '#ff2851'
                    }
                })
                ListItem = "";
                }} className="button"></button>
        } else {
            Content = <>
            <input type="text" onChange={this.onChange.bind(this)} className="Task"/>
            <div className="GroupButton">
                <button type="reset" className="Cancel"></button>
                <button onClick={()=>{this.AddTask(this.state.value)}} className="Save"></button>

            </div>
            </>;
            
        }
        return(
            <>
                <div className="container">
                    <div className="header" style={this.state.header}>
                    
                    </div>
                    <div className="content" style={this.state.styles}>
                        {ListItem}
                        {Content}
                    </div>
                </div>
                    
                
            </>
        )

    }
}