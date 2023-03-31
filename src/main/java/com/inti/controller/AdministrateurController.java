package com.inti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inti.model.Client;
import com.inti.repository.IAdministrateurRepository;

@RestController
@RequestMapping("admin")
public class AdministrateurController {

	@Autowired
	IAdministrateurRepository iar;
	
	@GetMapping("ajouterClient")
	public Client inscriptionClient(@RequestBody Client c)
	{
		return c;
	}
}
