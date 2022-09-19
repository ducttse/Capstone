package com.mindstone.backend.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Question {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "userId", nullable = false, length = 10)
  private String userId;
  @Basic
  @Column(name = "title", nullable = false, length = 100)
  private String title;
  @Basic
  @Column(name = "description", nullable = false, length = 4000)
  private String description;
  @Basic
  @Column(name = "createdTime", nullable = false)
  private Object createdTime;
  @Basic
  @Column(name = "status", nullable = false, length = 30)
  private String status;
  @OneToMany(mappedBy = "questionByQuestionId")
  private Collection<Comment> commentsById;
  @OneToMany(mappedBy = "questionByQuestionId")
  private Collection<Meeting> meetingsById;
  @OneToMany(mappedBy = "questionByQuestionId")
  private Collection<QuestionImageUrl> questionImageUrlsById;
  @OneToMany(mappedBy = "questionByQuestionId")
  private Collection<QuestionTag> questionTagsById;
  @OneToMany(mappedBy = "questionByQuestionId")
  private Collection<Transaction> transactionsById;
  @OneToMany(mappedBy = "questionByQuestionId")
  private Collection<UserQuestion> userQuestionsById;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
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

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Question question = (Question) o;

    if (id != null ? !id.equals(question.id) : question.id != null) return false;
    if (userId != null ? !userId.equals(question.userId) : question.userId != null) return false;
    if (title != null ? !title.equals(question.title) : question.title != null) return false;
    if (description != null ? !description.equals(question.description) : question.description != null)
      return false;
    if (createdTime != null ? !createdTime.equals(question.createdTime) : question.createdTime != null)
      return false;
    if (status != null ? !status.equals(question.status) : question.status != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (userId != null ? userId.hashCode() : 0);
    result = 31 * result + (title != null ? title.hashCode() : 0);
    result = 31 * result + (description != null ? description.hashCode() : 0);
    result = 31 * result + (createdTime != null ? createdTime.hashCode() : 0);
    result = 31 * result + (status != null ? status.hashCode() : 0);
    return result;
  }

  public Collection<Comment> getCommentsById() {
    return commentsById;
  }

  public void setCommentsById(Collection<Comment> commentsById) {
    this.commentsById = commentsById;
  }

  public Collection<Meeting> getMeetingsById() {
    return meetingsById;
  }

  public void setMeetingsById(Collection<Meeting> meetingsById) {
    this.meetingsById = meetingsById;
  }

  public Collection<QuestionImageUrl> getQuestionImageUrlsById() {
    return questionImageUrlsById;
  }

  public void setQuestionImageUrlsById(Collection<QuestionImageUrl> questionImageUrlsById) {
    this.questionImageUrlsById = questionImageUrlsById;
  }

  public Collection<QuestionTag> getQuestionTagsById() {
    return questionTagsById;
  }

  public void setQuestionTagsById(Collection<QuestionTag> questionTagsById) {
    this.questionTagsById = questionTagsById;
  }

  public Collection<Transaction> getTransactionsById() {
    return transactionsById;
  }

  public void setTransactionsById(Collection<Transaction> transactionsById) {
    this.transactionsById = transactionsById;
  }

  public Collection<UserQuestion> getUserQuestionsById() {
    return userQuestionsById;
  }

  public void setUserQuestionsById(Collection<UserQuestion> userQuestionsById) {
    this.userQuestionsById = userQuestionsById;
  }
}
