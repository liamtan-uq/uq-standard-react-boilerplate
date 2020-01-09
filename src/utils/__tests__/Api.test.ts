import React from "react";
import ReactDOM from "react-dom";
import Api from "../Api";
import { IUser } from "../../types";
import { AxiosResponse } from "axios";

it("successfully performs GET request", async () => {
  const usersResponse: AxiosResponse<IUser[]> = await Api.getUsers();
  expect(usersResponse.data.length).not.toBe(0);
});
