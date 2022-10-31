import React from 'react';

const StateContext = React.createContext();

const StateProvider = ({ children }) => {
    const [openModal, setOpenModal ] = React.useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal)
      }
    
    return (
        <StateContext.Provider value={{ openModal, setOpenModal, toggleModal }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => React.useContext(StateContext);

export default StateProvider;