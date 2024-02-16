import { forwardRef, useContext } from 'react';
import { createPortal } from 'react-dom';


import { styled } from 'styled-components';
import { BarbershopServicesContext } from "../store/BarbershopServicesContext.jsx";


const StyledDialog = styled.dialog` 
    width: 40%;
    height: 40%;
    border-radius: 5px;
    text-align: center;             
`;

const StyledButton = styled.button` 
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    background-color: var(--color-button-background);
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    padding: 4px;
`;

const StyledContent = styled.div` 
    position: relative;
    top: 30%;       
`;

const Dialog = forwardRef(
    function Dialog(props, ref) {

        const { chosenService } = useContext(BarbershopServicesContext);

        return createPortal(
            <StyledDialog ref={ref}>
                <StyledContent>
                    {chosenService ?
                        <>
                            <p>
                                {`Thank you for choosing ${chosenService}.`}
                            </p>
                            <p>
                                Contact us
                            </p>

                            <p><a href={`mailto:contact@example.com?subject=${chosenService}`}>hello@hello.com</a></p>
                        </>

                        : <p>Please choose a service</p>}
                </StyledContent>
                <form method="dialog">
                    <StyledButton>
                        Close
                    </StyledButton  >
                </form>

            </StyledDialog>,
            document.getElementById('modal-root')
        )
    }
);


export default Dialog;
