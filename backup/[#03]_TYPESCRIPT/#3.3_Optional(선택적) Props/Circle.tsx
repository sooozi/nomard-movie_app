import styled from "styled-components";

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
    return <Container bgColor={bgColor} borderColor={borderColor ?? "black"}>
        {text}
    </Container>
}

export default Circle;