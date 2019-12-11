package com.vkoval.addressbook.dao;

import com.vkoval.addressbook.entity.address.AddressData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressDataRepository extends CrudRepository<AddressData, Long>, AddressDataRepositoryCustom {
    List<AddressData> findAll();

    boolean existsAddressDataByNameAndSecondNameAndPatronymicAndAddress_ApartmentAndAddress_HouseNameAndAddress_StreetAndPhoneNumberAndCategory_Name(String name, String secondName, String patronymic, String address_apartment, String address_houseName, String address_street, String phoneNumber, String category_name);
}
