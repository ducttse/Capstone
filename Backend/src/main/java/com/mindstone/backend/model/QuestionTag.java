package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class QuestionTag {
  @Basic
  @Column(name = "questionId", nullable = false, length = 10)
  private String questionId;
  @Basic
  @Column(name = "tagId", nullable = false, length = 10)
  private String tagId;
  @ManyToOne
  @JoinColumn(name = "questionId", referencedColumnName = "id", nullable = false)
  private Question questionByQuestionId;
  @ManyToOne
  @JoinColumn(name = "tagId", referencedColumnName = "id", nullable = false)
  private Tag tagByTagId;

  public String getQuestionId() {
    return questionId;
  }

  public void setQuestionId(String questionId) {
    this.questionId = questionId;
  }

  public String getTagId() {
    return tagId;
  }

  public void setTagId(String tagId) {
    this.tagId = tagId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    QuestionTag that = (QuestionTag) o;

    if (questionId != null ? !questionId.equals(that.questionId) : that.questionId != null)
      return false;
    if (tagId != null ? !tagId.equals(that.tagId) : that.tagId != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = questionId != null ? questionId.hashCode() : 0;
    result = 31 * result + (tagId != null ? tagId.hashCode() : 0);
    return result;
  }

  public Question getQuestionByQuestionId() {
    return questionByQuestionId;
  }

  public void setQuestionByQuestionId(Question questionByQuestionId) {
    this.questionByQuestionId = questionByQuestionId;
  }

  public Tag getTagByTagId() {
    return tagByTagId;
  }

  public void setTagByTagId(Tag tagByTagId) {
    this.tagByTagId = tagByTagId;
  }
}
