import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import Switch from '@mui/material/Switch';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleActivityAction } from '../../redux/actions/users';
import { deleteUserAction } from '../../redux/actions/users';
import ChangeRole from '../ChangeRole/ChangeRole';
import { deleteAdminAction } from '../../redux/actions/admins';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const dispatchDeleteUser = async (user) => {
        setLoading(true)
        if (user.roleId === 3)
            await dispatch(deleteUserAction(user));
        else {
            await dispatch(deleteAdminAction(user));
            setLoading(false)
        }
        setLoading(false)
    }

    return (
        <TableRow>
            <TableCell>
                {user.roleId === 3 ?
                    <Link to={`/users/${user.id}`}>
                        <img src={user?.usersprofile?.profilePic} style={{ width: "4em", height: "auto" }} />
                    </Link>
                    :
                    <img src={user?.usersprofile?.profilePic} style={{ width: "4em", height: "auto" }} />

                }
            </TableCell>
            <TableCell component="th" scope="row">
                {user.username}
            </TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right"><ChangeRole user={user} /></TableCell>
            <TableCell align="right">{<Switch defaultChecked={user.isActive} onChange={() => dispatch(toggleActivityAction(user))} />}</TableCell>

            <TableCell align="right">
                <Button color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={() => dispatchDeleteUser(user)}>
                    Delete
                </Button>

            </TableCell>
        </TableRow >
    );
}

export default User;
