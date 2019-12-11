package com.vkoval.addressbook.controller;

import lombok.Data;

@Data
public class AddressDataFilterBean {
    private String name;
    private String secondName;
    private String patronymic;
    private String addressStreet;
    private String addressHouseName;
    private String addressApartment;
    private String phoneNumber;
    private String categoryName;
}
