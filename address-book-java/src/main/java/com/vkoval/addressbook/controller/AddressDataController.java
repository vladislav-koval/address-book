package com.vkoval.addressbook.controller;

import com.vkoval.addressbook.dao.AddressDataRepository;
import com.vkoval.addressbook.dao.CategoryRepository;
import com.vkoval.addressbook.entity.address.AddressData;
import com.vkoval.addressbook.entity.category.Category;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AddressDataController {
    private AddressDataRepository addressDataRepository;
    private CategoryRepository categoryRepository;

    public AddressDataController(AddressDataRepository addressDataRepository, CategoryRepository categoryRepository) {
        this.addressDataRepository = addressDataRepository;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/addressDatas")
    public List<AddressData> get() {
        return addressDataRepository.findAll();
    }

    @PutMapping("/addressDatas")
    public String put(@RequestBody AddressData data) {
        if (data == null) {
            return "Пустой запрос";
        }
        String validationError = validateAddressData(data);
        if (!StringUtils.isEmpty(validationError)) {
            return validationError;
        }
        Category category = data.getCategory();
        if (category != null) {
            String name = category.getName();
            if (StringUtils.isEmpty(name)) {
                data.setCategory(null);
            } else {
                Category updatedCategory = categoryRepository.findByName(name);
                if (updatedCategory == null) {
                    return "Категория не найдена";
                }
                data.setCategory(updatedCategory);
            }
        }
        addressDataRepository.save(data);
        return null;
    }

    @PostMapping("/addressDatas")
    public String post(@RequestBody AddressData data) {
        if (data == null) {
            return "Пустой запрос";
        }
        String validationError = validateAddressData(data);
        if (!StringUtils.isEmpty(validationError)) {
            return validationError;
        }

        if (categoryParamIsNotNull(data.getCategory())) {
            Category category = categoryRepository.findByName(data.getCategory().getName());
            if (category == null) {
                return "Категория не найдена";
            }
            data.setCategory(category);
        } else {
            data.setCategory(null);
        }
        addressDataRepository.save(data);
        return null;
    }

    private String validateAddressData(AddressData addressData) {
        StringBuilder errorBuilder = new StringBuilder();
        if (StringUtils.isEmpty(addressData.getName())) {
            errorBuilder.append("Поле имени не может быть пустым\n");
        }
        if (StringUtils.isEmpty(addressData.getSecondName())) {
            errorBuilder.append("Поле фамилии не может быть пустым\n");
        }
        if (StringUtils.isEmpty(addressData.getPatronymic())) {
            errorBuilder.append("Поле отчества не может быть пустым\n");
        }
        if (StringUtils.isEmpty(addressData.getAddress().getStreet())) {
            errorBuilder.append("Поле улицы не может быть пустым\n");
        }
        if (StringUtils.isEmpty(addressData.getAddress().getHouseName())) {
            errorBuilder.append("Поле номера дома не может быть пустым\n");
        }
        if (StringUtils.isEmpty(addressData.getAddress().getApartment())) {
            errorBuilder.append("Поле номера квартиры не может быть пустым\n");
        }
        if (StringUtils.isEmpty(addressData.getPhoneNumber())) {
            errorBuilder.append("Поле номера телефона не может быть пустым\n");
        }
        return errorBuilder.toString();
    }

    private boolean categoryParamIsNotNull(Category category) {
        return category != null && !StringUtils.isEmpty(category.getName());
    }
}
