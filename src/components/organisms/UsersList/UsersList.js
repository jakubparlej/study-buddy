import React, { useState, useEffect } from "react";
import { users as usersData } from "../../../data/users.js";
import UsersListItem from "../../molecules/UsersListItem/UsersListItem.js";
import { Wrapper, StyledList } from "./UsersList.styles";

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: "Error" });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? "Loading..." : "Users list"}</h1>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} key={i} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
