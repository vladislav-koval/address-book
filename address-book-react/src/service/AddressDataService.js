import axios from 'axios';
import {REST_URL} from "./ApiConstants";

const ADDRESS_DATAS_URL = `${REST_URL}/addressDatas`;

class AddressDataService {
    retrieveAllAddressDatas() {
        return axios.get(ADDRESS_DATAS_URL);
    }

    updateData(data) {
        axios.put(ADDRESS_DATAS_URL, data);
    }
}

export default new AddressDataService();