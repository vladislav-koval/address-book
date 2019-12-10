import axios from 'axios';
import {REST_URL} from "./ApiConstants";

const ADMINS_URL = `${REST_URL}/admins`;

class UserService {
    addAdmin(admin) {
        console.log(admin);
        return axios.post(ADMINS_URL, admin);
    }
}

export default new UserService();