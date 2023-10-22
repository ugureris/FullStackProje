package com.carproject.backend.api;

import com.carproject.backend.model.Role;
import com.carproject.backend.model.User;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/user")
public class UserController extends BaseController {

    @PostMapping
    public long create(@RequestBody User user) {
        User existingUser = userRepo.findByUsername(user.getUsername());
        if(existingUser == null) {
            user.setRole(Role.USER);
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
            return userRepo.save(user).getId();
        }
        else{
            return -1;
        }

    }

    @PreAuthorize("@userDetailsService.canAccessUser(principal, #id)")
    @GetMapping("/{id}")
    public User get(@PathVariable Long id) {
        return userRepo.findById(id).orElse(null);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public Iterable<User> list() {
        return userRepo.findAll();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping
    public void update(@RequestBody User user) {
        if (user.getPassword() == null) {
            user.setPassword(userRepo.findById(user.getId()).orElse(null).getPassword());
        } else {
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        }
        userRepo.save(user);
    }

    @PreAuthorize("@userDetailsService.canAccessUser(principal, #id)")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        userRepo.deleteById(id);
    }

    @PreAuthorize("@userDetailsService.canAccessUser(principal, #id)")
    @PostMapping("/changePass")
    public void changePassword(@RequestParam(name="oldPassword") String oldPassword, @RequestParam(name="password") String password, HttpServletResponse httpServletResponse) {
        User user = getAuthUser();
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        if(bCryptPasswordEncoder.matches(oldPassword,user.getPassword())){
            user.setPassword(new BCryptPasswordEncoder().encode(password));
            userRepo.saveAndFlush(user);
        }
        else httpServletResponse.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
    }

    @RequestMapping(value = "/role", method = RequestMethod.GET)
    public String role() {
        return getAuthUser().getRole().name();
    }

    @RequestMapping(value = "/isLoggedIn", method = RequestMethod.GET)
    public boolean isLoggedIn() {
        return getAuthUser() != null;
    }
}
