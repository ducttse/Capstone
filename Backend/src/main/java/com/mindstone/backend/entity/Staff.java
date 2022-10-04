package com.mindstone.backend.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "staff")
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, length = 10)
    private Integer id;

    @Column(name = "roleId", nullable = false, length = 10)
    private Integer roleId;

    @Column(name = "email", nullable = false, length = 320)
    private String email;

    @Column(name = "password", nullable = false, length = 255)
    private String password;

    @Column(name = "displayName", nullable = false, length = 40)
    private String displayName;

    @Column(name = "avatarUrl", length = 512)
    private String avatarUrl;

    @Column(name = "status", nullable = false, length = 30)
    private String status;
}
