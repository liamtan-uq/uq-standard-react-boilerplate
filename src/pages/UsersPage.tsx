import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';

import UsersList from '../components/UsersList';
import { fetchUsers } from '../actions/api';


export default function AvailabilityPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>
            <h1>Users page</h1>
            <UsersList />
        </>
    );
}