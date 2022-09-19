package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class WalletTransaction {
  @Basic
  @Column(name = "senderWalletId", nullable = false, length = 10)
  private String senderWalletId;
  @Basic
  @Column(name = "receiverWalletId", nullable = false, length = 10)
  private String receiverWalletId;
  @Basic
  @Column(name = "transactionId", nullable = false, length = 10)
  private String transactionId;
  @ManyToOne
  @JoinColumn(name = "senderWalletId", referencedColumnName = "id", nullable = false)
  private Wallet walletBySenderWalletId;
  @ManyToOne
  @JoinColumn(name = "receiverWalletId", referencedColumnName = "id", nullable = false)
  private Wallet walletByReceiverWalletId;
  @ManyToOne
  @JoinColumn(name = "transactionId", referencedColumnName = "id", nullable = false)
  private Transaction transactionByTransactionId;

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

  public Wallet getWalletBySenderWalletId() {
    return walletBySenderWalletId;
  }

  public void setWalletBySenderWalletId(Wallet walletBySenderWalletId) {
    this.walletBySenderWalletId = walletBySenderWalletId;
  }

  public Wallet getWalletByReceiverWalletId() {
    return walletByReceiverWalletId;
  }

  public void setWalletByReceiverWalletId(Wallet walletByReceiverWalletId) {
    this.walletByReceiverWalletId = walletByReceiverWalletId;
  }

  public Transaction getTransactionByTransactionId() {
    return transactionByTransactionId;
  }

  public void setTransactionByTransactionId(Transaction transactionByTransactionId) {
    this.transactionByTransactionId = transactionByTransactionId;
  }
}
