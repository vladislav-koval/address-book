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

    private boolean categoryParamIsNotNull(Category category) {
        return category != null && !StringUtils.isEmpty(category.getName());
    }
}
