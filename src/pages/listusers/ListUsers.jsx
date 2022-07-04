import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect } from 'react';
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
import { getUsersAction } from '../../redux/actions/users';
import User from '../../components/user/User';


const ListUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);
    console.log("getting users from global state")

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
                                <TableCell ></TableCell>
                                <TableCell >Username</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">isActive</TableCell>
                                <TableCell align="right">Role</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {console.log(users)} */}
                            {users && users.length ? users.map((user, index) => (
                                <User user={user} key={index} />
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
