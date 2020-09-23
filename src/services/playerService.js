import axios from 'axios'

import { API_URL } from '../utils/urls'

export const getPlayerMatches = async (nickname, region) => {
  try {
    const response = await axios.get(`${API_URL}/api/matches/of_acc_byname/${nickname}/${region}`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
