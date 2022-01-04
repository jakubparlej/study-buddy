import React, { useState } from "react";
import UsersList from "../components/organisms/UsersList/UsersList";
import { users as usersData } from "../data/users.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/globalStyle";
import { theme } from "../assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "../components/organisms/Form/Form";
import Menu from "../components/organisms/Menu/Menu";

const initialFormState = {
  name: "",
  attendance: "",
  average: "",
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Menu />
          <Routes>
            <Route
              path="/add-user"
              element={
                <Form
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              }
            ></Route>
            <Route
              path="/"
              element={<UsersList deleteUser={deleteUser} users={users} />}
            ></Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
