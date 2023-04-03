package com.inti.controller;

import static org.hamcrest.CoreMatchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.inti.model.Client;
import com.inti.repository.IClientRepository;

@WebMvcTest(ClientController.class)
public class ClientControllerTest {
	
	@Autowired
	private MockMvc mock;
	
	@MockBean
	private IClientRepository icr;
	
	
	@Test
	@DisplayName("Test d'enregistrement d'un client")
	public void enregistrerClient() throws Exception 
	{
		mock.perform(post("/enregistrerClient").sessionAttr("client", new Client(1, "Dureaud", "Louise", "loulou", "loulou", 
				"louise@tst.fr", "Rue de la gare", "0123456")))
		.andExpect(status().is3xxRedirection())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test d'affichage de tous les clients")
	public void getAllClients() throws Exception
	{
		mock.perform(get("/listeClients"))
		.andExpect(status().isOk())
		.andExpect(content().string(containsString("adresse")))
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de suppression d'un client")
	public void supprimerClient() throws Exception
	{
		mock.perform(get("/supprimerClient/1"))
		.andExpect(status().is3xxRedirection())
		.andExpect(redirectedUrl("/listeClients"))
		.andDo(print());
	}
	
	
}
