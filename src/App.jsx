import { useRef } from 'react'


import AppHeader from './components/AppHeader.jsx';
import BarbershopServices from './components/BarbershopServices.jsx'
import Dialog from './components/Dialog.jsx';
import { BarbershopServicesProvider } from './store/BarbershopServicesContext.jsx';

import { styled } from 'styled-components';

const StyledButton = styled.button` 
    color: white;
    background-color: var(--color-button-background);
    margin-top: 1rem;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    padding: 4px;
`;

function App() {

  const dialogRef = useRef();

  function showDialog() {
    dialogRef.current.showModal();
  }

  return (
    <>
      <BarbershopServicesProvider>
        <AppHeader />
        <BarbershopServices />
        <Dialog ref={dialogRef} />
        <StyledButton onClick={showDialog} >
          Check Out
        </StyledButton>
      </ BarbershopServicesProvider>
    </>
  )
}

export default App
