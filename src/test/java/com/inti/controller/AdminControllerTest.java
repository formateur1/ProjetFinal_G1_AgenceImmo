package com.inti.controller;

import static org.hamcrest.CoreMatchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
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
	public void deleteClient() throws Exception
	{
		mock.perform(delete("/admin/deleteClient/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
	
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
		mock.perform(delete("/admin/deleteGerant/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
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
	public void deleteAdmin() throws Exception
	{
		mock.perform(delete("/admin/deleteAdmin/1"))
		.andExpect(status().isOk())
		.andDo(print());
	}
	
}
