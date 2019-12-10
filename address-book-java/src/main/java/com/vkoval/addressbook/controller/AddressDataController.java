package com.vkoval.addressbook.controller;

import com.vkoval.addressbook.dao.AddressDataRepository;
import com.vkoval.addressbook.entity.address.AddressData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AddressDataController {
    private AddressDataRepository addressDataRepository;

    public AddressDataController(AddressDataRepository addressDataRepository) {
        this.addressDataRepository = addressDataRepository;
    }

    @GetMapping("/addressDatas")
    public List<AddressData> get(){
        return addressDataRepository.findAll();
    }

    @PutMapping("/addressDatas")
    public void put(@RequestBody AddressData data){
        if (data == null){
            return;
        }
        addressDataRepository.save(data);
    }
}
