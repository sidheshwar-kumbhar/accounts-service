package com.accounts.service.bean;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties
public class SpentMoneyInYearData {
	private int id;
	private String month;
	private int expensesMoney;
	private int erningMoney;
}
