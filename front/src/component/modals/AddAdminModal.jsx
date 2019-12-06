import React, {Component} from 'react';
import {ModalStateContext} from './ModalStateContext';

class AddUserModal extends Component {
    static contextType = ModalStateContext;

    render() {
        return (<form className="form show" name="form-admin">
                <h2 className="form__title">Добавить администратора</h2>
                <div className="form__group">
                    <input type="text" id="login" className="form__input js-login" placeholder=" " required
                           pattern="[A-Za-z]{5,}"/>
                    <label htmlFor="login" className="form__label">Логин</label>
                </div>

                <div className="form__group">
                    <input type="password" id="pass" className="form__input" placeholder=" " required/>
                    <label htmlFor="pass" className="form__label">Пароль</label>
                </div>

                <input className="form__button js-sub" type="submit" value="Добавить"/>
            </form>
        );
    }
}

export default AddUserModal;