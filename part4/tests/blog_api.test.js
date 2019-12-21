const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)

const initialBlogs = [
  {
    title: 'Alpacas Are Cool',
    author: 'AlpacaLover28',
    url: 'www.alpacasarecool.com',
    likes: 55
  },
  {
    title: 'Get Killing, Goat Kid',
    author: 'Asriel Dreemurr',
    url: 'undertale.lol',
    likes: 2
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})

  let blog = new Blog(initialBlogs[0])
  await blog.save()

  blog = new Blog(initialBlogs[1])
  await blog.save()
})

test('blogs are JSON', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body.length).toBe(initialBlogs.length)
})

test('a certain blog is found within blogs', async () => {
  const response = await api.get('/api/blogs')

  const contents = response.body.map(r => r.title)

  expect(contents).toContain('Alpacas Are Cool')
})

afterAll(() => {
  mongoose.connection.close()
})