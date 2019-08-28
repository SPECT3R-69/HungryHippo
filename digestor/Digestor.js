const { Feed } = require(`feed`)

const OutputTypes = {
  RSS: `rss`,
  ATOM: `atom`,
  JSON: `json`
}

const assembleFeed = ({
  title,
  description,
  link,
  image,
  items = [],
}, outputType = OutputTypes.RSS) => {
  const newFeed = new Feed({
    title,
    description,
    link,
    image,
    generator: `HungryHippo 1.0`
  })
  if (items.length > 0) {
    items.forEach(item => newFeed.addItem(item))
  }
  if (outputType === OutputTypes.RSS) {
    return newFeed.rss2()
  } else if (outputType === OutputTypes.ATOM) {
    return newFeed.atom1()
  } else if (outputType === OutputTypes.JSON) {
    return newFeed.json1()
  } else {
    throw new Error(`Invalid outputType specified`)
  }
}

module.exports = {
  OutputTypes,
  assembleFeed
}