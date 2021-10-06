package com.rahimgngr.springformapp.controller;

import com.rahimgngr.springformapp.entity.Form;
import com.rahimgngr.springformapp.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/info")
@CrossOrigin
public class FormController {

    @Autowired
    private FormService formService;

    @PostMapping("/add")
    public String add(@RequestBody Form form) {
        formService.saveForm(form);
        return "Added!";
    }

    @GetMapping("get")
    public List<Form> getAll() {
        return formService.getAll();
    }
}


