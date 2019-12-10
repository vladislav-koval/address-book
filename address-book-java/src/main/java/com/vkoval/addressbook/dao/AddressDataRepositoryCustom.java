package com.vkoval.addressbook.dao;

import com.vkoval.addressbook.entity.address.AddressData;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface AddressDataRepositoryCustom {
    Collection<AddressData> findByFilterAddressDataBean(AddressData filterBean);
}
