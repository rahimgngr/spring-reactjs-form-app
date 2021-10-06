package com.rahimgngr.springformapp.service;

import com.rahimgngr.springformapp.entity.Form;

import java.util.List;

public interface FormService {
    Form saveForm(Form form);
    List<Form> getAll();
}
