package com.vkoval.addressbook.dao;

import com.vkoval.addressbook.entity.address.AddressData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressDataRepository extends CrudRepository<AddressData, Long> {
}
