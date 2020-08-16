import runes from '../assets/runesReforged.json'

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
  console.log(`/assets/${url}`)
  const image = require(`../assets/${url}`)
  return image
}

export const getMainPerkImg = (id) => {
  const url = runes.find(rune => rune.id === id).icon
  const image = require(`../assets/${url}`)
  return image
}