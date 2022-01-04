import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "../../atoms/DeleteButton/DeleteButton";
import { Wrapper, Content, Name, Attendance } from "./UsersListItem.styles";
import Average from "../../atoms/Average/Average";

const UsersListItem = ({
  deleteUser,
  index,
  userData: { average, name, attendance = "0%" },
}) => {
  return (
    <Wrapper>
      <Average average={average}></Average>
      <Content>
        <Name>{name}</Name>
        <Attendance>Attendance: {attendance}</Attendance>
      </Content>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
