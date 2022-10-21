package com.mindstone.backend.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Question {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false)
  private long id;
  @Basic
  @Column(name = "userId", nullable = false)
  private int userId;
  @Basic
  @Column(name = "title", nullable = false, length = 100)
  private String title;
  @Basic
  @Column(name = "description", nullable = false, length = 4000)
  private String description;
  @Basic
  @Column(name = "createdTime", nullable = false)
  private Timestamp createdTime;
  @Basic
  @Column(name = "status", nullable = true)
  private Integer status;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
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

  public Timestamp getCreatedTime() {
    return createdTime;
  }

  public void setCreatedTime(Timestamp createdTime) {
    this.createdTime = createdTime;
  }

  public Integer getStatus() {
    return status;
  }

  public void setStatus(Integer status) {
    this.status = status;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Question question = (Question) o;

    if (id != question.id) return false;
    if (userId != question.userId) return false;
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
    int result = (int) (id ^ (id >>> 32));
    result = 31 * result + userId;
    result = 31 * result + (title != null ? title.hashCode() : 0);
    result = 31 * result + (description != null ? description.hashCode() : 0);
    result = 31 * result + (createdTime != null ? createdTime.hashCode() : 0);
    result = 31 * result + (status != null ? status.hashCode() : 0);
    return result;
  }
}
