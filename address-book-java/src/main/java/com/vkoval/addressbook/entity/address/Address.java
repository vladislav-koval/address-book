package com.vkoval.addressbook.entity.address;

import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
public class Address {
    private String street;
    private String houseName;
    private String apartment;
}
