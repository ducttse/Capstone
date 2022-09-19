package com.mindstone.backend.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Tag {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "name", nullable = false, length = 40)
  private String name;
  @OneToMany(mappedBy = "tagByTagId")
  private Collection<QuestionTag> questionTagsById;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Tag tag = (Tag) o;

    if (id != null ? !id.equals(tag.id) : tag.id != null) return false;
    if (name != null ? !name.equals(tag.name) : tag.name != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (name != null ? name.hashCode() : 0);
    return result;
  }

  public Collection<QuestionTag> getQuestionTagsById() {
    return questionTagsById;
  }

  public void setQuestionTagsById(Collection<QuestionTag> questionTagsById) {
    this.questionTagsById = questionTagsById;
  }
}
