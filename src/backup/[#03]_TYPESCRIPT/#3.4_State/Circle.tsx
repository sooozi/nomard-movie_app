import styled from "styled-components";
import { useState } from "react";

interface ContainerProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    border: 1px soild ${props => props.borderColor};
`;

function Circle({bgColor, borderColor, text ="default text"} : ContainerProps) {
    //아래와 같이 기재하는 경우, 타입스크립트는 counter가 계속 숫자데이터를 이용할거라고 생각함
    //=> string을 적으면 오류 발생!!!
    const [counter, setCounter] = useState(1);
    //만약 number와 string 중 하나를 사용한다면
    const [value, setValue] = useState<number | string >(0);
    setCounter(2)
    return <Container bgColor={bgColor} borderColor={borderColor ?? "black"}>
        {text}
    </Container>
}

export default Circle;