import axios from 'axios';
import { config } from './config';

// Function to get the list of mess
export async function getMessList() {
  try {
    const response = await axios.get(`${config.serverUrl}/mess/view`);
    return response.data;
  } catch (ex) {
    console.log('exception: ', ex);
  }
  return null;
}

// Function to get mess details by id
export async function getMessDetails(id) {
  try {
    const token = sessionStorage['token'];
    const response = await axios.get(`${config.serverUrl}/mess/details/${id}`, {
      headers: { token },
    });
    return response.data;
  } catch (ex) {
    console.log('exception: ', ex);
  }
  return null;
}

// Function to add a new mess
export async function addMess(name, owner, price, image) {
  // Use FormData to upload multi-part file
  const body = new FormData();
  body.append('name', name);
  body.append('owner', owner);
  body.append('price', price);
  body.append('image', image);

  try {
    const token = sessionStorage['token'];
    const response = await axios.post(`${config.serverUrl}/mess`, body, {
      headers: { token },
    });
    return response.data;
  } catch (ex) {
    console.log('exception: ', ex);
  }

  return null;
}

// Function to get mess by category
export async function getMessesByCategory(category) {
  try {
    const token = sessionStorage['token'];
    const response = await axios.get(`${config.serverUrl}/mess/category/${category}`, {
      headers: { token },
    });
    return response.data;
  } catch (ex) {
    console.log('exception: ', ex);
  }
  return null;
}
