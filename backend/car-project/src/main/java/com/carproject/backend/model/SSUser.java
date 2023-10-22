package com.carproject.backend.model;


import org.springframework.security.core.authority.AuthorityUtils;

public class SSUser extends org.springframework.security.core.userdetails.User {

    private User user;

    public SSUser(User user) {
        super(user.getUsername(), user.getPassword(), AuthorityUtils.createAuthorityList(user.getRole().toString()));
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public Long getId() {
        return user.getId();
    }

    public Role getRole() {
        return user.getRole();
    }

}