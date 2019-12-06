import React from 'react';

export const ModalStateContext = React.createContext(
    {
        modalState: null,
        toggleState: () => {}
    }
);