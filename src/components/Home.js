import React from 'react';
import Table from 'react-bootstrap/Table';
import './Home.css';
import Navbarshow from './Navbar';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom';
import Employee from './Employee';

// const Employee = [
//     {
//         id: 1,
//         Name: 'John',
//         age: 21,
//     },
  
//     {
//         id: 2,
//         Name: 'Jane',
//         age: 22,
//     },
//     {
//         id: 3,
//         Name: 'Mike',
//         age: 23,
//     },
//     {
//         id: 4,
//         Name: 'Mary',
//         age: 24,
//     },
//     {
//         id: 5,
//         Name: 'Nike',
//         age: 25,
//     }
// ]


const Home = () => {
    console.log(Employee);

    let history = useNavigate();

    const handleDelete = (id) => {
        let index = Employee.map((e) => e.id).indexOf(id);
        Employee.splice(index,1);
        history('/');
    }

    const handleEdit = () => {
        console.log("Edit");
    }

    return (
        <div>
            <Navbarshow/>
                <div style={{margin:'10rem'}}>
                    <Table striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Age
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Employee && Employee.length > 0
                                ?
                                Employee.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.age}
                                            </td>
                                            <td>
                                                <Link to="/edit">
                                                    <Button variant="primary" onClick={() => handleEdit(item.id)}>Edit</Button>
                                                </Link>
                                                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>{' '}
                                            </td>
                                        </tr>
                                    )
                                }) :
                                "No data available"
                            }
                        </tbody>
                    </Table>
                    <Link className='d-grid gap-2' to="/create">
                        <Button size='lg'>Create</Button>
                    </Link>
                </div>
        </div>

    );
};

export default Home;