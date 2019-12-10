import axios from 'axios';
import {REST_URL} from "./ApiConstants";

const CATEGORIES_URL = `${REST_URL}/categories`;

class CategoryService {
    postNewCategory(category) {
        console.log(category);
        return axios.post(CATEGORIES_URL, category);
    }
}

export default new CategoryService();