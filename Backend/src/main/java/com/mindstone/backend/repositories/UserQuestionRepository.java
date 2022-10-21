package com.mindstone.backend.repositories;

import com.mindstone.backend.model.UserQuestion;
import com.mindstone.backend.model.UserQuestionPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserQuestionRepository extends JpaRepository<UserQuestion, UserQuestionPK> {
  List<UserQuestion> findUserQuestionByQuestionId(long questionId);
  List<UserQuestion> findUserQuestionByUserId(int userId);
}
