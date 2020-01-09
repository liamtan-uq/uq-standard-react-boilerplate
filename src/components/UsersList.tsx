import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IStore, IUser } from "../types";
import { fetchUsers } from "../actions/api";

export default function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users: IUser[] = useSelector((state: IStore) => state.apiState.users);
  return (
    <ul>
      {users.map((user: IUser) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
