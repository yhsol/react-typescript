import * as React from "react";
import styled from "styled-components";

const Container = styled.span<{ isBlue: boolean }>`
  color: ${props => (props.isBlue ? props.theme.blueColor : "black")};
`;

interface INumberProps {
  counter: number;
}

const Number: React.FunctionComponent<INumberProps> = ({ counter }) => (
  <Container isBlue={counter > 10}>{counter}</Container>
);

export default Number;
