import axios from 'axios'

export const getCurrentRotation = async () => {
  try {
    const response = await axios.get('/api/champions/current_rotation')
    return response.data
  } catch (error) {
    return error.response.data
  }
}
