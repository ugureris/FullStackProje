package com.carproject.backend.api;

import com.carproject.ServletInitializer;
import com.carproject.backend.model.CarBrand;
import com.carproject.backend.model.CarModel;
import com.carproject.backend.model.Car;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "api/car")
public class CarController extends BaseController {

    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
    @GetMapping("/{id}")
    public Optional<Car> getCar(@PathVariable Long id){
        Optional<Car> car = carRepo.findById(id);
        if (getAuthUser().getRole().equals("ADMIN"))
            return car;
        else{
            if (car.isPresent() && car.get().getUser().equals(getAuthUser()))
                return car;
            else return Optional.empty();
        }
    }

    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
    @PostMapping
    public long createCar(@RequestBody Car car){
        car.setUser(getAuthUser());
        Optional<Car> existentCar = carRepo.findByPlateNumber(car.getPlateNumber());
        return existentCar.isEmpty() ? carRepo.saveAndFlush(car).getCarId() : -1;
    }

    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
    @PutMapping("/update")
    public long updateCar(@RequestBody Car car){
        car.setUser(getAuthUser());
        Optional<Car> existentCar = carRepo.findByPlateNumber(car.getPlateNumber());
        if(car.getPlateNumber().equals(existentCar.get().getPlateNumber())){
            return carRepo.saveAndFlush(car).getCarId();
        }
        else return existentCar.isEmpty() ? carRepo.saveAndFlush(car).getCarId() : -1;

    }

    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
    @GetMapping
    public Iterable<Car> getCarList(){
        if (getAuthUser().getRole().equals("ADMIN"))
            return carRepo.findAll();
        else return carRepo.findByUser(getAuthUser());
    }

    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
    @GetMapping("/brands")
    public Iterable<CarBrand> getCarBrands(){
        return carBrandRepo.findAll();
    }

    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
    @GetMapping("/brands/{id}")
    public Iterable<CarModel> getCarModels(@PathVariable Long id){
        return carModelRepo.findByCarBrandBrandId(id);
    }

    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id, HttpServletResponse response){
        Optional<Car> car = carRepo.findById(id);
        if (car.isPresent() && getAuthUser()!=null){
            if(car.get().getUser().getId() == getAuthUser().getId())  carRepo.deleteById(id);
            else response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        }
        else response.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
    }
}
