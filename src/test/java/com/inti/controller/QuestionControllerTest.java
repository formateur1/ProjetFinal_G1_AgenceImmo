package com.inti.controller;

import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inti.model.Client;
import com.inti.model.Gerant;
import com.inti.model.Questions;
import com.inti.repository.IQuestionRepository;
import com.mysql.cj.xdevapi.JsonArray;

@WebMvcTest(controllers = QuestionController.class)
public class QuestionControllerTest {

//	@Autowired
//	private MockMvc mockMvc;
//	
//	@MockBean
//	private IQuestionRepository iqr;
//	
//	@Test
//	public void saveQuestionTest() {
//		try {
//			mockMvc.perform(post("/question/create")
//					.contentType(MediaType.APPLICATION_JSON)
//					.content(Jso("$.contenu", "Quel est la surface du bien ?")
//					.content(jsonPath("$.gerant", (new Gerant())))		
//					.content(jsonPath("$.client", (new Client())))
//					.andExpect(status().isOk())
//					.andDo(print());
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
	
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
