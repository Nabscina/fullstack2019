import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      neutral: 0,
      bad: 0
    })
  })

  test('neutral is incremented', () => {
    const action = {
      type: 'NEUTRAL'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      neutral: 1,
      bad: 0
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      neutral: 0,
      bad: 1
    })
  })

  test('good, neutral and bad can all be reset', () => {
    const action = {
      type: 'ZERO'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual(initialState)
  })

  test('multiple values are incremented correctly', () => {
    const action = {
      type: 'GOOD'
    }
    const action2 = {
      type: 'BAD'
    }
    const action3 = {
      type: 'NEUTRAL'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      neutral: 0,
      bad: 0
    })

    deepFreeze(newState)
    const newerState = counterReducer(newState, action2)
    expect(newerState).toEqual({
      good: 1,
      neutral: 0,
      bad: 1
    })

    deepFreeze(newerState)
    const newestState = counterReducer(newerState, action3)
    expect(newestState).toEqual({
      good: 1,
      neutral: 1,
      bad: 1
    })
  })
})