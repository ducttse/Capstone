package com.mindstone.backend.model;

import javax.persistence.*;

@Entity
public class Moderator {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  @Column(name = "id", nullable = false, length = 10)
  private String id;
  @Basic
  @Column(name = "roleId", nullable = false, length = 10)
  private String roleId;
  @Basic
  @Column(name = "email", nullable = false, length = 320)
  private String email;
  @Basic
  @Column(name = "password", nullable = false, length = 255)
  private String password;
  @Basic
  @Column(name = "displayName", nullable = false, length = 40)
  private String displayName;
  @Basic
  @Column(name = "avatarUrl", nullable = true, length = 512)
  private String avatarUrl;
  @Basic
  @Column(name = "status", nullable = false, length = 30)
  private String status;
  @ManyToOne
  @JoinColumn(name = "roleId", referencedColumnName = "id", nullable = false)
  private Role roleByRoleId;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getRoleId() {
    return roleId;
  }

  public void setRoleId(String roleId) {
    this.roleId = roleId;
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

  public String getDisplayName() {
    return displayName;
  }

  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }

  public String getAvatarUrl() {
    return avatarUrl;
  }

  public void setAvatarUrl(String avatarUrl) {
    this.avatarUrl = avatarUrl;
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

    Moderator moderator = (Moderator) o;

    if (id != null ? !id.equals(moderator.id) : moderator.id != null) return false;
    if (roleId != null ? !roleId.equals(moderator.roleId) : moderator.roleId != null) return false;
    if (email != null ? !email.equals(moderator.email) : moderator.email != null) return false;
    if (password != null ? !password.equals(moderator.password) : moderator.password != null)
      return false;
    if (displayName != null ? !displayName.equals(moderator.displayName) : moderator.displayName != null)
      return false;
    if (avatarUrl != null ? !avatarUrl.equals(moderator.avatarUrl) : moderator.avatarUrl != null)
      return false;
    if (status != null ? !status.equals(moderator.status) : moderator.status != null) return false;

    return true;
  }

  @Override
  public int hashCode() {
    int result = id != null ? id.hashCode() : 0;
    result = 31 * result + (roleId != null ? roleId.hashCode() : 0);
    result = 31 * result + (email != null ? email.hashCode() : 0);
    result = 31 * result + (password != null ? password.hashCode() : 0);
    result = 31 * result + (displayName != null ? displayName.hashCode() : 0);
    result = 31 * result + (avatarUrl != null ? avatarUrl.hashCode() : 0);
    result = 31 * result + (status != null ? status.hashCode() : 0);
    return result;
  }

  public Role getRoleByRoleId() {
    return roleByRoleId;
  }

  public void setRoleByRoleId(Role roleByRoleId) {
    this.roleByRoleId = roleByRoleId;
  }
}
