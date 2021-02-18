import React, { Component } from 'react';
import { studentData } from '../quiz/StudentData';
import StudentContext from './StudentContext';

export default class StudentProvider extends Component {
    state = {
        students: studentData
    }

    render() {
        return (
            <StudentContext.Provider
                value={{
                    students : this.state.students    
                }}
            >
                <>
                <h1>Hello Student</h1>
                {this.props.children}
                </>
            </StudentContext.Provider>
        )
    }
}
