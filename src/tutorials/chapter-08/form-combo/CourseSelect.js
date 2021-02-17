import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Courses = {
	programming: [ 'Java', 'JavaScript', 'Python', 'C#', 'Go', 'Scala', 'Kotlin', 'PHP' ],
	database: [
		'Oracle',
		'PL/SQL',
		'SQL Server',
		'MariaDB',
		'MySQL',
		'Postgre',
		'MongoDB',
		'Elastic',
		'Cassandra',
		'Couchbase',
		'Neo4j',
		'Apache Spark'
	]
};

const readCourse = (courseType) => {
	return new Promise((resolve, err) => {
		setTimeout(() => resolve(Courses[courseType]), 1000);
	});
};

export default class CourseSelect extends Component {
	state = {
		courseType: null,
    courses: [],
    course:null,
		loading: false
	};

	renderCourseType = () => {
		return (
			<select value={this.state.courseType} onChange={this.onSelectCourseType}>
				<option value="">Pilih Kursus ?</option>
				<option value="programming">Programming</option>
				<option value="database">Database</option>
			</select>
		);
	};

	onSelectCourseType = (e) => {
		const value = e.target.selectedIndex !== 0 ? e.target.options[e.target.selectedIndex].value : null;
		console.log('value : ' + value);
    const courseType = value;
    this.setState({
      courseType
    })

		if (courseType) {
			// fetch data course here..
			this.fetch(courseType);
		}
		console.log(this.state.courses);
	};

	// fetch data by calling readCourse
	fetch = (courseType) => {
    this.setState({ loading: true, courses: [] });
    
		readCourse(courseType).then((courses) => {
			this.setState({loading: false,courses});
    });
    
	};

	// render select ke #2
	renderCourseSelect = () => {
		if (this.state.loading) {
			return (
				<div className="spinner">
					<ClipLoader sizeUnit={'px'} size={30} color={'#0656535'} loading={this.state.loading} />
				</div>
			);
    }
    
    if (!this.state.courseType || !this.state.courses) return <span/>;

		return (
			<select value={this.state.course} onChange={this.onSelectCourse}>
				{[
					<option value="">Which Course?</option>,
					...this.state.courses.map((course, index) => (
						<option value={course} key={index}>
							{course}
						</option>
					))
				]}
			</select>
		);
  };
  
  // listener for combobox 2
  onSelectCourse = (e)=>{
    const course = e.target.value;
    this.setState({course});
    this.props.onSelectCourse(this.state.courseType, course);
  }

	render() {
		return (
			<div>
				{this.renderCourseType()}
				<br />
				{this.renderCourseSelect()}
			</div>
		);
	}
}
