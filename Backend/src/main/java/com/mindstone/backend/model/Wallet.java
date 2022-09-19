package com.mindstone.backend.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Wallet {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "balance", nullable = false, precision = 0)
  private double balance;
  @OneToMany(mappedBy = "walletByWalletId")
  private Collection<User> usersById;
  @OneToMany(mappedBy = "walletBySenderWalletId")
  private Collection<WalletTransaction> walletTransactionsById;
  @OneToMany(mappedBy = "walletByReceiverWalletId")
  private Collection<WalletTransaction> walletTransactionsById_0;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public double getBalance() {
    return balance;
  }

  public void setBalance(double balance) {
    this.balance = balance;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Wallet wallet = (Wallet) o;

    if (Double.compare(wallet.balance, balance) != 0) return false;
    if (id != null ? !id.equals(wallet.id) : wallet.id != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result;
    long temp;
    result = id != null ? id.hashCode() : 0;
    temp = Double.doubleToLongBits(balance);
    result = 31 * result + (int) (temp ^ (temp >>> 32));
    return result;
  }

  public Collection<User> getUsersById() {
    return usersById;
  }

  public void setUsersById(Collection<User> usersById) {
    this.usersById = usersById;
  }

  public Collection<WalletTransaction> getWalletTransactionsById() {
    return walletTransactionsById;
  }

  public void setWalletTransactionsById(Collection<WalletTransaction> walletTransactionsById) {
    this.walletTransactionsById = walletTransactionsById;
  }

  public Collection<WalletTransaction> getWalletTransactionsById_0() {
    return walletTransactionsById_0;
  }

  public void setWalletTransactionsById_0(Collection<WalletTransaction> walletTransactionsById_0) {
    this.walletTransactionsById_0 = walletTransactionsById_0;
  }
}
