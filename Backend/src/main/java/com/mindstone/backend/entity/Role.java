package com.mindstone.backend.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "role")
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, length = 10)
    private Integer id;

    @Column(name = "name", nullable = false, length = 40)
    private String name;

    @OneToMany
    @MapsId("id")
    @JoinColumn(name = "roleId")
    private List<Staff> staffList;
}
