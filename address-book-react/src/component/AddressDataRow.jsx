import React, {Component, Fragment} from "react";
import AuthenticationService from "../service/AuthenticationService";
import AddressDataService from "../service/AddressDataService";


class AddressDataRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressData: props.addressData,
            updatedAddressData: {},
            isEdited: false
        };
    }

    pencil() {
        if (AuthenticationService.isUserAdmin()) {
            if (this.state.isEdited) {
                return (
                    <div title="Редактировать данные">
                        <svg id="check-mark" viewBox="0 0 442.533 442.533" className="phone-book__pencil"
                             onClick={() => {
                                 AddressDataService.updateData(this.state.updatedAddressData)
                                     .then(response => {
                                         if (response.data === "") {
                                             this.setState({
                                                 addressData: this.state.updatedAddressData,
                                                 updatedAddressData: {},
                                                 isEdited: false
                                             })
                                         } else {
                                             alert(response.data);
                                             this.setState({
                                                 updatedAddressData: {},
                                                 isEdited: false
                                             })
                                         }
                                     });

                             }}>
                            <g>
                                <path d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248
		                            l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852
		                            C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828
		                            c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33
		                            c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"/>
                            </g>
                        </svg>
                    </div>
                );
            } else {
                return (
                    <div title="Редактировать данные">
                        <svg id="pencil" viewBox="0 0 528.899 528.899" className="phone-book__pencil" onClick={() => {
                            let currentEdited = this.state.isEdited;
                            this.setState({
                                updatedAddressData: JSON.parse(JSON.stringify(this.state.addressData)),
                                isEdited: !currentEdited
                            })
                        }}>
                            <g>
                                <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
                                    c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
                                    C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                                    L27.473,390.597L0.3,512.69z"/>
                            </g>
                        </svg>
                    </div>
                );
            }
        } else {
            return (<Fragment/>);
        }
    }

    defaultRow() {
        return (
            <Fragment>
                {this.pencil()}
                <ul className="subscriber">
                    <li className="subscriber__item">{this.state.addressData.name}</li>
                    <li className="subscriber__item">{this.state.addressData.secondName}</li>
                    <li className="subscriber__item">{this.state.addressData.patronymic}</li>
                    <li className="subscriber__item">{this.state.addressData.address.street}</li>
                    <li className="subscriber__item">{this.state.addressData.address.houseName}</li>
                    <li className="subscriber__item">{this.state.addressData.address.apartment}</li>
                    <li className="subscriber__item subscriber__item_phone">{this.state.addressData.phoneNumber}</li>
                    <li className="subscriber__item">{this.state.addressData.category.name}</li>
                </ul>
            </Fragment>
        )
    }

    editedRow() {
        return (

            <Fragment>
                {this.pencil()}
                <ul className="subscriber">
                    <input className="subscriber__item" onChange={this.handleUserChange}
                           name="name" value={this.state.updatedAddressData.name}/>
                    <input className="subscriber__item" onChange={this.handleUserChange}
                           name="secondName" value={this.state.updatedAddressData.secondName}/>
                    <input className="subscriber__item" onChange={this.handleUserChange}
                           name="patronymic" value={this.state.updatedAddressData.patronymic}/>
                    <input className="subscriber__item" onChange={this.handleAddressChange}
                           name="street" value={this.state.updatedAddressData.address.street}/>
                    <input className="subscriber__item" onChange={this.handleAddressChange}
                           name="houseName" value={this.state.updatedAddressData.address.houseName}/>
                    <input className="subscriber__item" onChange={this.handleAddressChange}
                           name="apartment" value={this.state.updatedAddressData.address.apartment}/>
                    <input className="subscriber__item subscriber__item_phone" onChange={this.handlePhoneChange}
                           name="phoneNumber" value={this.state.updatedAddressData.phoneNumber}/>
                    <input className="subscriber__item" onChange={this.handleCategoryChange}
                           name="name" value={this.state.updatedAddressData.category.name}/>
                </ul>
            </Fragment>
        )
    }

    handleUserChange = (event) => {
        const value = event.target.value;

         if ((value[value.length - 1] >= 'а' && value[value.length - 1] <= 'я') ||
             (value[value.length - 1] >= 'А' && value[value.length - 1] <= 'Я') ||
             value.length === 0)
        {
            let user = this.state.updatedAddressData;
            user[event.target.name] = event.target.value;
            this.setState({
                updatedAddressData: user
            })
        } else {
             alert('ФИО абонента может содержать только кириллицу!')
         }
    };

    handlePhoneChange = (event) => {
        const value = event.target.value;
        if ((value[value.length - 1] >= 0 && value[value.length - 1] <= 9 && value.length < 12) || value.length === 0)
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

    handleAddressChange = (event) => {
        let user = this.state.updatedAddressData;
        user.address[event.target.name] = event.target.value;
        this.setState({
            updatedAddressData: user
        })
    };

    handleCategoryChange = (event) => {
        let user = this.state.updatedAddressData;
        user.category[event.target.name] = event.target.value;
        this.setState({
            updatedAddressData: user
        })
    };

    selectCurrentRow() {
        return this.state.isEdited ? this.editedRow() : this.defaultRow();
    }

    render() {
        let currentRow = this.selectCurrentRow();
        return (
            <Fragment>
                <li className="phone-book__item">
                    {currentRow}
                </li>
            </Fragment>
        );
    }
}

export default AddressDataRow;