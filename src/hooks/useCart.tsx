import { useContext } from "react"
import { CartContext } from "../@types/types"

export function useCart() {
    return useContext(CartContext)
}