
import homeImage from "../../assets/image.svg"
import homeBackground from "../../assets/background.svg"

import { 
    Container, 
    Content, 
    Title, 
    Subtitle,
    Heading,
    InfoList,
    CoffeeList
} from "./styles"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { useTheme } from "styled-components"
import { Card } from "../../components/Card"

import { coffees } from "../../../coffee-data.json"

export function Home() {
    const theme = useTheme()
    return (
        <div>
            <Container>
                <Content>
                    <div>
                        <Heading>
                            <Title> Encontre o café perfeito para qualquer hora do dia</Title>
                            <Subtitle> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora. </Subtitle>
                        </Heading>
                        <InfoList>
                            <div>
                                <ShoppingCart 
                                    size={32} 
                                    weight="fill" 
                                    color={theme.white}
                                    style={{ backgroundColor: theme["yellow-dark"] }}
                                />
                                <span>Compra simples e segura</span>
                            </div>
                            <div>
                                <Package 
                                    size={32} 
                                    weight="fill" 
                                    color={theme.white}
                                    style={{ backgroundColor: theme["base-text"] }}
                                />
                                <span>Embalagem mantém o café intacto</span>
                            </div>
                            <div>
                                <Timer 
                                    size={32} 
                                    weight="fill" 
                                    color={theme.white}
                                    style={{ backgroundColor: theme["yellow"] }}
                                />
                                <span>Entrega rápida e rastreada</span>
                            </div>
                            <div>
                                <Coffee 
                                    size={32} 
                                    weight="fill" 
                                    color={theme.white}
                                    style={{ backgroundColor: theme["purple"] }}
                                />
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </InfoList>
                    </div>

                    <img src={homeImage} alt="Café" />
                </Content>
                <img src={homeBackground} id="background" alt="Background" />
            </Container>
            <CoffeeList>
                <h2>Nossos cafés</h2>
                <div>
                    {coffees.map(coffee => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))}
                </div>
            </CoffeeList>
        </div>
    )
}