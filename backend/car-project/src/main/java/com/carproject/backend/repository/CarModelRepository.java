package com.carproject.backend.repository;

import com.carproject.backend.model.CarBrand;
import com.carproject.backend.model.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarModelRepository extends JpaRepository<CarModel, Long> {
    Iterable<CarModel> findByCarBrandBrandId(long carBrand_brandId);
}
