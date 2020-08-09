import axios from 'axios'

export const getPlayerMatches = async (nickname, region) => {
  console.log("getPlayerMatches(nickname, region) got data: ")
  console.log("nickname: ", nickname)
  console.log("region: ", region)
  const response = await axios.get(`/api/matches/of_acc_byname/${nickname}/${region}`)
  console.log(response.data)
  return response.data
}
