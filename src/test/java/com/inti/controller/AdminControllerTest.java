package com.inti.controller;

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
import com.inti.model.AdminAttente;
import com.inti.model.Administrateur;
import com.inti.model.Client;
import com.inti.model.ClientAttente;
import com.inti.model.Gerant;
import com.inti.model.GerantAttente;
import com.inti.repository.IAdminAttenteRepository;
import com.inti.repository.IAdministrateurRepository;
import com.inti.repository.IClientAttenteRepository;
import com.inti.repository.IClientRepository;
import com.inti.repository.IGerantAttenteRepository;
import com.inti.repository.IGerantRepository;
import com.inti.repository.INoteRepository;
import com.inti.repository.IOffreRepository;

@WebMvcTest(controllers = AdministrateurController.class)
public class AdminControllerTest {
	
	@Autowired
	private MockMvc mock;
	
	@MockBean
	IClientRepository icr;
	@MockBean
	IClientAttenteRepository icar;
	
	@MockBean
	IAdministrateurRepository iar;
	@MockBean
	IAdminAttenteRepository iaar;
	
	@MockBean
	IGerantRepository igr;
	@MockBean
	IGerantAttenteRepository igar; 
	
	@MockBean
	INoteRepository inr;
	@MockBean
	IOffreRepository ior;
	
	// Tests Client
	@Test
	@DisplayName("Test d'enregistrement de demande de compte client")
	public void enregistrementClient() throws Exception 
	{
		mock.perform(post("/admin/ajouterClient").contentType(MediaType.APPLICATION_JSON)
				.content(Json.fromObject(new ClientAttente(1, "Dureaud", "Louise", "loulou", "loulou", "louise@tst.fr", "Rue de la gare", "0123456"))))
				.andExpect(status().isOk())
				.andDo(print());
	}
	
	@Test
	@DisplayName("Test d'enregistrement de validation client")
	public void validationClient() throws Exception 
	{
		mock.perform(post("/admin/validerClient").contentType(MediaType.APPLICATION_JSON)
				.content(Json.fromObject(new Client(1, "Dureaud", "Louise", "loulou", "loulou", "louise@tst.fr", "Rue de la gare", "0123456"))))
				.andExpect(status().isOk())
				.andDo(print());
	}
	
	@Test
	@DisplayName("Test de suppression de demande de compte client")
	public void deleteClientAttente() throws Exception
	{
		mock.perform(delete("/admin/deleteClientAttente/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de récupération des demande de compte client")
	public void getClientAttente() throws Exception
	{
		mock.perform(get("/admin/getClientsAttente"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de récupération des clients")
	public void getClients() throws Exception
	{
		mock.perform(get("/admin/getClientsValide"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de récupération des clients par id")
	public void getClientById() throws Exception
	{
		mock.perform(get("/admin/getClientById/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de suppression de client")
	public void deleteClientValide() throws Exception
	{
		mock.perform(delete("/admin/deleteClientValide/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de modification client")
	public void updateClient() throws Exception
	{
		mock.perform(put("/admin/updateClient").contentType(MediaType.APPLICATION_JSON)
		.content(Json.fromObject(new Client(1, "Dureaud", "Louise", "loulou", "loulou", "louise@tst.fr", "Rue de la gare", "0123456"))))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	
	// Tests Gerant
	@Test
	@DisplayName("Test d'enregistrement de demande de compte gerant")
	public void enregistrementGerant() throws Exception 
	{
		mock.perform(post("/admin/ajouterGerant").contentType(MediaType.APPLICATION_JSON)
				.content(Json.fromObject(new GerantAttente(1, "Gerant", "Louise", "loulou", "loulou", "louise@tst.fr"))))
				.andExpect(status().isOk())
				.andDo(print());
	}
	
	@Test
	@DisplayName("Test d'enregistrement de validation gérant")
	public void enregistrementGerants() throws Exception 
	{
		mock.perform(post("/admin/validerGerant").contentType(MediaType.APPLICATION_JSON)
				.content(Json.fromObject(new Gerant(1, "Gerant", "Louise", "loulou", "loulou", "louise@tst.fr"))))
				.andExpect(status().isOk())
				.andDo(print());
	}
	
	@Test
	@DisplayName("Test de suppression de demande de compte gerant")
	public void deleteGerants() throws Exception
	{
		mock.perform(delete("/admin/deleteGerantAttente/1"))
		.andExpect(status().isOk())
		.andDo(print());
		
	}
	
	@Test
	@DisplayName("Test de récupération des demande de compte gerant")
	public void getGerantAttente() throws Exception
	{
		mock.perform(get("/admin/getGerantsAttente"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de récupération des gérants")
	public void getGerants() throws Exception
	{
		mock.perform(get("/admin/getGerantsValide"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de récupération des clients par id")
	public void getGerantById() throws Exception
	{
		mock.perform(get("/admin/getGerantById/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de suppression de client")
	public void deleteGerantValide() throws Exception
	{
		mock.perform(delete("/admin/deleteGerantValide/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de modification client")
	public void updateGerant() throws Exception
	{
		mock.perform(put("/admin/updateGerant").contentType(MediaType.APPLICATION_JSON)
		.content(Json.fromObject(new Gerant(1, "Dureaud", "Louise", "loulou", "loulou", "louise@tst.fr"))))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	// Tests Admin
	@Test
	@DisplayName("Test d'enregistrement de demande de compte gerant")
	public void enregistrementAdmin() throws Exception 
	{
		mock.perform(post("/admin/ajouterAdmin").contentType(MediaType.APPLICATION_JSON)
				.content(Json.fromObject(new AdminAttente(1, "Admin", "Louise", "loulou", "loulou", "louise@tst.fr"))))
				.andExpect(status().isOk())
				.andDo(print());
	}
	
	@Test
	@DisplayName("Test d'enregistrement de validation gérant")
	public void validationAdmin() throws Exception 
	{
		mock.perform(post("/admin/validerAdmin").contentType(MediaType.APPLICATION_JSON)
				.content(Json.fromObject(new Administrateur(1, "Admin", "Louise", "loulou", "loulou", "louise@tst.fr"))))
				.andExpect(status().isOk())
				.andDo(print());
	}
	
	@Test
	@DisplayName("Test de suppression de demande de compte admin")
	public void deleteAdminAttente() throws Exception
	{
		mock.perform(delete("/admin/deleteAdminAttente/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de récupération des demande de compte client")
	public void getAdminAttente() throws Exception
	{
		mock.perform(get("/admin/getAdminsAttente"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de récupération des admins")
	public void getAdmins() throws Exception
	{
		mock.perform(get("/admin/getAdminValide"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de récupération des clients par id")
	public void getAdminById() throws Exception
	{
		mock.perform(get("/admin/getAdminById/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de suppression de client")
	public void deleteAdminValide() throws Exception
	{
		mock.perform(delete("/admin/deleteAdminValide/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	@Test
	@DisplayName("Test de modification client")
	public void updateAdmin() throws Exception
	{
		mock.perform(put("/admin/updateAdmin").contentType(MediaType.APPLICATION_JSON)
		.content(Json.fromObject(new Administrateur(1, "Dureaud", "Louise", "loulou", "loulou", "louise@tst.fr"))))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	// Tests statistiques
	@Test
	@DisplayName("Test de moyenne des notes des offres")
	public void moyenneNotes() throws Exception
	{
		mock.perform(get("/admin/moyenneNotes"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	@Test
	@DisplayName("Test du nombre de clients")
	public void nbClients() throws Exception
	{
		mock.perform(get("/admin/nombreClients"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	@Test
	@DisplayName("Test du nombre d'offres")
	public void nbOffres() throws Exception
	{
		mock.perform(get("/admin/nombreOffres"))
		.andExpect(status().isOk())
		.andDo(print());
	}
}
