import React, {Component} from 'react';
import {ModalStateContext} from './ModalStateContext';
import AddressDataService from "../../service/AddressDataService";
import User from "../../entity/User";

class AddAddressModal extends Component {
    static contextType = ModalStateContext;

    constructor(props) {
        super(props);
        this.state = {
            user: new User()
        }
    }

    handleUserChange = (event) => {
        let user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState({
            user: user
        })
    };

    handleAddressChange = (event) => {
        let user = this.state.user;
        user.address[event.target.name] = event.target.value;
        this.setState({
            user: user
        })
    };

    handleCategoryChange = (event) => {
        let user = this.state.user;
        user.category[event.target.name] = event.target.value;
        this.setState({
            user: user
        })
    };

    handlePhoneChange = (event) => {
        const value = event.target.value;
        if ((value[value.length - 1] >= 0 && value[value.length - 1] <= 9 && value.length <= 12) || value.length === 0)
        {
            let user = this.state.user;
            user[event.target.name] = event.target.value;
            this.setState({
                user: user
            })
        }
        else {
            alert('Номер телефона должен состоять только из цифр')
        }
    };

    saveNewAddress = () => {
        AddressDataService.postNewData(this.state.user)
            .then((response) => {
                if (response.data !== "") {
                    alert(response.data)
                } else {
                    this.context.toggleModalState(null);
                    window.location.reload();
                }
            })
    };

    render() {
        return (
            <div className="form show">
                <h2 className="form__title">Добавить абонента</h2>
                <div className="form__group">
                    <input type="text" id="name" className="form__input" onChange={this.handleUserChange}
                           name="name" value={this.state.user.name} required/>
                    <label htmlFor="name" className="form__label">Имя</label>
                </div>
                <div className="form__group">
                    <input type="text" id="surname" className="form__input" onChange={this.handleUserChange}
                           name="secondName" value={this.state.user.secondName} required/>
                    <label htmlFor="surname" className="form__label">Фамилия</label>
                </div>
                <div className="form__group">
                    <input type="text" id="lastName" className="form__input" onChange={this.handleUserChange}
                           name="patronymic" value={this.state.user.patronymic} required/>
                    <label htmlFor="lastName" className="form__label">Отчество</label>
                </div>
                <div className="form__group">
                    <input type="text" id="street" className="form__input" onChange={this.handleAddressChange}
                           name="street" value={this.state.user.address.street} required/>
                    <label htmlFor="street" className="form__label">Улица</label>
                </div>
                <div className="form__group">
                    <input type="text" id="home" className="form__input" onChange={this.handleAddressChange}
                           name="houseName" value={this.state.user.address.houseName} required/>
                    <label htmlFor="home" className="form__label">Дом</label>
                </div>
                <div className="form__group">
                    <input type="text" id="apartment" className="form__input" onChange={this.handleAddressChange}
                           name="apartment" value={this.state.user.address.apartment} required/>
                    <label htmlFor="apartment" className="form__label">Квартира</label>
                </div>
                <div className="form__group">
                    <input type="text" id="number" className="form__input" onChange={this.handlePhoneChange}
                           name="phoneNumber" value={this.state.user.phoneNumber} required/>
                    <label htmlFor="number" className="form__label">Номер</label>
                </div>
                <div className="form__group">
                    <input type="text" id="category" className="form__input" onChange={this.handleCategoryChange}
                           name="name" value={this.state.user.category.name}/>
                    <label htmlFor="category" className="form__label">Категория</label>
                </div>

                <input className="form__button js-sub" type="submit" onClick={this.saveNewAddress} value="Добавить"/>
            </div>);
    }
}

export default AddAddressModal;