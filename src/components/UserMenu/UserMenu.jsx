import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/actions';
import { useAuthUser } from 'hooks/useAuthUser';
import Button from '@mui/material/Button';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuthUser();

    return (
        <div>
            <p>Welcome to your phonebook {user.name}</p>
            <Button variant="contained" type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </div>
    );
};