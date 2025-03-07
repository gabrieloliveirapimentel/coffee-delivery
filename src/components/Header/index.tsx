import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from "react-router-dom"
import { Box, Container } from "./styles"

import coffeeLogo from "../../assets/logo.svg"
import { useCart } from '../../hooks/useCart'

export function Header() {
    const { cart } = useCart()
    return (
        <Container>
        <div>
            <Link to={`/`}>
                <img src={coffeeLogo} alt="Logo" />
            </Link>
        </div>
        <Box>
            <div>
                <MapPin size={24} weight="fill" />
                <span>Leopoldina, MG</span>
            </div>
            <Link to={`cart`} aria-disabled={cart?.length === 0}>
                <ShoppingCart size={22} weight="fill" />
                {cart?.length > 0 ? <span>{cart?.length}</span> : null}
            </Link>
        </Box>
        </Container>
    );
}


