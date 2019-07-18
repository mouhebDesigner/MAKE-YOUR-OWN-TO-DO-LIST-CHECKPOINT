import React from 'react';
import { relative } from 'path';

export default class List extends  React.Component{
    state = {
        decoration: '',
        color: ''
    }
    render(){
        return(
            <div className="beforeDiv" style={{
                display: 'flex',
                height: '50px',
                verticalAlign: 'middle',
                marginBottom: 10,
                background: 'white'
            }}>
            
            
              
                    <li style={{
                        
                        textDecoration: this.state.decoration,
                        color: this.state.color,
                        textAlign: 'left',
                        paddingLeft: '1px',
                        listStyle : 'none',
                        paddingLeft: '2px',
                        lineHeight: '40px',
                        display: 'inline-block'
                    }} onClick={()=> this.setState({
                        decoration: 'line-through',
                        color: 'red'
                        })}>
                        <span style={{
                            fontSize: '15px',
                            height: '12px',
                            display: 'block'
                            
                        }}>
                            <strong>Task {this.props.index}</strong>
                            
                        </span>
                        <span style={{
                                fontSize: '15px',
                                lineHeight: '0px',
                                fontWeight: 'blod' 
                            }}>{this.props.children}</span>
                    
                    </li>
                    <button className="close" style={{
                        marginLeft: '70%'
                    }}></button>        
               

                
            </div>
        ) 
    }
}