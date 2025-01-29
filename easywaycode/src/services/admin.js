import axios from 'axios'
import { config } from './config'

export async function register(firstName, lastName, email, password, role) {
  try {
    // post body
    const body = { firstName, lastName, email, password, role }
    debugger
    // send the post request
    const response = await axios.post(`${config.serverUrl}/users/register`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if response status is successful (200-299 range)
    if (response.status >= 200 && response.status < 300) {
      console.log('Registration successful:', response.status);
      console.log(response.data)
      return response.data;
    } else {
      console.error('Registration failed with status:', response.status);
      return null;
    }
  } catch (ex) {
    console.error('Exception in register:', ex);
    throw ex; // Propagate the error for handling in the calling code
  }
}

export async function login(email, password) {
  const body = { email, password }
  try {
    const response = await axios.post(`${config.serverUrl}/users/signin`, body)
    debugger
    if(response.status >= 200 && response.status < 300){
      return response.data
    }else{
      console.log(response.data)
      return null;
    }
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
  
}
