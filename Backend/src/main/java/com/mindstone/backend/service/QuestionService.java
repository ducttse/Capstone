package com.mindstone.backend.service;


import com.mindstone.backend.dto.CUQuestionDTO;
import com.mindstone.backend.model.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuestionService {
  public List<Question> GetQuestions();
  public Question GetQuestionDetail(Long id);
  Question CreateQuestion(CUQuestionDTO questionDto);

  Question EditQuestion(Long id, CUQuestionDTO questionDto);

  public boolean RemoveQuestion(Long id);
  public boolean RegisterAnswerQuestion(long questionId, int userId);
  public boolean CancelRegisterAnswerQuestion(long questionId, int userId);
}
