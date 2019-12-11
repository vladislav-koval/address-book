import React, { Component } from 'react';
import { FilterBeanContext } from "./FilterBeanContext";
import { ModalStateContext } from "./ModalStateContext";

class SearchModal extends Component {
    static contextType = FilterBeanContext;

    constructor(props, context) {
        super(props, context);
        this.state = {
            filter: Object.assign({}, context.filterBean)
        };
    }


    handleChange = (event) => {
        let filter = this.state.filter;
        filter[event.target.name] = event.target.value
        this.setState(
            {
                filter: filter
            }
        )
    };

    updateFilter = (toggleFilterState, toggleModalState) => {
        toggleFilterState(this.state.filter);
        toggleModalState(null);
    };

    render() {
        return (
            <div className="form show">
                <h2 className="form__title">Поиск</h2>
                <div className="form__group">
                    <input type="text" id="name" className="form__input" name="name"
                           value={this.state.filter.name} onChange={this.handleChange}/>
                    <label htmlFor="name" className="form__label">Имя</label>
                </div>
                <div className="form__group">
                    <input type="text" id="surname" className="form__input" name="secondName"
                           value={this.state.filter.secondName} onChange={this.handleChange}/>
                    <label htmlFor="surname" className="form__label">Фамилия</label>
                </div>
                <div className="form__group">
                    <input type="text" id="lastName" className="form__input" name="patronymic"
                           value={this.state.filter.patronymic} onChange={this.handleChange}/>
                    <label htmlFor="lastName" className="form__label">Отчество</label>
                </div>
                <div className="form__group">
                    <input type="text" id="street" className="form__input" name="addressStreet"
                           value={this.state.filter.addressStreet} onChange={this.handleChange}/>
                    <label htmlFor="street" className="form__label">Улица</label>
                </div>
                <div className="form__group">
                    <input type="text" id="home" className="form__input" name="addressHouseName"
                           value={this.state.filter.addressHouseName} onChange={this.handleChange}/>
                    <label htmlFor="home" className="form__label">Дом</label>
                </div>
                <div className="form__group">
                    <input type="text" id="apartment" className="form__input" name="addressApartment"
                           value={this.state.filter.addressApartment} onChange={this.handleChange}/>
                    <label htmlFor="apartment" className="form__label">Квартира</label>
                </div>
                <div className="form__group">
                    <input type="text" id="number" className="form__input" name="phoneNumber"
                           value={this.state.filter.phoneNumber} onChange={this.handleChange}/>
                    <label htmlFor="number" className="form__label">Номер</label>
                </div>
                <div className="form__group">
                    <input type="text" id="category" className="form__input" name="categoryName"
                           value={this.state.filter.categoryName} onChange={this.handleChange}/>
                    <label htmlFor="category" className="form__label">Категория</label>
                </div>
                <FilterBeanContext.Consumer>
                    {({ toggleFilterState }) =>
                        <ModalStateContext.Consumer>
                            {({ toggleModalState }) =>
                                <input className="form__button js-sub" type="submit" value="Поиск"
                                       onClick={() => this.updateFilter(toggleFilterState, toggleModalState)}/>
                            }
                        </ModalStateContext.Consumer>
                    }
                </FilterBeanContext.Consumer>
            </div>);
    }
}

export default SearchModal;