import axios from 'axios'
import { API_URL } from '../utils/urls'

export const getCurrentRotation = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/champions/current_rotation`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
