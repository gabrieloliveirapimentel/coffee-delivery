import { FocusEvent, useState } from "react";
import { InputProps } from "../../../@types/types";
import { Box, ErrorMessage, LabelContainer, Input } from "./styles";

export function TextInput({optional, error, containerProps, onFocus, onBlur, ...rest }: InputProps) {
    const [isFocused, setIsFocused] = useState(false)

    function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
        setIsFocused(true)
        onFocus?.(event)
    }

    function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
        setIsFocused(false)
        onBlur?.(event)
    }

    return (
        <Box {...containerProps}>
            <LabelContainer data-state={isFocused ? 'focused' : 'blurred'}>
                <Input
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
                />
                {optional && <span>Opcional</span>}
            </LabelContainer>

            {error && <ErrorMessage role="alert">{error.message}</ErrorMessage>}
        </Box>
    )
}