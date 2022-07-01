import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, getUsersAction } from '../../redux/actions/users';
import Switch from '@mui/material/Switch';
import { toggleActivityAction } from '../../redux/actions/users';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const ListUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.data.users)

    useEffect(() => {
        const fetchUsers = async () => {
            await dispatch(getUsersAction())
        }
        fetchUsers();
    }, []);


    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Typography align='center' gutterBottom>All Users</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="Users table" stickyHeader sx={{ width: "60em", margin: "auto" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell >Username</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">isActive</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users ? users.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {user.username}
                                    </TableCell>
                                    <TableCell align="right">{user.email}</TableCell>
                                    <TableCell align="right">{<Switch defaultChecked={user.isActive} onChange={() => dispatch(toggleActivityAction(user))} />}</TableCell>
                                    <TableCell align="right">
                                        <Button color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={() => dispatch(deleteUserAction(user))}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                                :
                                <Typography>No users currently</Typography>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default ListUsers;
