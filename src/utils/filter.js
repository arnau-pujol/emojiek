import list from '../data/emojis.json'

export default function filter (searchText = "", maxResults = 99999) {
  return list
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true
      }
      return (emoji.keywords.includes(searchText))
    })
    .slice(0, maxResults)
}
