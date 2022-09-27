package com.mindstone.backend.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class TestController {

  TestController() {

  }

  @GetMapping("/test")
  String getTest() {
    return "good result";
  }

}