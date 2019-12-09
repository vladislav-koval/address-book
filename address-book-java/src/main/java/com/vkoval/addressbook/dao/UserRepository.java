package com.vkoval.addressbook.dao;

import com.vkoval.addressbook.entity.user.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByLogin(String login);
}
