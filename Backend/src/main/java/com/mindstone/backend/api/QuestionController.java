package com.mindstone.backend.api;

import com.mindstone.backend.dto.CUQuestionDTO;
import com.mindstone.backend.model.Question;
import com.mindstone.backend.service.impl.QuestionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class QuestionController{
  @Autowired
  QuestionServiceImpl questionService;

  @GetMapping("/questions")
  public ResponseEntity<List<Question>> getQuestionsPageable() {
    var result = questionService.GetQuestions();
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  @GetMapping("/questions/{id}")
  public ResponseEntity<Question> getQuestionDetailById(@PathVariable("id") Long id) {
    var result = questionService.GetQuestionDetail(id);
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  @PostMapping("/questions")
  public ResponseEntity<Question> createQuestion(@RequestBody CUQuestionDTO question) {
    var result = questionService.CreateQuestion(question);
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  @PutMapping("/questions/{id}")
  public ResponseEntity<Question> editQuestion(@PathVariable("id") Long id, @RequestBody CUQuestionDTO question) {
    var result = questionService.EditQuestion(id, question);
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  @DeleteMapping("/questions/{id}")
  public ResponseEntity<Boolean> removeQuestion(@PathVariable("id") Long id) {
    var result = questionService.RemoveQuestion(id);
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  public ResponseEntity<Boolean> registerAnswerQuestion(long questionId, int userId) {
    var result = questionService.RegisterAnswerQuestion(questionId, userId);
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  public ResponseEntity<Boolean> cancelRegisterAnswerQuestion(long questionId, int userId) {
    var result = questionService.CancelRegisterAnswerQuestion(questionId, userId);
    return new ResponseEntity<>(result, HttpStatus.OK);

  }

}
