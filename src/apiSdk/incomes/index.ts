import axios from 'axios';
import queryString from 'query-string';
import { IncomeInterface, IncomeGetQueryInterface } from 'interfaces/income';
import { GetQueryInterface } from '../../interfaces';

export const getIncomes = async (query?: IncomeGetQueryInterface) => {
  const response = await axios.get(`/api/incomes${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createIncome = async (income: IncomeInterface) => {
  const response = await axios.post('/api/incomes', income);
  return response.data;
};

export const updateIncomeById = async (id: string, income: IncomeInterface) => {
  const response = await axios.put(`/api/incomes/${id}`, income);
  return response.data;
};

export const getIncomeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/incomes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteIncomeById = async (id: string) => {
  const response = await axios.delete(`/api/incomes/${id}`);
  return response.data;
};
