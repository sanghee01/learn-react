import styled from "styled-components";

interface ContainerProps {
  // styled-component의 prop
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor}; // styled-component에선 borderColor가 required상태이기에 색깔 반드시 지정해줘야함
`;

interface CircleProps {
  // component의 prop
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "yellow"}>
      {text}
    </Container>
  ); // styled-component에선 borderColor가 required상태
  // container가 borderColor가 없어도 되는걸 알고 있지만, borderColor가 항상 string일거라 예상하는것도 알고 있음
  // "yellow"자리에 bgColor를 넣어도 됨
}

export default Circle;
