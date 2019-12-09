import React, { Component } from 'react';
import AuthenticationService from "../service/AuthenticationService";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'in28minutes',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/courses`)
            }).catch(() => {
            this.setState({ password: '' });
        })
    }

    render() {
        return (
            <div className="container-center">
                <div id="slider">
                    <div className="slider__item">
                        <form className="form show" name="form-admin">
                            <h2 className="form__title">Авторизация</h2>
                            <div className="form__group">
                                <input type="text" id="login" name="username" className="form__input js-login"
                                       placeholder=" " required pattern="[A-Za-z]{5,}" value={this.state.username}
                                       onChange={this.handleChange}/>
                                <label htmlFor="login" className="form__label">Логин</label>
                            </div>

                            <div className="form__group">
                                <input type="password" id="pass" name="password" className="form__input" placeholder=" "
                                       required value={this.state.password} onChange={this.handleChange}/>
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