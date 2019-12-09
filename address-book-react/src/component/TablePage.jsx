import React, {Component} from "react";
import Header from "./Header";
import Table from "./Table";
import Modal from "./modals/Modal";
import {ModalStateContext} from './modals/ModalStateContext';


class TablePage extends Component {
    constructor(props) {
        super(props);
        this.toggleState = modalState => this.setState({modalState});
        this.state = {
            modalState: null,
            toggleState: this.toggleState
        };
    }

    render() {
        return (
            <ModalStateContext.Provider value={this.state}>
                <Header/>
                <Table/>
                <Modal/>
            </ModalStateContext.Provider>
        );
    }
}

export default TablePage;