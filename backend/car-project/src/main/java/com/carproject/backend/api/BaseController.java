package com.carproject.backend.api;

import com.carproject.backend.model.User;
import com.carproject.backend.repository.CarModelRepository;
import com.carproject.backend.repository.CarRepository;
import com.carproject.backend.repository.CarBrandRepository;
import com.carproject.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public abstract class BaseController {

    @Autowired UserRepository userRepo;
    @Autowired CarRepository carRepo;
    @Autowired CarModelRepository carModelRepo;
    @Autowired CarBrandRepository carBrandRepo;
    @Autowired HttpServletRequest request;
    @Autowired HttpServletResponse response;

    protected String getAuthUserName() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    protected User getAuthUser() {
        return userRepo.findByUsername(getAuthUserName());
    }
}
