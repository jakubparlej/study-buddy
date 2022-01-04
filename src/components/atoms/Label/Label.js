import styled from "styled-components";

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;
