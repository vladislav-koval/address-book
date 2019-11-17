package com.vkoval.addressbook.entity.user;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class RoleIntegerConverter implements AttributeConverter<Role, Integer> {
    @Override
    public Integer convertToDatabaseColumn(Role attribute) {
        return attribute.getDbId();
    }

    @Override
    public Role convertToEntityAttribute(Integer dbData) {
        return Role.byDbId(dbData);
    }
}
