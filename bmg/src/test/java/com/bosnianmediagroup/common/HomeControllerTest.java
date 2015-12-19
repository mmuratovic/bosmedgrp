package com.bosnianmediagroup.common;

import java.util.Locale;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.ui.ExtendedModelMap;
import org.springframework.ui.Model;

public class HomeControllerTest {
	
	HomeController homeController;
	Locale locale;
	Model model;
	
	@Before
	public void setUp(){
		homeController = new HomeController();
		model = new ExtendedModelMap();
		
	}
	
	@Test
	public void home_method_returnsView_home() {
		String expected = "home";
		String actual = homeController.home(model);
		Assert.assertEquals(expected, actual);
	}
	
	@Test
	public void adminPage_method_returnsView_admin() {
		String expected = "admin";
		String actual = homeController.adminPage();
		Assert.assertEquals(expected, actual);
	}
	
	@Test
	public void login_method_returnsView_login() {
		String expected = "login";
		String actual = homeController.login(null, null, model);
		Assert.assertEquals("", model.asMap().get("msg"));
		Assert.assertEquals("", model.asMap().get("error"));
		Assert.assertEquals(expected, actual);
	}
	
	@Test
	public void login_method_returnsView_login_withErrorMsg() {
		String expected = "login";
		String actual = homeController.login("error", null, model);
		Assert.assertEquals("", model.asMap().get("msg"));
		Assert.assertEquals("Invalid username and password!", model.asMap().get("error"));
		Assert.assertEquals(expected, actual);
	}
	
	@Test
	public void login_method_returnsView_login_withSuccesfullLogoutMsg() {
		String expected = "login";
		String actual = homeController.login(null, "logout", model);
		Assert.assertEquals("You've been logged out successfully.", model.asMap().get("msg"));
		Assert.assertEquals("", model.asMap().get("error"));
		Assert.assertEquals(expected, actual);
	}

}
