package com.mindstone.backend.service.impl;

import com.mindstone.backend.dto.CUQuestionDTO;
import com.mindstone.backend.model.Question;
import com.mindstone.backend.model.UserQuestion;
import com.mindstone.backend.model.UserQuestionPK;
import com.mindstone.backend.repositories.QuestionRepository;
import com.mindstone.backend.repositories.UserQuestionRepository;
import com.mindstone.backend.service.QuestionService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

  @Autowired
  QuestionRepository questionRepository;

  @Autowired
  UserQuestionRepository userQuestionRepository;
  @Autowired
  ModelMapper modelMapper;

  @Override
  public List<Question> GetQuestions() {
    return questionRepository.findAll();
  }

  @Override
  public Question GetQuestionDetail(Long id) {
    var result = questionRepository.findById(id);
    return (result == null ? null : result.get());
  }

  @Override
  public Question CreateQuestion(CUQuestionDTO questionDto) {
    var question = modelMapper.map(questionDto, Question.class);
    var result = questionRepository.save(question);
    return result;
  }

  @Override
  public Question EditQuestion(Long id, CUQuestionDTO questionDto) {
    var question = modelMapper.map(questionDto, Question.class);
    question.setId(id);
    var result = questionRepository.save(question);
    return result;
  }

  @Override
  public boolean RemoveQuestion(Long id) {
    try {
      questionRepository.delete(GetQuestionDetail(id));
      return true;
    } catch (Exception exception) {
      return false;
    }
  }

  @Override
  public boolean RegisterAnswerQuestion(long questionId, int userId) {
    try {
      userQuestionRepository.saveAndFlush(new UserQuestion(userId, questionId));
      return true;
    } catch (Exception exception) {
      return false;
    }
  }

  @Override
  public boolean CancelRegisterAnswerQuestion(long questionId, int userId) {
    try {
      userQuestionRepository.deleteById(new UserQuestionPK(userId, questionId));
      return true;
    } catch (Exception exception) {
      return false;
    }
  }
}
