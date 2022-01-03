import React from "react";
import { users } from "../../../data/users.js";
import UsersListItem from "../../molecules/UsersListItem/UsersListItem.js";
import { Wrapper, StyledList } from "./UsersList.styles";

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem key={index} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
