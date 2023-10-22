package com.carproject.backend.repository;

import com.carproject.backend.model.CarBrand;
import com.carproject.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarBrandRepository extends JpaRepository<CarBrand, Long> {

}
