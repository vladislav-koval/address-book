const USER_API_BASE_URL = 'http://localhost:8080/users';

class ApiService {

    fetchUsers() {
        // return axios.get(USER_API_BASE_URL);
        return [
            {
                id: 1,
                name: "Николай",
                surname: "Герасименко",
                lastName: "Николаевич",
                street: "Блюхера",
                home: "32/1",
                apartment: "614м",
                number: "+79232424074",
                category: {
                    id: 1,
                    name: "И.П."
                }
            },
            {
                id: 3,
                name: "Владислав",
                surname: "Коваль",
                lastName: "Дмитриевич",
                street: "Блюхера",
                home: "32/1",
                apartment: "619/2",
                number: "+79994649628",
                category: {
                    id: 1,
                    name: "Студент"
                }
            },
            {
                id: 2,
                name: "Дмитрий",
                surname: "Дмитриев",
                lastName: "Дмитриевич",
                street: "Пушкина",
                home: "Колотушкина",
                apartment: "7",
                number: "+99999999999",
                category: {
                    id: 1,
                    name: "Студент"
                }
            },
            {
                id: 2,
                name: "Арбуз",
                surname: "Морковкин",
                lastName: "Картофельевич",
                street: "кр. Проспект",
                home: "25",
                apartment: "1",
                number: "+77777777777",
                category: {
                    id: 1,
                    name: ""
                }
            }
        ]
    }

    /*

        fetchUserById(userId) {
            return axios.get(USER_API_BASE_URL + '/' + userId);
        }

        deleteUser(userId) {
            return axios.delete(USER_API_BASE_URL + '/' + userId);
        }

        addUser(user) {
            return axios.post(""+USER_API_BASE_URL, user);
        }

        editUser(user) {
            return axios.put(USER_API_BASE_URL + '/' + user.id, user);
        }
    */

}

export default new ApiService();