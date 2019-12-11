import React from 'react';
import FilterBean from "../../entity/FilterBean";

export const FilterBeanContext = React.createContext(
    {
        filterBean: new FilterBean(),
        toggleFilterState: () => {
        }
    }
);