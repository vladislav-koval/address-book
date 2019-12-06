import React, {Component, Fragment} from 'react'
import env from "../env";
import {ModalStateContext} from './modals/ModalStateContext';

class Header extends Component {
    static contextType = ModalStateContext;

    toggleModalState = (e, toggleState, state) => {
        e.preventDefault();
        toggleState(state);
    };

    render() {
        let inner;
        if (env.isAdmin) {
            inner = (
                <ModalStateContext.Consumer>
                    {({toggleState}) => (
                        <ul className="actions">
                            <li className="actions__item">
                                <a href="" className="actions__link"
                                   onClick={(e) =>
                                       this.toggleModalState(e, toggleState, "addUser")}>
                                    Добавить абонента
                                </a>
                            </li>
                            <li className="actions__item">
                                <a href="" className="actions__link"
                                   onClick={(e) =>
                                       this.toggleModalState(e, toggleState, "addCategory")}>
                                    Добавить категорию
                                </a>
                            </li>
                            <li className="actions__item">
                                <a href="" className="actions__link"
                                   onClick={(e) =>
                                       this.toggleModalState(e, toggleState, "addAdmin")}>
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
                                    {({toggleState}) => (
                                        <li className="actions__item">
                                            <a href="" className="actions__link"
                                               onClick={(e) =>
                                                   this.toggleModalState(e, toggleState, "search")}>
                                                Поиск
                                            </a>
                                        </li>
                                    )}
                                </ModalStateContext.Consumer>
                                <li className="actions__item"><a href="" className="actions__link">Показать всё</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;