package com.carproject.backend.model;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity(name="CarModel")
public class CarModel implements Serializable {

    private static final long serialVersionUID = 8452967825723488807L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long modelId;

    @Column(nullable=false)
    private String modelName;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private CarBrand carBrand;

    public long getModelId() {
        return modelId;
    }

    public void setModelId(long modelId) {
        this.modelId = modelId;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public CarBrand getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(CarBrand carBrand) {
        this.carBrand = carBrand;
    }
}
