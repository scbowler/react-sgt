import React, { Component } from 'react';

class AddStudent extends Component {
    state = {
        name: 'Heather',
        course: 'Math 093',
        grade: '97',
        instructor: 'Dan',
        notes: 'Heather is a great student!'
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.add(this.state);

        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            name: '',
            course: '',
            grade: '',
            instructor: '',
            notes: ''
        });
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        const {name, course, grade, instructor, notes} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="name" type="text" id="name" value={name} autoComplete="off"/>
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="course" type="text" id="course" value={course} autoComplete="off"/>
                        <label htmlFor="course">Course</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="grade" type="number" id="grade" value={grade} autoComplete="off"/>
                        <label htmlFor="grade">Grade</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="instructor" type="text" id="instructor" value={instructor} autoComplete="off"/>
                        <label htmlFor="instructor">Instructor</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="notes" type="text" id="notes" value={notes} autoComplete="off"/>
                        <label htmlFor="notes">Notes</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s6 center">
                        <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
                    </div>
                    <div className="col s6 center">
                        <button className="btn green darken-2">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddStudent;
