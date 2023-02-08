import React from 'react';
import Table from 'react-bootstrap/Table';
import './Home.css';
import Navbarshow from './Navbar';

const Employee = [
    {
        id: 1,
        Name: 'John',
        age: 21,
    },
  
    {
        id: 2,
        Name: 'Jane',
        age: 22,
    },
    {
        id: 3,
        Name: 'Mike',
        age: 23,
    },
    {
        id: 4,
        Name: 'Mary',
        age: 24,
    },
    {
        id: 5,
        Name: 'Nike',
        age: 25,
    }
]


const Home = () => {
    console.log(Employee);
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
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.age}
                                            </td>
                                        </tr>
                                    )
                                }) :
                                "No data available"
                            }
                        </tbody>
                    </Table>
                </div>
        </div>

    );
};

export default Home;