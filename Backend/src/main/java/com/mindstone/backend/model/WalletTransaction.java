package com.mindstone.backend.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class WalletTransaction implements Serializable {
  @Basic
  @Id
  @Column(name = "senderWalletId", nullable = false, length = 10)
  private String senderWalletId;
  @Basic
  @Id
  @Column(name = "receiverWalletId", nullable = false, length = 10)
  private String receiverWalletId;
  @Basic
  @Id
  @Column(name = "transactionId", nullable = false, length = 10)
  private String transactionId;

  public String getSenderWalletId() {
    return senderWalletId;
  }

  public void setSenderWalletId(String senderWalletId) {
    this.senderWalletId = senderWalletId;
  }

  public String getReceiverWalletId() {
    return receiverWalletId;
  }

  public void setReceiverWalletId(String receiverWalletId) {
    this.receiverWalletId = receiverWalletId;
  }

  public String getTransactionId() {
    return transactionId;
  }

  public void setTransactionId(String transactionId) {
    this.transactionId = transactionId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    WalletTransaction that = (WalletTransaction) o;

    if (senderWalletId != null ? !senderWalletId.equals(that.senderWalletId) : that.senderWalletId != null)
      return false;
    if (receiverWalletId != null ? !receiverWalletId.equals(that.receiverWalletId) : that.receiverWalletId != null)
      return false;
    if (transactionId != null ? !transactionId.equals(that.transactionId) : that.transactionId != null)
      return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = senderWalletId != null ? senderWalletId.hashCode() : 0;
    result = 31 * result + (receiverWalletId != null ? receiverWalletId.hashCode() : 0);
    result = 31 * result + (transactionId != null ? transactionId.hashCode() : 0);
    return result;
  }
}
