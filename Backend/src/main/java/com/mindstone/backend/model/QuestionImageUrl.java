package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class QuestionImageUrl {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "questionId", nullable = false, length = 10)
  private String questionId;
  @Basic
  @Column(name = "url", nullable = true, length = 512)
  private String url;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getQuestionId() {
    return questionId;
  }

  public void setQuestionId(String questionId) {
    this.questionId = questionId;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    QuestionImageUrl that = (QuestionImageUrl) o;

    if (id != null ? !id.equals(that.id) : that.id != null) return false;
    if (questionId != null ? !questionId.equals(that.questionId) : that.questionId != null)
      return false;
    if (url != null ? !url.equals(that.url) : that.url != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (questionId != null ? questionId.hashCode() : 0);
    result = 31 * result + (url != null ? url.hashCode() : 0);
    return result;
  }
}
