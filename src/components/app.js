import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import axios from 'axios';
import AddStudent from './add_student';
import Table from './table';
import { formatPostData } from '../helpers';

class App extends Component {
    state = {
        students: []
    }

    componentDidMount(){
        this.getStudentData();
    }

    deleteStudent = (id) => {
        const indexToDelete = this.state.students.findIndex((student) => {
            return student.id === id;
        });

        if(indexToDelete >= 0){
            const tempStudents = this.state.students.slice();

            tempStudents.splice(indexToDelete, 1);

            this.setState({
                students: tempStudents
            });
        }
    }

    addStudent = async (student) => {

        const formattedStudent = formatPostData(student);

        const resp = await axios.post('http://localhost/server/createstudent.php', formattedStudent);

        console.log('Add Student Response:', resp);
    }

    async getStudentData(){
        // Call server to get student data

        const resp = await axios.get('http://localhost/server/getstudentlist.php');

        console.log('Get List Resp:', resp);

        if(resp.data.success){
            this.setState({
                students: resp.data.data
            });
        }
    }

    render(){
        return (
            <div>
                <h1 className="center">SGT</h1>

                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
