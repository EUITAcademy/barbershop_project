import { createContext, useState } from "react";

const BarbershopServicesContext = createContext();

const BarbershopServicesProvider = ({ children }) => {
    const [chosenService, setService] = useState('');

    function chooseService(newService) {
        setService(newService);
    }

    return (
        <BarbershopServicesContext.Provider value={{ chosenService, chooseService }}>
            {children}
        </BarbershopServicesContext.Provider>
    );
};

export { BarbershopServicesContext, BarbershopServicesProvider };

