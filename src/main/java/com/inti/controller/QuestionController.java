package com.inti.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Questions;
import com.inti.repository.IClientRepository;
import com.inti.repository.IGerantRepository;
import com.inti.repository.IQuestionRepository;

@RestController
@RequestMapping("question")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
public class QuestionController {

	@Autowired
	IQuestionRepository iqr;
	@Autowired
	IGerantRepository igr;
	@Autowired
	IClientRepository icr;
	
	@PostMapping("create")
	public Questions create(@RequestBody Questions q) {
		q.setGerant(igr.getReferenceById(q.getIdG()));
		q.setClient(icr.getReferenceById(q.getIdC()));
		q.setTraitement(false);
		q.setDate(LocalDate.now());
		return iqr.save(q);
	}
	
	@GetMapping("read")
	public List<Questions> read(){
		return iqr.findAll();
	}
	
	@PutMapping("repondre")
	public Questions repondre(@RequestBody Questions q) {
		q.setGerant(igr.getReferenceById(q.getIdG()));
		q.setClient(icr.getReferenceById(q.getIdC()));
		q.setTraitement(true);
		q.setDate(LocalDate.now());
		return iqr.save(q);
	}
	
	@GetMapping("get/{id}")
	public Questions get(@PathVariable("id") int id) {
		return iqr.getReferenceById(id);
	}
	
	
}
