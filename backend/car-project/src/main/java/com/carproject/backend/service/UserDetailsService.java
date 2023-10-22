package com.carproject.backend.service;

import com.carproject.backend.model.Role;
import com.carproject.backend.model.SSUser;
import com.carproject.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired UserRepository userRepo;

    @Override
    public SSUser loadUserByUsername(String username) throws UsernameNotFoundException {
        return new SSUser(userRepo.findByUsername(username));
    }

    public boolean canAccessUser(SSUser ssUser, Long userId) {
        return ssUser != null && (ssUser.getRole() == Role.ADMIN || ssUser.getId().equals(userId));
    }
}
