package com.mindstone.backend.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Transaction {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "description", nullable = false, length = 128)
  private String description;
  @Basic
  @Column(name = "createdTime", nullable = false)
  private Object createdTime;
  @Basic
  @Column(name = "status", nullable = false, length = 30)
  private String status;
  @Basic
  @Column(name = "amount", nullable = false, precision = 0)
  private double amount;
  @Basic
  @Column(name = "questionId", nullable = true, length = 10)
  private String questionId;
  @ManyToOne
  @JoinColumn(name = "questionId", referencedColumnName = "id")
  private Question questionByQuestionId;
  @OneToMany(mappedBy = "transactionByTransactionId")
  private Collection<WalletTransaction> walletTransactionsById;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Object getCreatedTime() {
    return createdTime;
  }

  public void setCreatedTime(Object createdTime) {
    this.createdTime = createdTime;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public double getAmount() {
    return amount;
  }

  public void setAmount(double amount) {
    this.amount = amount;
  }

  public String getQuestionId() {
    return questionId;
  }

  public void setQuestionId(String questionId) {
    this.questionId = questionId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Transaction that = (Transaction) o;

    if (Double.compare(that.amount, amount) != 0) return false;
    if (id != null ? !id.equals(that.id) : that.id != null) return false;
    if (description != null ? !description.equals(that.description) : that.description != null)
      return false;
    if (createdTime != null ? !createdTime.equals(that.createdTime) : that.createdTime != null)
      return false;
    if (status != null ? !status.equals(that.status) : that.status != null) return false;
    if (questionId != null ? !questionId.equals(that.questionId) : that.questionId != null)
      return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result;
    long temp;
    result = id != null ? id.hashCode() : 0;
    result = 31 * result + (description != null ? description.hashCode() : 0);
    result = 31 * result + (createdTime != null ? createdTime.hashCode() : 0);
    result = 31 * result + (status != null ? status.hashCode() : 0);
    temp = Double.doubleToLongBits(amount);
    result = 31 * result + (int) (temp ^ (temp >>> 32));
    result = 31 * result + (questionId != null ? questionId.hashCode() : 0);
    return result;
  }

  public Question getQuestionByQuestionId() {
    return questionByQuestionId;
  }

  public void setQuestionByQuestionId(Question questionByQuestionId) {
    this.questionByQuestionId = questionByQuestionId;
  }

  public Collection<WalletTransaction> getWalletTransactionsById() {
    return walletTransactionsById;
  }

  public void setWalletTransactionsById(Collection<WalletTransaction> walletTransactionsById) {
    this.walletTransactionsById = walletTransactionsById;
  }
}
