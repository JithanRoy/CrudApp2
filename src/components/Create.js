import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom';
import Employees from './Employee';

const Create = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        Employees.push({id: uniqueId, name: a, age: b});

        history("/");
    }

    let history = useNavigate();

    return (
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" required onchange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" required onchange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button>
        </Form>
    );
};

export default Create;