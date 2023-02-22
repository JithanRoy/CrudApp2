import React, {useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';
import Employees from './Employee';


const Edit = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    const index = Employees.map((e) => {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let employee = Employees[index];
        employee.Name = name;
        employee.age = age;

        history('/');
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setId(localStorage.getItem('Id'));
    }, []);



    return (
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" value = {age} required onChange={(e) => setAge(e.target.value)}></Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
        </Form>
    );
};

export default Edit;