import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding: 1.5rem 0;
  margin: 0;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem 0 2rem;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
`;

export const Attendance = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
