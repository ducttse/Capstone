package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
@IdClass(UserQuestionPK.class)
public class UserQuestion {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "userId", nullable = false)
  private int userId;
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "questionId", nullable = false)
  private long questionId;
  @Basic
  @Column(name = "status", nullable = false)
  private int status;

  public UserQuestion(int userId, long questionId) {
    this.userId = userId;
    this.questionId = questionId;
    this.status = 0;
  }

  public UserQuestion() {

  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public long getQuestionId() {
    return questionId;
  }

  public void setQuestionId(long questionId) {
    this.questionId = questionId;
  }

  public int getStatus() {
    return status;
  }

  public void setStatus(int status) {
    this.status = status;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    UserQuestion that = (UserQuestion) o;

    if (userId != that.userId) return false;
    if (questionId != that.questionId) return false;
    if (status != that.status) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = userId;
    result = 31 * result + (int) (questionId ^ (questionId >>> 32));
    result = 31 * result + status;
    return result;
  }
}
