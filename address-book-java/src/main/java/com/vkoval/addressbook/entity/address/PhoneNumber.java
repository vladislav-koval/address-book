package com.vkoval.addressbook.entity.address;

import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
class PhoneNumber {
    int prefix;
    int number;
}
