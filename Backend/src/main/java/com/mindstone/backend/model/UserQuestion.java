package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class UserQuestion {
  @Basic
  @Column(name = "userId", nullable = false, length = 10)
  private String userId;
  @Basic
  @Column(name = "questionId", nullable = false, length = 10)
  private String questionId;
  @Basic
  @Column(name = "status", nullable = false, length = 100)
  private String status;
  @ManyToOne
  @JoinColumn(name = "userId", referencedColumnName = "id", nullable = false)
  private User userByUserId;
  @ManyToOne
  @JoinColumn(name = "questionId", referencedColumnName = "id", nullable = false)
  private Question questionByQuestionId;

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public String getQuestionId() {
    return questionId;
  }

  public void setQuestionId(String questionId) {
    this.questionId = questionId;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    UserQuestion that = (UserQuestion) o;

    if (userId != null ? !userId.equals(that.userId) : that.userId != null) return false;
    if (questionId != null ? !questionId.equals(that.questionId) : that.questionId != null)
      return false;
    if (status != null ? !status.equals(that.status) : that.status != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = userId != null ? userId.hashCode() : 0;
    result = 31 * result + (questionId != null ? questionId.hashCode() : 0);
    result = 31 * result + (status != null ? status.hashCode() : 0);
    return result;
  }

  public User getUserByUserId() {
    return userByUserId;
  }

  public void setUserByUserId(User userByUserId) {
    this.userByUserId = userByUserId;
  }

  public Question getQuestionByQuestionId() {
    return questionByQuestionId;
  }

  public void setQuestionByQuestionId(Question questionByQuestionId) {
    this.questionByQuestionId = questionByQuestionId;
  }
}
