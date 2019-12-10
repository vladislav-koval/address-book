package com.vkoval.addressbook.entity.user;

import org.springframework.lang.Nullable;
import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ADMIN(1),
    USER(0);

    private int dbId;

    Role(int dbId) {
        this.dbId = dbId;
    }

    @Nullable
    static Role byDbId(int dbId) {
        for (Role role : values()) {
            if (dbId == role.dbId) {
                return role;
            }
        }
        return null;
    }

    public int getDbId() {
        return dbId;
    }

    @Override
    public String getAuthority() {
        return toString();
    }
}
