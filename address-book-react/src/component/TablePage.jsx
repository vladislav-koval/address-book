import React, { Component } from "react";
import Header from "./Header";
import Table from "./Table";
import Modal from "./modals/Modal";
import { ModalStateContext } from './modals/ModalStateContext';
import { FilterBeanContext } from "./modals/FilterBeanContext";
import FilterBean from "../entity/FilterBean";

class TablePage extends Component {
    constructor(props) {
        super(props);
        this.toggleModalState = modalState => {
            this.setState({
                modalState: {
                    modalState: modalState,
                    toggleModalState: this.state.modalState.toggleModalState
                }
            });
        };
        this.toggleFilterState = filterState =>
            this.setState({
                filterState: {
                    filterBean: filterState,
                    toggleFilterState: this.state.filterState.toggleFilterState
                }
            });
        this.state = {
            modalState: {
                modalState: null,
                toggleModalState: this.toggleModalState
            },
            filterState: {
                filterBean: new FilterBean(),
                toggleFilterState: this.toggleFilterState
            }
        };
    }

    render() {
        return (
            <FilterBeanContext.Provider value={this.state.filterState}>
                <ModalStateContext.Provider value={this.state.modalState}>
                    <Header/>
                    <Table filterState={this.state.filterState}/>
                    <Modal/>
                </ModalStateContext.Provider>
            </FilterBeanContext.Provider>
        );
    }
}

export default TablePage;