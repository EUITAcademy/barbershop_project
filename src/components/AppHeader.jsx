import { styled } from 'styled-components';

const Nav = styled.nav` 
    display: flex;
    align-content: start;
`;

const Title = styled.h1` 
    color: #43766C;
    font-family: 'Protest Riot', sans-serif;
`;


export default function AppHeader() {
    return (
        <Nav>
            <Title> My BarberShop </Title>
        </Nav>
    );
}