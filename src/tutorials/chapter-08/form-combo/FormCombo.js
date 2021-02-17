import React, { Component } from 'react';
import { PageWrap } from './Styling.js';
import CourseSelect from './CourseSelect';

export default class FormCombo extends Component {
  state ={
    courseType:null,
    course:null
  }

  onSelectChange=(courseType,course)=>{
    this.setState({
      courseType,
      course
    })
  }

  render() {
    return (
      <PageWrap>
        <CourseSelect onSelectCourse={this.onSelectChange}/>
        <p>Anda telah memilih kursus #{this.state.courseType} [{this.state.course}]</p>
      </PageWrap>
    )
  }
}
