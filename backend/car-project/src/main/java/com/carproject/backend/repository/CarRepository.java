package com.carproject.backend.repository;

import com.carproject.backend.model.Car;
import com.carproject.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface CarRepository extends JpaRepository<Car, Long> {
    Iterable<Car> findByUser(User user);
    Optional<Car> findByPlateNumber(String plateNumber);

}
