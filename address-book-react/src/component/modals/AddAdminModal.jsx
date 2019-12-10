import React, {Component} from 'react';
import {ModalStateContext} from './ModalStateContext';
import UserService from "../../service/UserService";

class AddUserModal extends Component {
    static contextType = ModalStateContext;

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    };

    addAdmin = () => {
        UserService.addAdmin({login: this.state.login, password: this.state.password})
            .then((response) => {
                if (response.data !== "") {
                    alert(response.data)
                } else {
                    this.context.toggleModalState(null)
                }
            })
    };

    render() {
        return (
            <div className="form show">
                <h2 className="form__title">Добавить администратора</h2>
                <div className="form__group">
                    <input type="text" id="login" className="form__input js-login" name="login"
                           onChange={this.handleChange} value={this.state.login} required
                           pattern="[A-Za-z]{5,}"/>
                    <label htmlFor="login" className="form__label">Логин</label>
                </div>

                <div className="form__group">
                    <input type="password" id="pass" className="form__input" name="password"
                           onChange={this.handleChange} value={this.state.password} required/>
                    <label htmlFor="pass" className="form__label">Пароль</label>
                </div>

                <input className="form__button js-sub" type="submit" onClick={this.addAdmin} value="Добавить"/>
            </div>
        );
    }
}

export default AddUserModal;