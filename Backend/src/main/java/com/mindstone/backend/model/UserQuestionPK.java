package com.mindstone.backend.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class UserQuestionPK implements Serializable {
  @Column(name = "userId", nullable = false)
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int userId;
  @Column(name = "questionId", nullable = false)
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long questionId;

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

  public UserQuestionPK(int userId, long questionId) {
    this.userId = userId;
    this.questionId = questionId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    UserQuestionPK that = (UserQuestionPK) o;

    if (userId != that.userId) return false;
    if (questionId != that.questionId) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = userId;
    result = 31 * result + (int) (questionId ^ (questionId >>> 32));
    return result;
  }
}
