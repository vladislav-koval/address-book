package com.vkoval.addressbook.dao;

import com.vkoval.addressbook.entity.address.AddressData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressDataRepository extends CrudRepository<AddressData, Long>, AddressDataRepositoryCustom {
    List<AddressData> findAll();
}
