package com.accounts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accounts.service.bean.UserData;
import com.accounts.service.bean.UserLoginData;
import com.accounts.service.services.UserDataCacheService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/account-service/v1")
public class AccountServiceController {

	@Autowired
	private UserDataCacheService userDataCacheService;

	@PostMapping(path = "/user/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> userLogin(@RequestBody UserLoginData userLoginData) {

		UserData userData = userDataCacheService.getUserData(userLoginData.getUsername());
		if (userData != null) {
			return ResponseEntity.ok(userData);
		}
		return ResponseEntity.notFound().build();
	}

}
