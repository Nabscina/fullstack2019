const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {

  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  test('equals the likes of the only blog in the list', () => {
    const result = listHelper.totalLikes([
      {
        title: 'Ketamiinioverit',
        author: 'Nisti',
        url: 'www.kek.de',
        likes: 5
      }
    ])
    expect(result).toBe(5)
  })

  test('of a bigger list is correct', () => {
    const result = listHelper.totalLikes([
      {
        title: 'Ketamiinioverit',
        author: 'Nisti',
        url: 'www.kek.de',
        likes: 5
      },
      {
        title: 'The Eastern Sea is so Blue',
        author: 'M. Gold',
        url: 'www.biginjapan.com',
        likes: 50
      },
      {
        title: 'I Broke A Pencil In Half',
        author: 'L. Tomlinson',
        url: 'nocontr.ol',
        likes: 125
      }
    ])
    expect(result).toBe(180)
  })

})