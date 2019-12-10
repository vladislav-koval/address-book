import React, {Component} from 'react';
import {ModalStateContext} from './ModalStateContext';
import CategoryService from "../../service/CategoryService";

class AddCategoryModal extends Component {
    static contextType = ModalStateContext;

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    };

    addNewCategory = () => {
        CategoryService.postNewCategory({id: null, name: this.state.name})
            .then(response => {
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
                <h2 className="form__title">Добавить категорию</h2>
                <div className="form__group">
                    <input type="text" id="category" className="form__input" name="name" onChange={this.handleChange}
                           value={this.state.name} required/>
                    <label htmlFor="category" className="form__label">Категория</label>
                </div>

                <input className="form__button js-sub" type="submit" value="Добавить" onClick={this.addNewCategory}/>
            </div>
        );
    }
}

export default AddCategoryModal;