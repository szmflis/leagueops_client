import championData from '../assets/champion.json'

export const getChmpDataById = (championId) => {
  const championArr = Object.values(championData.data)
  const championObj = championArr.find(champion => Number(champion.key) === championId)
  return championObj
}
