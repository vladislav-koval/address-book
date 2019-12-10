import React, {Component, Fragment} from 'react'
import AuthenticationService from "../service/AuthenticationService";
import {ModalStateContext} from './modals/ModalStateContext';

class Header extends Component {
    static contextType = ModalStateContext;

    toggleModalState = (e, toggleModalState, state) => {
        e.preventDefault();
        toggleModalState(state);
    };

    render() {
        let inner;
        if (AuthenticationService.isUserAdmin()) {
            inner = (
                <ModalStateContext.Consumer>
                    {({toggleModalState}) => (
                        <ul className="actions">
                            <li className="actions__item">
                                <a href="" className="actions__link"
                                   onClick={(e) =>
                                       this.toggleModalState(e, toggleModalState, "addUser")}>
                                    Добавить абонента
                                </a>
                            </li>
                            <li className="actions__item">
                                <a href="" className="actions__link"
                                   onClick={(e) =>
                                       this.toggleModalState(e, toggleModalState, "addCategory")}>
                                    Добавить категорию
                                </a>
                            </li>
                            <li className="actions__item">
                                <a href="" className="actions__link"
                                   onClick={(e) =>
                                       this.toggleModalState(e, toggleModalState, "addAdmin")}>
                                    Добавить администратора
                                </a>
                            </li>
                        </ul>
                    )}
                </ModalStateContext.Consumer>
            )
        }

        return (
            <Fragment>
                <header className="header">
                    <div className="container">
                        <div className="header__inner">
                            {inner}
                            <ul className="actions">
                                <ModalStateContext.Consumer>
                                    {({toggleModalState}) => (
                                        <li className="actions__item">
                                            <a href="" className="actions__link"
                                               onClick={(e) =>
                                                   this.toggleModalState(e, toggleModalState, "search")}>
                                                Поиск
                                            </a>
                                        </li>
                                    )}
                                </ModalStateContext.Consumer>
                                <li className="actions__item"><a href="" className="actions__link">Показать всё</a></li>
                                <li className="actions__item"><a href="/" className="actions__link"
                                                                 onClick={AuthenticationService.logout}>Выход</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;