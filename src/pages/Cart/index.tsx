import { Fragment } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from "phosphor-react"

import { 
    AddressContainer, 
    Container, 
    InfoContainer, 
    AddressHeading, 
    AddressForm,
    PaymentContainer,
    PaymentOptions,
    PaymentHeading,
    PaymentErrorMessage,
    CartItems,
    Coffee,
    CoffeeInfo,
    CartTotal,
    CartCheckoutButton,
} from "./styles"

import { QuantityInput } from "../../components/Form/QuantityInput"
import { TextInput } from "../../components/Form/TextInput"
import { Radio } from "../../components/Form/Radio"

import { useCart } from "../../hooks/useCart"
import { FormInputs } from "../../@types/types"
import { coffees } from "../../../coffee-data.json"


const newOrder = z.object({
    cep: z.number({ invalid_type_error: 'Informe um CEP válido' }),
    street: z.string().min(1, 'Informe a rua'),
    number: z.string().min(1, 'Informe o número'),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, 'Informe o bairro'),
    city: z.string().min(1, 'Informe a cidade'),
    state: z.string().min(1, 'Informe a UF').max(2, 'Informe a UF corretamente'),
    paymentMethod: z.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
    const shippingPrice = 3.5

    const {
        cart,
        checkout, 
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem,
    } = useCart()

    const coffeesInCart = cart?.map((item) => {
        const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

        if (!coffeeInfo) {
            throw new Error('Café não encontrado')
        }

        return {
            ...coffeeInfo,
            quantity: item.quantity,
        }
    }) || []

    const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.price * currentItem.quantity)
      }, 0)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(newOrder),
    })

    const selectedPaymentMethod = watch('paymentMethod')

    function handleItemIncrement(itemId: string) {
        incrementItemQuantity(itemId)
    }

    function handleItemDecrement(itemId: string) {
        decrementItemQuantity(itemId)
    }

    function handleItemRemove(itemId: string) {
        removeItem(itemId)
    }

    const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
        if (cart.length === 0) {
          return alert('É preciso ter pelo menos um item no carrinho')
        }
    
        checkout(data)
      }

    return (
        <Container>
            <InfoContainer>
                <h2>Complete seu pedido</h2>
                <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
                <AddressContainer>
                    <AddressHeading>
                        <MapPin size={22} />
                        <div>   
                            <span>Endereço de entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </AddressHeading>
                    <AddressForm>
                        <TextInput
                            placeholder="CEP"
                            type="number"
                            containerProps={{ style: { gridArea: 'cep' } }}
                            error={errors.cep}
                            {...register('cep', { valueAsNumber: true })}
                        />
                        <TextInput 
                            id="street"
                            placeholder="Rua" 
                            containerProps={{ style: { gridArea: 'street' } }}
                            error={errors.street}
                            {...register('street')}    
                        />

                        <TextInput 
                            id="number"
                            placeholder="Número" 
                            type="text"
                            containerProps={{ style: { gridArea: 'number' } }}
                            error={errors.number}
                            {...register('number')}    
                        />
                        
                        <TextInput 
                            id="complement"
                            placeholder="Complemento" 
                            optional
                            containerProps={{ style: { gridArea: 'fullAddress' } }}
                            error={errors.complement}
                            {...register('complement')}    
                        />

                        <TextInput 
                            id="neighborhood"
                            placeholder="Bairro" 
                            containerProps={{ style: { gridArea: 'neighborhood' } }}
                            error={errors.neighborhood}
                            {...register('neighborhood')}    
                        />

                        <TextInput 
                            id="city"
                            placeholder="Cidade" 
                            containerProps={{ style: { gridArea: 'city' } }}
                            error={errors.city}
                            {...register('city')}    
                        />

                        <TextInput 
                            id="uf"
                            placeholder="UF" 
                            maxLength={2}
                            containerProps={{ style: { gridArea: 'state' } }}
                            error={errors.state}
                            {...register('state')}     
                        />
                    </AddressForm>
                </AddressContainer>
                <PaymentContainer>
                    <PaymentHeading>
                        <CurrencyDollar size={22} />
                        <div>
                            <span>Pagamento</span>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </PaymentHeading>
                    <PaymentOptions>
                        <div>
                            <Radio 
                                value="credit" 
                                {...register('paymentMethod')}
                                isSelected={selectedPaymentMethod === 'credit'}
                            >
                                <CreditCard size={16} />
                                <span>Cartão de crédito</span>
                            </Radio>

                            <Radio 
                                value="debit" 
                                {...register('paymentMethod')}
                                isSelected={selectedPaymentMethod === 'debit'}
                            >
                                <Bank size={16} />
                                <span>Cartão de débito</span>
                            </Radio>

                            <Radio 
                                value="cash" 
                                {...register('paymentMethod')}
                                isSelected={selectedPaymentMethod === 'cash'}
                            >
                                <Money size={16} />
                                <span>Dinheiro</span>
                            </Radio>
                        </div>
                        {errors.paymentMethod ? (
                            <PaymentErrorMessage role="alert">
                            {errors.paymentMethod.message}
                            </PaymentErrorMessage>
                        ) : null}
                    </PaymentOptions>
                </PaymentContainer>
                </form>
            </InfoContainer>
            <InfoContainer>
                <h2>Cafés selecionados</h2>
                <CartItems>
                    {coffeesInCart.map((coffee) => (
                        <Fragment key={coffee.id}>

                        <Coffee>
                            <div>
                                <img src={coffee.image} alt={coffee.title} />
                                <div>
                                    <span>{coffee.title}</span>
                                    <CoffeeInfo>
                                        <QuantityInput
                                            quantity={coffee.quantity}
                                            incrementQuantity={() => handleItemIncrement(coffee.id)}
                                            decrementQuantity={() => handleItemDecrement(coffee.id)}
                                        />
                                        <button onClick={() => handleItemRemove(coffee.id)}>
                                            <Trash size={22} />
                                            <span>Remover</span>
                                        </button>
                                    </CoffeeInfo>
                                </div>
                            </div>
                            <aside>R$ {coffee.price?.toFixed(2)}</aside>
                        </Coffee>
                        <span />
                        </Fragment>
                    ))}
                    <CartTotal>
                        <div>
                            <span>Total de itens</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(totalItemsPrice)}
                            </span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(shippingPrice)}
                            </span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(totalItemsPrice + shippingPrice)}
                            </span>
                        </div>
                    </CartTotal>
                    <CartCheckoutButton type="submit" form="order">
                        Confirmar pedido
                    </CartCheckoutButton>
                </CartItems>
            </InfoContainer>
        </Container>
    )
}