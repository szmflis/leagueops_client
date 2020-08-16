import summonerSpellData from '../assets/summonerSpells.json'

export const getSummSpellById = (summSpellId) => {
  const summSpellArr = Object.values(summonerSpellData.data)
  const championObj = summSpellArr.find(spell => Number(spell.key) === summSpellId)
  return championObj
}
