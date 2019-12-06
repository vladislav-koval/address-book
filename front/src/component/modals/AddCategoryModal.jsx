import React, {Component} from 'react';
import {ModalStateContext} from './ModalStateContext';

class AddCategoryModal extends Component {
    static contextType = ModalStateContext;

    render() {
        return (
            <form className="form show" name="form-admin">
                <h2 className="form__title">Добавить категорию</h2>
                <div className="form__group">
                    <input type="text" id="category" className="form__input" placeholder=" " required/>
                    <label htmlFor="category" className="form__label">Категория</label>
                </div>

                <input className="form__button js-sub" type="submit" value="Добавить"/>
            </form>
        );
    }
}

export default AddCategoryModal;