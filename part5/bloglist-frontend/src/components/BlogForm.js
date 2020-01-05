import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({
  addBlog, newTitle, handleTitleChange, newAuthor,
  handleAuthorChange, newUrl, handleUrlChange }) => {
  return (
    <div>
      <form onSubmit={addBlog}>
        <h3>Create a new blog</h3><br></br>
        title:
        <input
          value={newTitle}
          onChange={handleTitleChange}
        /><br></br>
        author:
        <input
          value={newAuthor}
          onChange={handleAuthorChange}
        /><br></br>
        url:
        <input
          value={newUrl}
          onChange={handleUrlChange}
        /><br></br>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  newTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  newAuthor: PropTypes.string.isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
  newUrl: PropTypes.string.isRequired,
  handleUrlChange: PropTypes.func.isRequired
}

export default BlogForm