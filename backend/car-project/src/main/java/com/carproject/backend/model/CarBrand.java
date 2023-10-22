package com.carproject.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity(name="CarBrand")
public class CarBrand implements Serializable {
    private static final long serialVersionUID = 8450527836123488807L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long brandId;
    @Column(nullable=false)
    private String brandName;

    public long getBrandId() {
        return brandId;
    }

    public void setBrandId(long brandId) {
        this.brandId = brandId;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }
}
