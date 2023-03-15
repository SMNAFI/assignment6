const tagSpanGenerator = (tags) => {
  let allTags = []
  if (tags?.length > 0) {
    for (let i = 0; i < tags.length - 1; i++) {
      allTags.push(<span key={tags[i]}>#{tags[i]}, </span>)
    }
    allTags.push(
      <span key={tags[tags.length - 1]}>#{tags[tags.length - 1]}</span>
    )
  }

  return allTags
}

export default tagSpanGenerator
