package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class UserMeeting {
  @Basic
  @Column(name = "userId", nullable = false, length = 10)
  private String userId;
  @Basic
  @Column(name = "meetingId", nullable = false, length = 10)
  private String meetingId;
  @ManyToOne
  @JoinColumn(name = "userId", referencedColumnName = "id", nullable = false)
  private User userByUserId;
  @ManyToOne
  @JoinColumn(name = "meetingId", referencedColumnName = "id", nullable = false)
  private Meeting meetingByMeetingId;

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public String getMeetingId() {
    return meetingId;
  }

  public void setMeetingId(String meetingId) {
    this.meetingId = meetingId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    UserMeeting that = (UserMeeting) o;

    if (userId != null ? !userId.equals(that.userId) : that.userId != null) return false;
    if (meetingId != null ? !meetingId.equals(that.meetingId) : that.meetingId != null)
      return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = userId != null ? userId.hashCode() : 0;
    result = 31 * result + (meetingId != null ? meetingId.hashCode() : 0);
    return result;
  }

  public User getUserByUserId() {
    return userByUserId;
  }

  public void setUserByUserId(User userByUserId) {
    this.userByUserId = userByUserId;
  }

  public Meeting getMeetingByMeetingId() {
    return meetingByMeetingId;
  }

  public void setMeetingByMeetingId(Meeting meetingByMeetingId) {
    this.meetingByMeetingId = meetingByMeetingId;
  }
}
