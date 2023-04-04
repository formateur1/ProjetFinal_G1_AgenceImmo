package com.inti.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.inti.model.Client;

@ExtendWith(SpringExtension.class)
@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ClientRepositoryTest {

	Client c1, savedClient;

	@Autowired
	IClientRepository clientRepository;

	@BeforeEach
	public void setUp() {
		c1 = new Client(1, "Dureaud", "Louise", "loulou", "loulou", "louise@tst.fr", "Rue de la gare", "0123456");
		savedClient = clientRepository.save(c1);
	}

	
	//Enregistrer un client
	@Test
	public void saveClient() {
		assertThat(savedClient).isNotNull();
		assertThat(savedClient.getId()).isGreaterThan(0);
	}

	//Afficher un client
	@Test
	public void getClient() {
		// GIVEN

		// WHEN
		Client c1 = clientRepository.getReferenceById(savedClient.getId());

		// THEN
		assertThat(c1).isNotNull();
		assertThat(c1.getId()).isEqualTo(savedClient.getId());
		assertThat(c1.getNom()).isEqualTo(savedClient.getNom());
		assertThat(c1.getPrenom()).isEqualTo("Louise");
		assertThat(c1.getLogin()).isEqualTo(savedClient.getLogin());
		assertThat(c1.getMdp()).isEqualTo(savedClient.getMdp());
		assertThat(c1.getMail()).isEqualTo(savedClient.getMail());
		assertThat(c1.getAdresse()).isEqualTo(savedClient.getAdresse());
		assertThat(c1.getTelephone()).isEqualTo(savedClient.getTelephone());
		assertThat(c1).isEqualTo(savedClient);

	}

	//Supprimer un client selon son id
	@Test
	public void deleteClient() {
		// WHEN
		clientRepository.delete(savedClient);

		// THEN
		Assertions.assertThrows(Exception.class, () -> clientRepository.getReferenceById(savedClient.getId()));
	}
	

	//Chercher tous les clients (liste)
	@Test
	public void getAllClients() {
		// Given
		Client c2 = clientRepository.save(new Client(2, "Nerin", "Rick", "riri", "riri", "rick@tst.fr", "Rue de la republique", "123456"));
		Client c3 = clientRepository.save(new Client(3, "Jorand", "Nora", "nono", "nono", "nora@tst.fr", "avenue du parc", "67890"));

		// When
		List<Client> listeClients = clientRepository.findAll();

		// Then
		assertThat(listeClients).isNotEmpty();
		assertThat(listeClients).hasSize(3);
		assertThat(listeClients.get(0).getClass()).hasSameClassAs(Client.class);
		assertThat(listeClients.get(1).toString()).hasToString(c3.toString());
	}

	
	//Chercher un client selon son nom
	@Test
	public void getClientByNom() {

		Client c2 = clientRepository.save(new Client(2, "Nerin", "Rick", "riri", "riri", "rick@tst.fr", "Rue de la republique", "123456"));
		
		// When
		List<Client> listeClients = clientRepository.findByNom("Nerin");

		// Then
		assertThat(listeClients).isNotEmpty();
		assertThat(listeClients.get(0).getNom()).isEqualTo("Nerin");
	}
}
