package com.mindstone.backend.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

///exclusively use for create and update question
@Getter
@Setter
public class CUQuestionDTO {
  private int userId;
  private String title;
  private String description;
  private Timestamp createdTime;
  private Integer status;
}
