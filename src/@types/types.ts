import { createContext, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react"
import { NavigateFunction } from "react-router-dom"
import { FieldError } from "react-hook-form"
import { OrderInfo } from "../pages/Cart"

export type CoffeeProps = {
    coffee: {
        id: string;
        title: string;
        description: string;
        tags: string[];
        price: number;
        image: string;
    }
}

export type QuantityInputProps = {
    quantity: number;
    incrementQuantity: () => void;
    decrementQuantity: () => void;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> &{
    optional?: boolean;
    containerProps?: HTMLAttributes<HTMLDivElement>
    error?: FieldError;
}

export type InputRadioProps = InputHTMLAttributes<HTMLInputElement> & {
    isSelected: boolean;
}

export type FormInputs = {
    cep: number;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    paymentMethod: 'credit' | 'debit' | 'cash'
}

export interface CartContextType {
    cart: Item[]
    orders: Order[]
    addItem: (item: Item) => void
    removeItem: (itemId: Item['id']) => void
    decrementItemQuantity: (itemId: Item['id']) => void
    incrementItemQuantity: (itemId: Item['id']) => void
    checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

export interface CartContextProviderProps {
    children: ReactNode;
}

export interface Item {
    id: string;
    quantity: number;
  }
  
  export interface Order extends OrderInfo {
    id: number;
    items: Item[];
  }
  
  export interface CartState {
    cart: Item[];
    orders: Order[];
  }
  

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item;
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id'];
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART;
      payload: {
        order: OrderInfo;
        callback: NavigateFunction;
      }
    }