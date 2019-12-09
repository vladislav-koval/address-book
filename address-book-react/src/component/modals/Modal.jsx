import React, {Component, Fragment} from 'react';
import Portal from "./Portal";
import {ModalStateContext} from './ModalStateContext';
import AddUserModal from "./AddUserModal";
import AddAdminModal from "./AddAdminModal";
import SearchModal from "./SearchModal";
import AddCategoryModal from "./AddCategoryModal";
import CloseButtonImage from "../../img/modal-close.svg";

class Modal extends Component {
    static contextType = ModalStateContext;

    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {

        return <ModalStateContext.Consumer>
            {({modalState, toggleState}) => {
                if (!modalState) {
                    return "";
                } else {
                    return (
                        <Fragment>
                            <Portal>
                                <div className="modal">
                                    <div className="modal__dialog">
                                        <button className="modal__close" type="button"
                                                onClick={() => toggleState(null)}>
                                            <img src={CloseButtonImage} alt="Close"/>
                                        </button>
                                        {this.createModal(modalState)}
                                    </div>
                                </div>
                            </Portal>
                        </Fragment>
                    )
                }

            }}
        </ModalStateContext.Consumer>;

    }

    createModal(modalName) {
        if (modalName === "addUser") {
            return <AddUserModal/>;
        } else if (modalName === "addAdmin") {
            return <AddAdminModal/>;
        } else if (modalName === "search") {
            return <SearchModal/>
        } else if (modalName === "addCategory") {
            return <AddCategoryModal/>
        }
        return "";
    }
}

export default Modal;