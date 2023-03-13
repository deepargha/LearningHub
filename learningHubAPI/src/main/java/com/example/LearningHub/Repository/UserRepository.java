package com.example.LearningHub.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.LearningHub.Model.User;

public interface UserRepository extends MongoRepository<User,String>{
	  
}