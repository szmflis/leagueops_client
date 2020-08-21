import runes from '../assets/runesReforged.json'
import summonerSpellData from '../assets/summonerSpells.json'
import championData from '../assets/champion.json'
import itemsData from '../assets/item.json'

export const getSummSpellById = (summSpellId) => {
  const summSpellArr = Object.values(summonerSpellData.data)
  const championObj = summSpellArr.find(spell => Number(spell.key) === summSpellId)
  return championObj
}

export const getChmpDataById = (championId) => {
  const championArr = Object.values(championData.data)
  const championObj = championArr.find(champion => Number(champion.key) === championId)
  return championObj
}

export const getPerkImg = (id) => {
  let url = ''
  runes.forEach(obj => {
    obj.slots.forEach(slot => {
      const rune = slot.runes.find(o => o.id === id)
      let potentialUrl
      if (rune) {
        potentialUrl = rune.icon
      }
      if (potentialUrl) {
        url = potentialUrl
      }
    })
  })
  const image = require(`../assets/${url}`)
  return image
}

export const getMainPerkImg = (id) => {
  const url = runes.find(rune => rune.id === id).icon
  const image = require(`../assets/${url}`)
  return image
}

export const getItemData = (id) => {
  const items = Object.values(itemsData)
  const searchedItem = items.find(item => Number(item.image.full.slice(0, 4)) === id)
  return searchedItem
}
