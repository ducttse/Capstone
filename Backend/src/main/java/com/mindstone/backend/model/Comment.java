package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class Comment {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "content", nullable = false, length = 500)
  private String content;
  @Basic
  @Column(name = "questionId", nullable = false, length = 10)
  private String questionId;
  @Basic
  @Column(name = "userId", nullable = false, length = 10)
  private String userId;
  @ManyToOne
  @JoinColumn(name = "questionId", referencedColumnName = "id", nullable = false)
  private Question questionByQuestionId;
  @ManyToOne
  @JoinColumn(name = "userId", referencedColumnName = "id", nullable = false)
  private User userByUserId;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getQuestionId() {
    return questionId;
  }

  public void setQuestionId(String questionId) {
    this.questionId = questionId;
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Comment comment = (Comment) o;

    if (id != null ? !id.equals(comment.id) : comment.id != null) return false;
    if (content != null ? !content.equals(comment.content) : comment.content != null) return false;
    if (questionId != null ? !questionId.equals(comment.questionId) : comment.questionId != null)
      return false;
    if (userId != null ? !userId.equals(comment.userId) : comment.userId != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (content != null ? content.hashCode() : 0);
    result = 31 * result + (questionId != null ? questionId.hashCode() : 0);
    result = 31 * result + (userId != null ? userId.hashCode() : 0);
    return result;
  }

  public Question getQuestionByQuestionId() {
    return questionByQuestionId;
  }

  public void setQuestionByQuestionId(Question questionByQuestionId) {
    this.questionByQuestionId = questionByQuestionId;
  }

  public User getUserByUserId() {
    return userByUserId;
  }

  public void setUserByUserId(User userByUserId) {
    this.userByUserId = userByUserId;
  }
}
