import React, { Component, Fragment } from "react";
import AddressDataRow from "./AddressDataRow";
import AddressDataService from "../service/AddressDataService";
import { FilterBeanContext } from "./modals/FilterBeanContext";

class Table extends Component {
    static contextType = FilterBeanContext;

    constructor(props) {
        super(props);
        this.state = {
            addressDatas: [],
            filter: props.filterState.filterBean
        }
    }

    componentWillReceiveProps({ filterState }) {
        this.setState({ filter: filterState.filterBean }, this.fetchAddressDatas);
    }

    renderSubs() {
        return this.state.addressDatas.map(sub =>
            <Fragment key={sub.id}>
                <AddressDataRow addressData={sub}/>
            </Fragment>
        );
    }

    componentDidMount() {
        this.fetchAddressDatas();
    }

    fetchAddressDatas = () => {
        AddressDataService.retrieveDataFiltered(this.state.filter)
            .then(data => data.data)
            .then(data => data.map(addressData => {
                if (addressData.address == null) {
                    addressData.address = {};
                }
                if (addressData.category == null) {
                    addressData.category = {};
                }
                return addressData;
            }))
            .then(data => {
                this.setState({
                    addressDatas: data
                })
            }).catch(error => console.log(error));

    };

    render() {
        return (
            <section className="section">
                <div className="container">
                    <h2 className="section__title"> Телефонная книга</h2>
                    <ul className="phone-book">
                        <li className="phone-book__item phone-book__item_header">
                            <ul className="subscriber">
                                <li className="subscriber__item subscriber__item_header">Имя</li>
                                <li className="subscriber__item subscriber__item_header">Фамилия</li>
                                <li className="subscriber__item subscriber__item_header">Отчество</li>
                                <li className="subscriber__item subscriber__item_header">Улица</li>
                                <li className="subscriber__item subscriber__item_header">Дом</li>
                                <li className="subscriber__item subscriber__item_header">Квартира</li>
                                <li className="subscriber__item subscriber__item_header subscriber__item_phone">Номер</li>
                                <li className="subscriber__item subscriber__item_header">Категория</li>
                            </ul>
                        </li>
                        {this.renderSubs()}
                    </ul>
                </div>
            </section>


        );
    }
}

export default Table;