package com.mindstone.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, length = 10)
    private Integer id;

    @Column(name = "walletId", nullable = false, length = 10)
    private Integer walletId;

    @Column(name = "fullName", nullable = false, length = 40)
    private String fullName;

    @Column(name = "email", nullable = false, length = 320)
    private String email;

    @Column(name = "password", nullable = false, length = 255)
    private String password;

    @Column(name = "createTime")
    @Temporal(value = TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createTime;

    @Column(name = "dateOfBirth")
    private Date dateOfBirth;

    @Column(name = "bio", length = 250)
    private String bio;

    @Column(name = "status", nullable = false, length = 30)
    private String status;

    @Column(name = "questionAnswered")
    private Integer questionAnswered;

    @Column(name = "avatarUrl", length = 512)
    private String avatarUrl;

    @Column(name = "reputation")
    private Integer reputation;

    @Column(name = "otp", length = 6)
    private String otp;

    //Relationship
    @OneToOne
    @MapsId("id")
    @JoinColumn(name = "walletId")
    private Wallet wallet;
}
