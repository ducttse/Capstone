package com.mindstone.backend.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Meeting {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "questionId", nullable = false, length = 10)
  private String questionId;
  @Basic
  @Column(name = "recordUrl", nullable = false, length = 512)
  private String recordUrl;
  @Basic
  @Column(name = "status", nullable = false, length = 30)
  private String status;
  @Basic
  @Column(name = "createdTime", nullable = false)
  private Object createdTime;
  @ManyToOne
  @JoinColumn(name = "questionId", referencedColumnName = "id", nullable = false)
  private Question questionByQuestionId;
  @OneToMany(mappedBy = "meetingByMeetingId")
  private Collection<Report> reportsById;
  @OneToMany(mappedBy = "meetingByMeetingId")
  private Collection<UserMeeting> userMeetingsById;

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

  public String getRecordUrl() {
    return recordUrl;
  }

  public void setRecordUrl(String recordUrl) {
    this.recordUrl = recordUrl;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Object getCreatedTime() {
    return createdTime;
  }

  public void setCreatedTime(Object createdTime) {
    this.createdTime = createdTime;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Meeting meeting = (Meeting) o;

    if (id != null ? !id.equals(meeting.id) : meeting.id != null) return false;
    if (questionId != null ? !questionId.equals(meeting.questionId) : meeting.questionId != null)
      return false;
    if (recordUrl != null ? !recordUrl.equals(meeting.recordUrl) : meeting.recordUrl != null)
      return false;
    if (status != null ? !status.equals(meeting.status) : meeting.status != null) return false;
    if (createdTime != null ? !createdTime.equals(meeting.createdTime) : meeting.createdTime != null)
      return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (questionId != null ? questionId.hashCode() : 0);
    result = 31 * result + (recordUrl != null ? recordUrl.hashCode() : 0);
    result = 31 * result + (status != null ? status.hashCode() : 0);
    result = 31 * result + (createdTime != null ? createdTime.hashCode() : 0);
    return result;
  }

  public Question getQuestionByQuestionId() {
    return questionByQuestionId;
  }

  public void setQuestionByQuestionId(Question questionByQuestionId) {
    this.questionByQuestionId = questionByQuestionId;
  }

  public Collection<Report> getReportsById() {
    return reportsById;
  }

  public void setReportsById(Collection<Report> reportsById) {
    this.reportsById = reportsById;
  }

  public Collection<UserMeeting> getUserMeetingsById() {
    return userMeetingsById;
  }

  public void setUserMeetingsById(Collection<UserMeeting> userMeetingsById) {
    this.userMeetingsById = userMeetingsById;
  }
}
