package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class Report {
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
  @Column(name = "creatorId", nullable = false, length = 10)
  private String creatorId;
  @Basic
  @Column(name = "meetingId", nullable = false, length = 10)
  private String meetingId;
  @Basic
  @Column(name = "reportedUserId", nullable = false, length = 10)
  private String reportedUserId;
  @ManyToOne
  @JoinColumn(name = "creatorId", referencedColumnName = "id", nullable = false)
  private User userByCreatorId;
  @ManyToOne
  @JoinColumn(name = "meetingId", referencedColumnName = "id", nullable = false)
  private Meeting meetingByMeetingId;
  @ManyToOne
  @JoinColumn(name = "reportedUserId", referencedColumnName = "id", nullable = false)
  private User userByReportedUserId;

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

  public String getCreatorId() {
    return creatorId;
  }

  public void setCreatorId(String creatorId) {
    this.creatorId = creatorId;
  }

  public String getMeetingId() {
    return meetingId;
  }

  public void setMeetingId(String meetingId) {
    this.meetingId = meetingId;
  }

  public String getReportedUserId() {
    return reportedUserId;
  }

  public void setReportedUserId(String reportedUserId) {
    this.reportedUserId = reportedUserId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Report report = (Report) o;

    if (id != null ? !id.equals(report.id) : report.id != null) return false;
    if (title != null ? !title.equals(report.title) : report.title != null) return false;
    if (description != null ? !description.equals(report.description) : report.description != null)
      return false;
    if (createdTime != null ? !createdTime.equals(report.createdTime) : report.createdTime != null)
      return false;
    if (creatorId != null ? !creatorId.equals(report.creatorId) : report.creatorId != null)
      return false;
    if (meetingId != null ? !meetingId.equals(report.meetingId) : report.meetingId != null)
      return false;
    if (reportedUserId != null ? !reportedUserId.equals(report.reportedUserId) : report.reportedUserId != null)
      return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (title != null ? title.hashCode() : 0);
    result = 31 * result + (description != null ? description.hashCode() : 0);
    result = 31 * result + (createdTime != null ? createdTime.hashCode() : 0);
    result = 31 * result + (creatorId != null ? creatorId.hashCode() : 0);
    result = 31 * result + (meetingId != null ? meetingId.hashCode() : 0);
    result = 31 * result + (reportedUserId != null ? reportedUserId.hashCode() : 0);
    return result;
  }

  public User getUserByCreatorId() {
    return userByCreatorId;
  }

  public void setUserByCreatorId(User userByCreatorId) {
    this.userByCreatorId = userByCreatorId;
  }

  public Meeting getMeetingByMeetingId() {
    return meetingByMeetingId;
  }

  public void setMeetingByMeetingId(Meeting meetingByMeetingId) {
    this.meetingByMeetingId = meetingByMeetingId;
  }

  public User getUserByReportedUserId() {
    return userByReportedUserId;
  }

  public void setUserByReportedUserId(User userByReportedUserId) {
    this.userByReportedUserId = userByReportedUserId;
  }
}
