package com.rahimgngr.springformapp.service;

import com.rahimgngr.springformapp.entity.Form;
import com.rahimgngr.springformapp.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormServiceImpl implements FormService{

    @Autowired
    private FormRepository repository;

    @Override
    public Form saveForm(Form form) {
        return repository.save(form);
    }

    @Override
    public List<Form> getAll() {
        return (List<Form>) repository.findAll();
    }
}
