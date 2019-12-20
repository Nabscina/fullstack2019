const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {

  let x = 0
  blogs.map(blog => x += blog.likes)
  return x
}

module.exports = {
  dummy, totalLikes
}