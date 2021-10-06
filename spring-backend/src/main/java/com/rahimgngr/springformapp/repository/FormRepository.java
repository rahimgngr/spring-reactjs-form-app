package com.rahimgngr.springformapp.repository;

import com.rahimgngr.springformapp.entity.Form;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepository extends CrudRepository<Form, Integer> {
}
