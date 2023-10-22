package com.carproject.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="Car")
public class Car implements Serializable {
    private static final long serialVersionUID = 8320527836145398807L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long carId;

    @Column(nullable=false)
    private String carName;

    @Column(nullable=false,unique = true)
    private String plateNumber;

    @Column(nullable=false)
    private String year;

    @ManyToOne(fetch = FetchType.EAGER)
    private CarBrand carBrand;

    @ManyToOne(fetch = FetchType.EAGER)
    private CarModel carModel;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    public long getCarId() {
        return carId;
    }

    public void setCarId(long carId) {
        this.carId = carId;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public CarBrand getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(CarBrand carBrand) {
        this.carBrand = carBrand;
    }

    public CarModel getCarModel() {
        return carModel;
    }

    public void setCarModel(CarModel carModel) {
        this.carModel = carModel;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
