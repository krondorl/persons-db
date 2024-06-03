package com.burucs.server.model;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class User {
    private Long id;
    private String name;
    private boolean depersonalized;

    public User(Long id, String name, boolean depersonalized) {
        this.id = id;
        this.name = name;
        this.depersonalized = depersonalized;
    }
}
