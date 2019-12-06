import React, {Component} from 'react';
import {ModalStateContext} from './ModalStateContext';

class SearchModal extends Component {
    static contextType = ModalStateContext;

    render() {
        return (<form className="form show" name="form-admin">
            <h2 className="form__title">Поиск</h2>
            <div className="form__group">
                <input type="text" id="name" className="form__input" placeholder=" " required/>
                <label htmlFor="name" className="form__label">Имя</label>
            </div>
            <div className="form__group">
                <input type="text" id="surname" className="form__input" placeholder=" " required/>
                <label htmlFor="surname" className="form__label">Фамилия</label>
            </div>
            <div className="form__group">
                <input type="text" id="lastName" className="form__input" placeholder=" " required/>
                <label htmlFor="lastName" className="form__label">Отчество</label>
            </div>
            <div className="form__group">
                <input type="text" id="street" className="form__input" placeholder=" " required/>
                <label htmlFor="street" className="form__label">Улица</label>
            </div>
            <div className="form__group">
                <input type="text" id="home" className="form__input" placeholder=" " required/>
                <label htmlFor="home" className="form__label">Дом</label>
            </div>
            <div className="form__group">
                <input type="text" id="apartment" className="form__input" placeholder=" " required/>
                <label htmlFor="apartment" className="form__label">Квартира</label>
            </div>
            <div className="form__group">
                <input type="text" id="number" className="form__input" placeholder=" " required/>
                <label htmlFor="number" className="form__label">Номер</label>
            </div>
            <div className="form__group">
                <input type="text" id="categoriy" className="form__input" placeholder=" "/>
                <label htmlFor="categoriy" className="form__label">Категория</label>
            </div>

            <input className="form__button js-sub" type="submit" value="Поиск"/>
        </form>);
    }
}

export default SearchModal;