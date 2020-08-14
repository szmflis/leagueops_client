import axios from 'axios'

export const getPlayerMatches = async (nickname, region) => {
  try {
    const response = await axios.get(`/api/matches/of_acc_byname/${nickname}/${region}`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
