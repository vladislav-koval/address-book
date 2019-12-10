package com.vkoval.addressbook.controller;

import com.vkoval.addressbook.dao.CategoryRepository;
import com.vkoval.addressbook.entity.category.Category;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {
    private CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @PostMapping("/categories")
    public String post(@RequestBody Category data) {
        if (data == null || StringUtils.isEmpty(data.getName())) {
            return "Пустой запрос";
        }
        categoryRepository.save(data);
        return null;
    }
}
