import { MapPin, CurrencyDollar, Timer } from "phosphor-react"
import { useTheme } from "styled-components"
import { useParams } from "react-router-dom"

import { useCart } from "../../hooks/useCart"
import imgDelivery from "../../assets/illustration.svg"
import { Container, Heading, Info, InfoContent, Order } from "./styles"

export function Success() {
    const { orders } = useCart()
    const { orderId } = useParams()
    const orderInfo = orders.find((order) => order.id === Number(orderId))
    const paymentMethod = {
      credit: 'Cartão de crédito',
      debit: 'Cartão de débito',
      cash: 'Dinheiro',
    }
    const theme = useTheme()
  
    if (!orderInfo?.id) {
      return null
    }

    return (
        <Container>
            <Order>
                <Heading>
                    <h2>Uhu! Pedido confirmado</h2>
                    <span>Agora é só aguardar que logo o café chegará até você.</span>
                </Heading>

                <Info>
                    <InfoContent>
                        <div>
                            <MapPin
                                size={32}
                                color={theme.white}
                                style={{backgroundColor: theme["purple"]}}
                            />

                            <div>
                                <span> Entrega em{' '}
                                    <strong>{orderInfo.street}, {orderInfo.number}</strong>
                                </span>

                                <span>{orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}</span>
                            </div>
                        </div>
                        <div>
                            <Timer
                                size={32}
                                color={theme.white}
                                style={{backgroundColor: theme["yellow"]}}
                            />

                            <div>
                                <span>Previsão de entrega</span>
                                <span>10 min - 20 min</span>
                            </div>
                        </div>
                        <div>
                            <CurrencyDollar
                                size={32}
                                color={theme.white}
                                style={{backgroundColor: theme["yellow-dark"]}}
                            />
                            <div>
                                <span>Pagamento na entrega</span>
                                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                            </div>
                        </div>
                    </InfoContent>
                </Info>
            </Order>

            <img src={imgDelivery} alt="Ilustração de entrega" />
        </Container>
    )
}