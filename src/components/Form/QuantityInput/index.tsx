import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";
import { QuantityInputProps } from "../../../@types/types";

export function QuantityInput({ quantity, incrementQuantity, decrementQuantity }: QuantityInputProps) {
    return (
        <Container>
            <button onClick={decrementQuantity}>
                <Minus size={22} />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
                <Plus size={22} />
            </button>
        </Container>
    )
}