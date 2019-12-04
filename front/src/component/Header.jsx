import React, {Fragment, Component} from 'react'
import env from "../env";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let inner;
        if (env.isAdmin) {
            inner = (
                <ul className="actions">
                    <li className="actions__item"><a href="" className="actions__link">Добавить абонента</a>
                    </li>
                    <li className="actions__item"><a href="" className="actions__link">Добавить
                        категорию</a></li>
                    <li className="actions__item"><a href="" className="actions__link">Добавить администратора</a></li>
                </ul>
            )
        }

        return (
            <Fragment>

                <header className="header">
                    <div className="container">
                        <div className="header__inner">
                            {inner}
                            <ul className="actions">
                                <li className="actions__item"><a href="" className="actions__link">Поиск</a></li>
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