package com.mindstone.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "wallet")
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Wallet {
    @Id
    @Column(name = "id", nullable = false, length = 10)
    private String id;

    @Column(name = "balance", precision = 18, scale = 0)
    private BigDecimal balance;

    //Relationship
//    @OneToOne(mappedBy = "wallet")
//    private User user;
}
