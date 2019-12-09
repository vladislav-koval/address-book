import React, {Component} from 'react'

class Auth extends Component {

    render() {
        return (
            <div className="container-center">
                <div id="slider">
                    <div className="slider__item">
                        <form className="form show" name="form-admin">
                            <h2 className="form__title">Авторизация</h2>
                            <div className="form__group">
                                <input type="text" id="login" className="form__input js-login" placeholder=" " required
                                       pattern="[A-Za-z]{5,}"/>
                                <label htmlFor="login" className="form__label">Логин</label>
                            </div>

                            <div className="form__group">
                                <input type="password" id="pass" className="form__input" placeholder=" " required/>
                                <label htmlFor="pass" className="form__label">Пароль</label>
                            </div>

                            <input className="form__button js-sub" type="submit" value="Войти"/>
                        </form>
                    </div>
                    <div className="slider__item">
                        <form className="form" name="form-user">
                            <h2 className="form__title">Авторизация</h2>
                            <input type="submit" className="form__button center" value="Войти"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;