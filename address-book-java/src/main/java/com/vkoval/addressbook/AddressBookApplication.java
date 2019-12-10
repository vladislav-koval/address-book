package com.vkoval.addressbook;

import com.vkoval.addressbook.dao.AddressDataRepository;
import com.vkoval.addressbook.dao.CategoryRepository;
import com.vkoval.addressbook.dao.UserRepository;
import com.vkoval.addressbook.entity.address.Address;
import com.vkoval.addressbook.entity.address.AddressData;
import com.vkoval.addressbook.entity.category.Category;
import com.vkoval.addressbook.entity.user.Role;
import com.vkoval.addressbook.entity.user.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class AddressBookApplication {
    private CategoryRepository categoryRepository;
    private AddressDataRepository addressDataRepository;
    private UserRepository userRepository;
    
    public AddressBookApplication(CategoryRepository categoryRepository, 
                                  AddressDataRepository addressDataRepository, 
                                  UserRepository userRepository) {
        this.categoryRepository = categoryRepository;
        this.addressDataRepository = addressDataRepository;
        this.userRepository = userRepository;
    }


    public static void main(String[] args) {
        SpringApplication.run(AddressBookApplication.class, args);
    }

    @PostConstruct
    void init() {
        Category category = new Category();
        category.setName("cat");
        categoryRepository.save(category);

        AddressData data = new AddressData();
        data.setName("Николай");
        data.setSecondName("Герасименко");
        data.setPatronymic("Николаевич");

        Address address = new Address();
        address.setStreet("Блюхера");
        address.setHouseName("32/1");
        address.setApartment("614м");
        data.setAddress(address);

        data.setPhoneNumber("+79232424074");

        data.setCategory(category);

        addressDataRepository.save(data);

        User admin = new User();
        admin.setLogin("admin");
        admin.setPassword("admin");
        admin.setRole(Role.ADMIN);
        userRepository.save(admin);
        
        User user = new User();
        user.setLogin("user");
        user.setPassword("user");
        user.setRole(Role.USER);
        userRepository.save(user);

    }

}
