package com.mindstone.backend.service;


import org.springframework.stereotype.Service;

@Service
public interface QuestionService {
  public void GetQuestions();
  public void GetQuestionDetail(int id);
  public void CreateQuestion();
  public void EditQuestion();
  public void RemoveQuestion();
  public void RegisterAnswerQuestion();
  public void CancelRegisterAnswerQuestion();
}
