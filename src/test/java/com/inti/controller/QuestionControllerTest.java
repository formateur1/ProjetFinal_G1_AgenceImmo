package com.inti.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.inti.Json;
import com.inti.model.Client;
import com.inti.model.Gerant;
import com.inti.model.Questions;
import com.inti.repository.IClientRepository;
import com.inti.repository.IGerantRepository;
import com.inti.repository.IQuestionRepository;

@WebMvcTest(controllers = QuestionController.class)
public class QuestionControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private IQuestionRepository iqr;
	
	@MockBean
	private IGerantRepository igr;
	
	@MockBean
	private IClientRepository icr;

	@Test
	public void saveQuestionTest() {
		try {
			mockMvc.perform(post("/question/create").contentType(MediaType.APPLICATION_JSON)
					.content(Json.fromObject(new Questions("Salut tu es qui ?", new Gerant(), new Client()))))
					.andExpect(status().isOk()).andDo(print());

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

//	@Test
//	public void readQuestionTest() {
//		try {
//			mockMvc.perform(get("/question/read"))
//				.andExpect(status().isOk())
//				.andDo(print());
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}

//	@Test
//	public void repondreQuestionTest() {
//		try {
//			mockMvc.perform(post("/question/repondre/2").param("rep", "La reponse est truc"))
//				.andExpect(status().isOk())
//				.andDo(print());
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
}
