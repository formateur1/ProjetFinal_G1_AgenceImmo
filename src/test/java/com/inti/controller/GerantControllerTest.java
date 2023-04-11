package com.inti.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.inti.Json;
import com.inti.model.Gerant;
import com.inti.model.Offre;
import com.inti.repository.IClientRepository;
import com.inti.repository.IGerantRepository;
import com.inti.repository.IOffreRepository;

@WebMvcTest(controllers = GerantController.class)
public class GerantControllerTest {

	@Autowired
	private MockMvc mock;

	@MockBean
	IClientRepository icr;
	@MockBean
	IOffreRepository ior;
	@MockBean
	IGerantRepository igr;

	// Gerants
	@Test
	@DisplayName("Test d'enregistrement d'un gérant")
	public void inscriptionGerant() throws Exception {
		mock.perform(post("/gerant/ajouterGerant").contentType(MediaType.APPLICATION_JSON)
				.content(Json.fromObject(new Gerant(12, "O'Maley", "Sean", "FlashU", "octogone", "seanOM@gmail.com"))))
				.andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test d'affichage des gérants")
	public void getGerants() throws Exception {
		mock.perform(get("/gerant/getGerants")).andExpect(status().isOk()).andDo(print());
	}

	// Offres
	@Test
	@DisplayName("Test d'enregistrement d'une nouvelle offre")
	public void saveOffre() throws Exception {
		mock.perform(post("/gerant/saveOffre").contentType(MediaType.APPLICATION_JSON)
				.content(Json.fromObject(
						new Offre("studio", "666 Privet Drive", "Dlardpou", 499.9, 9, 1, true, false, false, ""))))
				.andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test de suppression d'une offre")
	public void deleteOffre() throws Exception {
		mock.perform(delete("/gerant/deleteOffre/1")).andExpect(status().isOk()).andDo(print());
		  
	}

	@Test
	@DisplayName("Test d'affichage de toutes les offres")
	public void listeOffres() throws Exception {
		mock.perform(get("/gerant/listeOffres")).andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test d'affichage d'une offre avec son id")
	public void offreId() throws Exception {
		mock.perform(get("/gerant/offreId/2")).andExpect(status().isOk()).andDo(print());
		
	}
	
	//Test updateOffre
	@Test
	@DisplayName("Test update offre")
	public void updateOffre() throws Exception {
		mock.perform(put("http://localhost:8080/gerant/updateOffre").contentType(MediaType.APPLICATION_JSON)
		.content(Json.fromObject(
				new Offre("studio", "666 Privet Drive", "Dlardpou", 499.9, 9, 1, true, false, false, ""))))
		.andExpect(status().isOk()).andDo(print());
	}

	// Offres en proposition
	@Test
	@DisplayName("Test sauvegarder une offre en proposition coté gérant")
	public void ajoutPropositionOffre() throws Exception {
		mock.perform(put("http://localhost:8080/gerant/ajoutPropOffre/4/14")).andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test retirer d'une offre de la liste des propositions du gérant")
	public void deletePropOffre() throws Exception {
		mock.perform(put("/gerant/deletePropOffre/2/11")).andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test d'affichage de toutes les propositions")
	public void listePropositions() throws Exception {
		mock.perform(get("/gerant/listePropositions/12")).andExpect(status().isOk()).andDo(print());
	}

	// Clients
	@Test
	@DisplayName("Test d'affichage de tous les clients")
	public void listeClients() throws Exception {
		mock.perform(get("/gerant/listeClients")).andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test d'affichage d'un client avec son id")
	public void clientId() throws Exception {
		mock.perform(get("/gerant/clientId/2")).andExpect(status().isOk()).andDo(print());
	}

}
