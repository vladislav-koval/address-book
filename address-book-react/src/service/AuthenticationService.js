import axios from 'axios';
import {API_URL} from "./ApiConstants";

const AUTH_URL = API_URL + "/auth";
const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
const USER_NAME_SESSION_ATTRIBUTE_ADMIN_MARKER = 'isAdmin';
const USER_NAME_SESSION_ATTRIBUTE_TOKEN = 'token';

const ADMIN_AUTHORITY_NAME = "ADMIN";

class AuthenticationService {
    constructor() {
        this.initInterceptorIfAvailable();
    }

    initInterceptorIfAvailable() {
        let token = this.getToken();
        if (token) {
            console.log(token);
            this.setupAxiosInterceptors(token);
        }
    }

    executeBasicAuthenticationService(username, password) {
        return axios.get(AUTH_URL,
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(userDetails, password) {
        this.clearSessionStorage();
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userDetails.data.principal);
        if (userDetails.data.authorities.some(role => role === ADMIN_AUTHORITY_NAME)) {
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_ADMIN_MARKER, ".");
        }
        let token = this.createBasicAuthToken(userDetails.data.principal, password);
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_TOKEN, token);
        this.setupAxiosInterceptors(token)
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.Authorization = token
                }
                return config
            }
        )
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return user !== null;
    }

    isUserAdmin() {
        return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_ADMIN_MARKER);
    }

    getToken() {
        return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_TOKEN);
    }

    clearSessionStorage() {
        sessionStorage.clear();
    }

    logout() {
        this.clearSessionStorage()
    }
}

export default new AuthenticationService();