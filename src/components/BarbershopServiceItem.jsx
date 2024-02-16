
import { styled } from 'styled-components';

const Card = styled.div` 
    position: relative;
    background-color: var(--color-card-background);
    padding: 4rem;
    border-radius: 10px;
    border: ${({ $isSelected }) => $isSelected ? '4px solid #76453B' : '4px solid #B19470'};  

    &:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      }
`;

const CardContent = styled.div` 
    margin-top: 20px;
`;

const CardImage = styled.img` 
    width: 10em;
    height: 10em;
    object-fit: contain;
`;

const CardTitle = styled.h2` 
    font-size: 24px;
    font-weight: bold;
`;
const CardSubtitle = styled.p` 
    margin-top: 10px;
    font-size: 16px;
`;


export default function BarbershopServiceItem({ title, isSelected, imageUrl, subtitle, ...props }) {

    return (

        <Card $isSelected={isSelected} {...props}>
            <CardImage src={imageUrl} />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{subtitle}</CardSubtitle>
            </CardContent>
        </Card>

    )
}