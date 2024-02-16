import BarbershopServiceItem from "./BarbershopServiceItem"

import { styled } from 'styled-components';

import { useContext, useEffect, useState } from "react";
import servicesList from '../data/services-data.js';
import { BarbershopServicesContext } from "../store/BarbershopServicesContext.jsx";

const BarbershopServicesGrid = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`;

export default function BarbershopServices() {

    const { chosenService, chooseService } = useContext(BarbershopServicesContext);


    const [allServices, setAllServices] = useState([]);


    useEffect(() => {
        // Setting value with delay(mocking api request)
        setTimeout(() => {
            setAllServices(servicesList);
        }, 1000);

        return () => {
            // Cleanup code goes here
            // This code will run before the component unmounts
        };

        // The empty dependency array [] 
        // ensures that the effect is only run once, after the initial render.
        // Use it for dependencies in useEffect.
        // In this case servicesList is not a dependency, 
        // because it is outer scope value.
        // Fill this array only if dependencies are coming from props!
    }, []);




    return (
        <BarbershopServicesGrid>


            {allServices.length !== 0 ? allServices.map((service) => <BarbershopServiceItem
                // Always provide key when using .map with components!
                key={service.title}
                title={service.title}
                subtitle={service.subtitle}
                imageUrl={service.imageUrl}
                isSelected={chosenService === service.title}
                onClick={() => { chooseService(service.title) }}
            />) : <h1>Loading...</h1>}

        </BarbershopServicesGrid>
    )
}