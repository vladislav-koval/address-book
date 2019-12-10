import axios from 'axios';
import {REST_URL} from "./ApiConstants";
import {stringify} from "query-string";


const ADDRESS_DATAS_URL = `${REST_URL}/addressDatas`;

class AddressDataService {
    retrieveAllAddressDatas() {
        return axios.get(ADDRESS_DATAS_URL);
    }

    retrieveDataFiltered(filterBean) {
        filterBean.address = JSON.stringify(filterBean.address);
        filterBean.category = JSON.stringify(filterBean.category);
        let params = stringify(filterBean, {
            skipNull: true
        });

        return axios.get(`${REST_URL}/search?${params}`);
    }

    updateData(data) {
        return axios.put(ADDRESS_DATAS_URL, data);
    }

    postNewData(data) {
        return axios.post(ADDRESS_DATAS_URL, data);
    }
}

function serialize() {

}

export default new AddressDataService();