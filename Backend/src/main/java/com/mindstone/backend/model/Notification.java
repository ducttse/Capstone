package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class Notification {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "title", nullable = false, length = 70)
  private String title;
  @Basic
  @Column(name = "description", nullable = false, length = 200)
  private String description;
  @Basic
  @Column(name = "createdTime", nullable = false)
  private Object createdTime;
  @Basic
  @Column(name = "userId", nullable = true, length = 10)
  private String userId;
  @ManyToOne
  @JoinColumn(name = "userId", referencedColumnName = "id")
  private User userByUserId;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
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

    Notification that = (Notification) o;

    if (id != null ? !id.equals(that.id) : that.id != null) return false;
    if (title != null ? !title.equals(that.title) : that.title != null) return false;
    if (description != null ? !description.equals(that.description) : that.description != null)
      return false;
    if (createdTime != null ? !createdTime.equals(that.createdTime) : that.createdTime != null)
      return false;
    if (userId != null ? !userId.equals(that.userId) : that.userId != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (title != null ? title.hashCode() : 0);
    result = 31 * result + (description != null ? description.hashCode() : 0);
    result = 31 * result + (createdTime != null ? createdTime.hashCode() : 0);
    result = 31 * result + (userId != null ? userId.hashCode() : 0);
    return result;
  }

  public User getUserByUserId() {
    return userByUserId;
  }

  public void setUserByUserId(User userByUserId) {
    this.userByUserId = userByUserId;
  }
}
