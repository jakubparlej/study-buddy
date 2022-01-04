import React from "react";
import { Wrapper, StyledList, StyledTitle } from "./UsersList.styles";
import UsersListItem from "../../molecules/UsersListItem/UsersListItem.js";

const UsersList = ({ users, deleteUser }) => {
  return (
    <Wrapper>
      <StyledTitle>Students List</StyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            deleteUser={deleteUser}
            key={userData.name}
            userData={userData}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};
export default UsersList;
