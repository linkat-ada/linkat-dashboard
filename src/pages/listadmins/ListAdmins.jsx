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
import User from '../../components/user/User';
import { getAdminsAction } from '../../redux/actions/admins';


const ListAdmins = () => {
    const dispatch = useDispatch();
    const admins = useSelector((state) => state.admins.data);
    console.log("getting admins from global state")

    useEffect(() => {
        const fetchAdmins = async () => {
            await dispatch(getAdminsAction())
        }
        fetchAdmins();
    }, []);


    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Typography align='center' gutterBottom>All Admins</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="admins table" stickyHeader sx={{ width: "60em", margin: "auto" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell >Username</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Role</TableCell>
                                <TableCell align="right">isActive</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {console.log(admins)} */}
                            {admins && admins.length ? admins.map((admin, index) => (
                                <User user={admin} key={index} />
                            ))
                                :
                                <Typography>No admins currently</Typography>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default ListAdmins;
