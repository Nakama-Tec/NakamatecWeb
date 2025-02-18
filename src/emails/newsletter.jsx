import React from 'react'
import { 
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text
} from '@react-email/components'
import Logo from '../assets/Logo.jpg'

export default function Newsletter() {
    return (
        <Html>
            <Head />
            <Preview>Nuevo correo desde Nakamatec.com</Preview>
            <Body>
                <Container>
                    <Section>
                        <Img  
                        alt='Logo'
                        src={Logo}
                        />
                        <Text>Nuevo Mensaje</Text>
                        <Hr />
                        <Text></Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}