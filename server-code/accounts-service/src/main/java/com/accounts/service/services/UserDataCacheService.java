package com.accounts.service.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.accounts.service.bean.SpentMoneyByCategories;
import com.accounts.service.bean.SpentMoneyInYearData;
import com.accounts.service.bean.UserData;
import com.accounts.service.bean.UserLoginData;

import jakarta.annotation.PostConstruct;

@Service("userDataCacheService")
public class UserDataCacheService {

	private List<UserLoginData> userLoginDataList = null;
	private List<SpentMoneyByCategories> spentMoneyByCategoriesList = null;
	private List<SpentMoneyInYearData> spentMoneyInYearDataList = null;
	private UserData userData = null;

	private Map<String, UserData> userDataMap = new HashMap<>();

	@PostConstruct
	private void initData() {
		userLoginDataList = new ArrayList<>();
		userLoginDataList.add(new UserLoginData("User1@test.com", "User1"));
		userLoginDataList.add(new UserLoginData("User2@test.com", "User2"));
		userLoginDataList.add(new UserLoginData("User3@test.com", "User3"));
		userLoginDataList.add(new UserLoginData("User4@test.com", "User4"));

		userData = new UserData();

		spentMoneyByCategoriesList = new ArrayList<>();
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(1, "Food", 15000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(2, "Petrol", 2500));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(3, "Restaurants", 100));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(4, "Shoping", 35000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(5, "Grocery", 1000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(6, "Bills", 8000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(7, "Miscellaneous", 5000));

		spentMoneyInYearDataList = new ArrayList<>();
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(1, "Jan", 25000, 30000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(2, "Feb", 27000, 35200));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(3, "Mar", 22000, 34590));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(4, "Apr", 20000, 25600));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(5, "May", 24500, 28000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(6, "Jun", 23000, 29000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(7, "Jul", 22150, 27500));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(8, "Aug", 25410, 26400));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(9, "Sep", 26000, 24880));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(10, "Oct", 24500, 26488));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(11, "Nov", 21300, 25000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(12, "Dec", 25110, 26000));

		userData.setUsername("User1@test.com");
		userData.setPassword("User1");
		userData.setRating(8);
		userData.setSpentMoneyByCategoriesList(spentMoneyByCategoriesList);
		userData.setSpentMoneyInYearDataList(spentMoneyInYearDataList);

		userDataMap.put("User1@test.com", userData);
		userData = new UserData();

		spentMoneyByCategoriesList = new ArrayList<>();
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(1, "Food", 12000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(2, "Petrol", 5000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(3, "Restaurants", 1000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(4, "Shoping", 5000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(5, "Grocery", 1000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(6, "Bills", 5000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(7, "Miscellaneous", 1000));

		spentMoneyInYearDataList = new ArrayList<>();
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(1, "Jan", 24951, 24800));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(2, "Feb", 24587, 34890));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(3, "Mar", 24589, 26540));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(4, "Apr", 25410, 26400));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(5, "May", 26000, 24880));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(6, "Jun", 24500, 26488));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(7, "Jul", 21300, 25000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(8, "Aug", 27000, 35200));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(9, "Sep", 22000, 34590));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(10, "Oct", 20000, 25600));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(11, "Nov", 24500, 28000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(12, "Dec", 15000, 26000));

		userData.setUsername("User2@test.com");
		userData.setPassword("User2");
		userData.setRating(9);
		userData.setSpentMoneyByCategoriesList(spentMoneyByCategoriesList);
		userData.setSpentMoneyInYearDataList(spentMoneyInYearDataList);

		userDataMap.put("User2@test.com", userData);
		userData = new UserData();

		spentMoneyByCategoriesList = new ArrayList<>();
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(1, "Food", 2000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(2, "Petrol", 5500));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(3, "Restaurants", 4000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(4, "Shoping", 20000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(5, "Grocery", 12000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(6, "Bills", 15000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(7, "Miscellaneous", 4000));

		spentMoneyInYearDataList = new ArrayList<>();
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(1, "Jan", 25000, 30000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(2, "Feb", 27000, 35200));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(3, "Mar", 22000, 34590));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(4, "Apr", 20000, 25600));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(5, "May", 24500, 28000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(6, "Jun", 23000, 29000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(7, "Jul", 22150, 27500));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(8, "Aug", 25410, 26400));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(9, "Sep", 26000, 24880));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(10, "Oct", 24500, 26488));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(11, "Nov", 21300, 25000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(12, "Dec", 25110, 26000));

		userData.setUsername("User3@test.com");
		userData.setPassword("User3");
		userData.setRating(7);
		userData.setSpentMoneyByCategoriesList(spentMoneyByCategoriesList);
		userData.setSpentMoneyInYearDataList(spentMoneyInYearDataList);

		userDataMap.put("User3@test.com", userData);
		userData = new UserData();

		spentMoneyByCategoriesList = new ArrayList<>();
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(1, "Food", 2000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(2, "Petrol", 4000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(3, "Restaurants", 1000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(4, "Shoping", 5000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(5, "Grocery", 1000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(6, "Bills", 5000));
		spentMoneyByCategoriesList.add(new SpentMoneyByCategories(7, "Miscellaneous", 1000));

		spentMoneyInYearDataList = new ArrayList<>();
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(1, "Jan", 24951, 24800));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(2, "Feb", 24587, 34890));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(3, "Mar", 24589, 26540));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(4, "Apr", 25410, 26400));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(5, "May", 26000, 24880));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(6, "Jun", 24500, 26488));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(7, "Jul", 21300, 25000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(8, "Aug", 27000, 35200));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(9, "Sep", 22000, 34590));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(10, "Oct", 20000, 25600));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(11, "Nov", 24500, 28000));
		spentMoneyInYearDataList.add(new SpentMoneyInYearData(12, "Dec", 15000, 26000));

		userData.setUsername("User4@test.com");
		userData.setPassword("User4");
		userData.setRating(5);
		userData.setSpentMoneyByCategoriesList(spentMoneyByCategoriesList);
		userData.setSpentMoneyInYearDataList(spentMoneyInYearDataList);

		userDataMap.put("User4@test.com", userData);
		userData = new UserData();
	}

	public UserData getUserData(String user) {
		return userDataMap.get(user);
	}
}
