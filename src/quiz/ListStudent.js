import React, { Component } from 'react'
import {studentData} from './StudentData';

export default class ListStudent extends Component {  
    state = {
		students: [],
    }

    componentDidMount(){
        this.setState({
            students : studentData 
        })
    }

    
    render() {
        const {students} = this.state;
        return (
            <div>
                {
                    students.map(value =>{
                        return (<p>{value.nim}</p>)
                    })
                }
            </div>
        )
    }
}
