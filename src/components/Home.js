import React, { Fragment } from 'react';
import {useForm} from "react-hook-form";
import {Button, Table} from "react-bootstrap";
import Employee from './Employee';
import './Home.css';

const Home = () => {
    return (
        <Fragment>
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
                                    <tr>
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
        </Fragment>
    );
};

export default Home;