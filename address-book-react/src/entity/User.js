class User {
    constructor(id, name, secondName, patronymic, street, houseName, apartment, phoneNumber, categoryId, categoryName) {
        this.id = id ? id : null;
        this.name = name ? name : "";
        this.secondName = secondName ? secondName : "";
        this.patronymic = patronymic ? patronymic : "";
        this.address = {
            street: street ? street : "",
            houseName: houseName ? houseName : "",
            apartment: apartment ? apartment : ""
        };
        this.phoneNumber = phoneNumber ? phoneNumber : "";
        this.category = {
            id: categoryId ? categoryId : null,
            name: categoryName ? categoryName : ""
        };
    }
}

export default User;