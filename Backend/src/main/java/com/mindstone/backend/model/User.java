package com.mindstone.backend.model;

import javax.persistence.*;
import java.sql.Date;
import java.util.Collection;

@Entity
public class User {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "walletId", nullable = false, length = 10)
  private String walletId;
  @Basic
  @Column(name = "fullName", nullable = false, length = 40)
  private String fullName;
  @Basic
  @Column(name = "email", nullable = false, length = 320)
  private String email;
  @Basic
  @Column(name = "password", nullable = false, length = 255)
  private String password;
  @Basic
  @Column(name = "createdTime", nullable = false)
  private Object createdTime;
  @Basic
  @Column(name = "dateOfBirth", nullable = true)
  private Date dateOfBirth;
  @Basic
  @Column(name = "bio", nullable = true, length = 250)
  private String bio;
  @Basic
  @Column(name = "status", nullable = false, length = 30)
  private String status;
  @Basic
  @Column(name = "questionAnswered", nullable = true)
  private Integer questionAnswered;
  @Basic
  @Column(name = "avatarUrl", nullable = true, length = 512)
  private String avatarUrl;
  @Basic
  @Column(name = "reputation", nullable = true)
  private Integer reputation;
  @OneToMany(mappedBy = "userByUserId")
  private Collection<Comment> commentsById;
  @OneToMany(mappedBy = "userByUserId")
  private Collection<Notification> notificationsById;
  @OneToMany(mappedBy = "userByCreatorId")
  private Collection<Report> reportsById;
  @OneToMany(mappedBy = "userByReportedUserId")
  private Collection<Report> reportsById_0;
  @ManyToOne
  @JoinColumn(name = "walletId", referencedColumnName = "id", nullable = false)
  private Wallet walletByWalletId;
  @OneToMany(mappedBy = "userByUserId")
  private Collection<UserMeeting> userMeetingsById;
  @OneToMany(mappedBy = "userByUserId")
  private Collection<UserQuestion> userQuestionsById;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getWalletId() {
    return walletId;
  }

  public void setWalletId(String walletId) {
    this.walletId = walletId;
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Object getCreatedTime() {
    return createdTime;
  }

  public void setCreatedTime(Object createdTime) {
    this.createdTime = createdTime;
  }

  public Date getDateOfBirth() {
    return dateOfBirth;
  }

  public void setDateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public String getBio() {
    return bio;
  }

  public void setBio(String bio) {
    this.bio = bio;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Integer getQuestionAnswered() {
    return questionAnswered;
  }

  public void setQuestionAnswered(Integer questionAnswered) {
    this.questionAnswered = questionAnswered;
  }

  public String getAvatarUrl() {
    return avatarUrl;
  }

  public void setAvatarUrl(String avatarUrl) {
    this.avatarUrl = avatarUrl;
  }

  public Integer getReputation() {
    return reputation;
  }

  public void setReputation(Integer reputation) {
    this.reputation = reputation;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    User user = (User) o;

    if (id != null ? !id.equals(user.id) : user.id != null) return false;
    if (walletId != null ? !walletId.equals(user.walletId) : user.walletId != null) return false;
    if (fullName != null ? !fullName.equals(user.fullName) : user.fullName != null) return false;
    if (email != null ? !email.equals(user.email) : user.email != null) return false;
    if (password != null ? !password.equals(user.password) : user.password != null) return false;
    if (createdTime != null ? !createdTime.equals(user.createdTime) : user.createdTime != null)
      return false;
    if (dateOfBirth != null ? !dateOfBirth.equals(user.dateOfBirth) : user.dateOfBirth != null)
      return false;
    if (bio != null ? !bio.equals(user.bio) : user.bio != null) return false;
    if (status != null ? !status.equals(user.status) : user.status != null) return false;
    if (questionAnswered != null ? !questionAnswered.equals(user.questionAnswered) : user.questionAnswered != null)
      return false;
    if (avatarUrl != null ? !avatarUrl.equals(user.avatarUrl) : user.avatarUrl != null)
      return false;
    if (reputation != null ? !reputation.equals(user.reputation) : user.reputation != null)
      return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (walletId != null ? walletId.hashCode() : 0);
    result = 31 * result + (fullName != null ? fullName.hashCode() : 0);
    result = 31 * result + (email != null ? email.hashCode() : 0);
    result = 31 * result + (password != null ? password.hashCode() : 0);
    result = 31 * result + (createdTime != null ? createdTime.hashCode() : 0);
    result = 31 * result + (dateOfBirth != null ? dateOfBirth.hashCode() : 0);
    result = 31 * result + (bio != null ? bio.hashCode() : 0);
    result = 31 * result + (status != null ? status.hashCode() : 0);
    result = 31 * result + (questionAnswered != null ? questionAnswered.hashCode() : 0);
    result = 31 * result + (avatarUrl != null ? avatarUrl.hashCode() : 0);
    result = 31 * result + (reputation != null ? reputation.hashCode() : 0);
    return result;
  }

  public Collection<Comment> getCommentsById() {
    return commentsById;
  }

  public void setCommentsById(Collection<Comment> commentsById) {
    this.commentsById = commentsById;
  }

  public Collection<Notification> getNotificationsById() {
    return notificationsById;
  }

  public void setNotificationsById(Collection<Notification> notificationsById) {
    this.notificationsById = notificationsById;
  }

  public Collection<Report> getReportsById() {
    return reportsById;
  }

  public void setReportsById(Collection<Report> reportsById) {
    this.reportsById = reportsById;
  }

  public Collection<Report> getReportsById_0() {
    return reportsById_0;
  }

  public void setReportsById_0(Collection<Report> reportsById_0) {
    this.reportsById_0 = reportsById_0;
  }

  public Wallet getWalletByWalletId() {
    return walletByWalletId;
  }

  public void setWalletByWalletId(Wallet walletByWalletId) {
    this.walletByWalletId = walletByWalletId;
  }

  public Collection<UserMeeting> getUserMeetingsById() {
    return userMeetingsById;
  }

  public void setUserMeetingsById(Collection<UserMeeting> userMeetingsById) {
    this.userMeetingsById = userMeetingsById;
  }

  public Collection<UserQuestion> getUserQuestionsById() {
    return userQuestionsById;
  }

  public void setUserQuestionsById(Collection<UserQuestion> userQuestionsById) {
    this.userQuestionsById = userQuestionsById;
  }
}
