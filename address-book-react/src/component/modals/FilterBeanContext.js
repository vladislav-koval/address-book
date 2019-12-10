import React from 'react';
import User from "../../entity/User";

export const FilterBeanContext = React.createContext(
    {
        filterBean: new User(),
        toggleFilterState: () => {
        }
    }
);