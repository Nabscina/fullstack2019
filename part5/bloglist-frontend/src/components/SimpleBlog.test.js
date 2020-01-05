import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('title of the blog is rendered', () => {
  const b = {
    title: 'blog of awesomeness',
    author: 'someone',
    url: 'something',
    likes: 8
  }

  const component = render(
    <SimpleBlog blog={b} />
  )

  expect(component.container).toHaveTextContent(
    'blog of awesomeness'
  )
})

test('author of the blog is rendered', () => {
  const b = {
    title: 'another cool blog',
    author: 'blogger456',
    url: 'blog2395010.net',
    likes: 900
  }

  const component = render(
    <SimpleBlog blog={b} />
  )

  const div = component.container.querySelector('.titleauthor')
  expect(div).toHaveTextContent(
    'blogger456'
  )
})

test('likes of the blog are rendered', () => {
  const b = {
    title: 'bloggy blogblog',
    author: 'muffinman',
    url: 'muffintime.lol',
    likes: 9001
  }

  const component = render(
    <SimpleBlog blog={b} />
  )

  expect(component.container).toHaveTextContent(
    '9001'
  )
})

test('if the like button is clicked twice, onClick is called twice', async () => {
  const blog = {
    title: 'carrot pufferfish',
    author: 'eugh',
    url: 'nom.com',
    likes: 90003
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  fireEvent.click(getByText('like'))
  fireEvent.click(getByText('like'))

  expect(mockHandler.mock.calls.length).toBe(2)
})