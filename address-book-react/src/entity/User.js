class User {
    constructor(id, name, secondName, patronymic, street, houseName, apartment, phoneNumber, categoryId, categoryName) {
        this.id = id;
        this.name = name;
        this.secondName = secondName;
        this.patronymic = patronymic;
        this.address = {
            street: street,
            houseName: houseName,
            apartment: apartment
        };
        this.phoneNumber = phoneNumber;
        this.category = {
            id: categoryId,
            name: categoryName
        };
    }
}

export default User;