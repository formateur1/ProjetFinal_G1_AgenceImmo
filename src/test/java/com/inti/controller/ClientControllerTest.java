package com.inti.controller;

import static org.hamcrest.CoreMatchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.inti.Json;
import com.inti.model.Client;
import com.inti.repository.IClientRepository;
import com.inti.repository.IGerantRepository;
import com.inti.repository.IOffreRepository;

@WebMvcTest(controllers= ClientController.class)
public class ClientControllerTest {

	@Autowired
	private MockMvc mock;

	@MockBean
	private IClientRepository icr;
	@MockBean
	private IOffreRepository ior;
	@MockBean
	private IGerantRepository igr;


//	// Clients
//	@Test
//	@DisplayName("Test d'inscription d'un client")
//	public void inscriptionClients() throws Exception {
//		mock.perform(post("/client/inscriptionClients"))
//		.andExpect(status().isOk())
//		.andDo(print());
//	}
//
//	@Test
//	@DisplayName("Test d'enregistrement d'un client")
//	public void saveClient() throws Exception {
//		mock.perform(post("/client/saveClient").contentType(MediaType.APPLICATION_JSON)
//				.content(Json.fromObject(
//				new Client(1, "Dureaud", "Louise", "loulou", "loulou", "louise@tst.fr", "Rue de la gare", "0123456"))))
//				.andExpect(status().isOk())
//				.andDo(print());
//	}
	
	@Test
	@DisplayName("Test de modification d'un client")
	public void modifierClient() throws Exception {
		mock.perform(put("http://localhost:8080/client/modifierClient/2").contentType(MediaType.APPLICATION_JSON)
		.content(Json.fromObject(
		new Client(1, "Dureaud", "Louise", "loulou", "loulou", "louise@tst.fr", "Rue de la gare", "0123456"))))
		.andExpect(status().isOk())
		.andDo(print());
	}

//	@Test
//	@DisplayName("Test d'affichage de tous les clients")
//	public void listeClients() throws Exception {
//		mock.perform(get("/client/listeClients")).andExpect(status().isOk())
//				.andExpect(content().string(containsString("adresse"))).andDo(print());
//	}

//	@Test
//	@DisplayName("Test de suppression d'un client")
//	public void deleteClients() throws Exception {
//		mock.perform(get("/client/deleteClients/1")).andExpect(status().is3xxRedirection())
//				.andExpect(redirectedUrl("/listeClients")).andDo(print());
//	}

	// Recevoir Propositions
	@Test
	@DisplayName("Test reception d'une offre proposé au client par le gérant")
	public void recevoirProposition() throws Exception {
		mock.perform(put("/client/recevoirProposition/2/5")).andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test d'enregistrement d'une liste de proposition envoyé par le gérant")
	public void recevoirListePropositions() throws Exception {
		mock.perform(put("/client/recevoirListePropositions/4/2")).andExpect(status().isOk()).andDo(print());
	}

	// Gerer Propositions

	@Test
	@DisplayName("Test d'affichage de toutes les offres enregistrées par le client ou envoyées par un gérant")
	public void listePropositionsClient() throws Exception {
		mock.perform(get("/client/listePropositionsClient/5")).andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test d'affichage d'une offre avec son id")
	public void getoffre() throws Exception {
		mock.perform(get("/client/consulterInfos/2")).andExpect(status().isOk()).andDo(print());
	}

	@Test
	@DisplayName("Test sauvegarde d'une offre par le client")
	public void sauvegarderOffre() throws Exception {
		mock.perform(put("/client/sauvegarderOffre/2/5")).andExpect(status().isOk()).andDo(print());
	}
	
	@Test
	@DisplayName("Test de suppression d'une proposition ou d'une offre sauvegardée")
	public void retirerProposition() throws Exception {
		mock.perform(put("/client/retirerProposition/2/5")).andExpect(status().isOk()).andDo(print());
	}

}
