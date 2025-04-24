package com.accounts.service.bean;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserData {

	private String username;
	private String password;
	private int rating;
	private List<SpentMoneyByCategories> spentMoneyByCategoriesList = new ArrayList<>();
	private List<SpentMoneyInYearData> spentMoneyInYearDataList = new ArrayList<>();

}
