package com.vkoval.addressbook.entity.address;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class AddressData {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String name;
    @Column
    private String secondName;
    @Column
    private String patronymic;
    @Embedded
    private Address address;
    @Embedded
    private PhoneNumber phoneNumber;
}
