import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [user, setUser] = useState(null)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => setBlogs(initialBlogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const rows = () => blogs.map(blog => <Blog key={blog.id} title={blog.title} author={blog.author} />)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username, password, })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log('login unsuccessful')
    }
  }

  const loginForm = () => (
    <div>
      <LoginForm handleLogin={handleLogin}
        handleUserChange={({ target }) => setUsername(target.value)}
        handlePassChange={({ target }) => setPassword(target.value)}
        username={username} password={password} />
    </div>
  )

  const blogForm = () => {
    const hideWhenVisible = { display: formVisible ? 'none' : '' }
    const showWhenVisible = { display: formVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setFormVisible(true)}>create a new blog</button>
        </div>
        <div style={showWhenVisible}>
          <BlogForm addBlog={addBlog} newTitle={newTitle}
            handleTitleChange={handleTitleChange} newAuthor={newAuthor}
            handleAuthorChange={handleAuthorChange} newUrl={newUrl}
            handleUrlChange={handleUrlChange} />
          <button onClick={() => setFormVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  const addBlog = (event) => {
    event.preventDefault()

    const blogToAdd = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: 0,
      id: blogs.length + 1,
    }

    blogService
      .create(blogToAdd)
      .then(data => {
        setBlogs(blogs.concat(data))
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
      })
  }

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const logOut = () => {
    window.localStorage.clear()
  }

  return (
    <div>
      <h1>Blogs</h1>
      {user === null && loginForm()}
      {user !== null &&
        <div>
          <p>Hello {user.name}!</p>
          <button onClick={logOut}>logout</button>
          <ul>
            {rows()}
          </ul>
          {blogForm()}
        </div>}
    </div>
  )
}



export default App
