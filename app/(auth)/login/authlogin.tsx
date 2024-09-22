'use client';
import axios from 'axios';

interface Employee {
  username: string;
  password: string;
  success?: boolean;  
  message?: string;  
}

export const login = async (username: string, password: string): Promise<Employee> => {
  try {
    const response = await axios.post<Employee>('http://localhost:8081/ITGlowDesktop/employee', {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    return {
        username,
        password,
        success: false,
        message: 'An error occurred during login' };
  }
};
