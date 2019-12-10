package com.vkoval.addressbook.dao;

import com.vkoval.addressbook.entity.address.Address;
import com.vkoval.addressbook.entity.address.AddressData;
import com.vkoval.addressbook.entity.category.Category;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class AddressDataRepositoryCustomImpl implements AddressDataRepositoryCustom {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Collection<AddressData> findByFilterAddressDataBean(AddressData filterBean) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<AddressData> query = cb.createQuery(AddressData.class);

        Root<AddressData> addressData = query.from(AddressData.class);
        Path<Address> addressPath = addressData.get("address");
        Path<Category> categoryPath = addressData.get("category");

        List<Predicate> predicates = new ArrayList<>();
        if (!StringUtils.isEmpty(filterBean.getName())) {
            predicates.add(cb.equal(addressData.get("name"), filterBean.getName()));
        }
        if (!StringUtils.isEmpty(filterBean.getSecondName())) {
            predicates.add(cb.equal(addressData.get("secondName"), filterBean.getSecondName()));
        }
        if (!StringUtils.isEmpty(filterBean.getPatronymic())) {
            predicates.add(cb.equal(addressData.get("patronymic"), filterBean.getPatronymic()));
        }
        if (filterBean.getAddress() != null) {
            if (!StringUtils.isEmpty(filterBean.getAddress().getStreet())) {
                predicates.add(cb.equal(addressPath.get("street"), filterBean.getAddress().getStreet()));
            }
            if (!StringUtils.isEmpty(filterBean.getAddress().getHouseName())) {
                predicates.add(cb.equal(addressPath.get("houseName"), filterBean.getAddress().getHouseName()));
            }
            if (!StringUtils.isEmpty(filterBean.getAddress().getApartment())) {
                predicates.add(cb.equal(addressPath.get("apartment"), filterBean.getAddress().getApartment()));
            }
        }
        if (!StringUtils.isEmpty(filterBean.getPhoneNumber())) {
            predicates.add(cb.equal(addressData.get("phoneNumber"), filterBean.getPhoneNumber()));
        }
        Category category = filterBean.getCategory();
        if (category != null) {
            if (category.getId() != null) {
                predicates.add(cb.equal(categoryPath.get("id"), category.getId()));
            } else if (!StringUtils.isEmpty(category.getName())) {
                predicates.add(cb.equal(categoryPath.get("name"), category.getName()));
            }
        }
        query.select(addressData)
                .where(cb.and(predicates.toArray(new Predicate[0])));
        return entityManager.createQuery(query).getResultList();
    }
}
