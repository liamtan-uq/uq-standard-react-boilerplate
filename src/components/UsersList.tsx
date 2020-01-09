import React from 'react';
import { useSelector } from 'react-redux';
import { IStore, IUser } from '../types';

export default function UsersList() {
    const users: IUser[] = useSelector((state: IStore) => state.apiState.users);
    return (
        <ul>
            {users.map((user: IUser) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}