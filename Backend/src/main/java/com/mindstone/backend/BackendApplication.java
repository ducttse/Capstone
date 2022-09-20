package com.mindstone.backend;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(exclude={SecurityAutoConfiguration.class})
public class BackendApplication {

  @Bean
  public ModelMapper initModelMapper() {
    return new ModelMapper();
  }

  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }

}
