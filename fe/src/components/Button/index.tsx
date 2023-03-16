import { ButtonContainer } from "./styles";

interface ButtonProps {
    children: any;
    onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
    return (
        <ButtonContainer onClick={onClick}>
            { children }
        </ButtonContainer>
    )
}