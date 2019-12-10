package com.vkoval.addressbook.entity.address;

import com.vkoval.addressbook.entity.category.Category;
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
    @Column
    private String  phoneNumber;
    @ManyToOne
    private Category category;
}
