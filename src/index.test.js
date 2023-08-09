import Mockfly from '.'

jest.mock('axios', () => ({
  post: () => ({
    data: {
      _id: '64ccb3fdd253d90029878bc3',
      name: 'show',
      description: 'show',
      value: true,
    },
  }),
}))

test('Should set environment', () => {
  const mockfly = new Mockfly({ environment: 'production' })
  expect(mockfly.environment).toBe('production')
})

test('Should set authHeader', () => {
  const mockfly = new Mockfly({ authHeader: 'test auth header' })
  expect(mockfly.authHeader).toBe('test auth header')
})

test('Should set evaluation key', () => {
  const mockfly = new Mockfly()
  mockfly.identify('test evaluation key')
  expect(mockfly.evaluationKey).toBe('test evaluation key')
})

test('Should throw error if authHeader is null', async () => {
  const mockfly = new Mockfly()

  try {
    await mockfly.getFlag('test')
  } catch (error) {
    expect(error.toString()).toBe('Error: You must add the authHeader in constructor when create the mockfly object.')
  }
})

test('Should throw error if evaluationKey is null', async () => {
  const mockfly = new Mockfly({ authHeader: 'test' })

  try {
    await mockfly.getFlag('test')
  } catch (error) {
    expect(error.toString()).toBe(
      'Error: You must identify a user before get a flag. You can use mockfly.identify(value) function.'
    )
  }
})

test('Should throw error if key is null', async () => {
  const mockfly = new Mockfly({ authHeader: 'test' })
  mockfly.identify('test')

  try {
    await mockfly.getFlag()
  } catch (error) {
    expect(error.toString()).toBe('Error: Key cannot be null. Please, set a key when call to mockfly.getFlag(key).')
  }
})

test('Should return a flag', async () => {
  const mockfly = new Mockfly({ authHeader: 'test' })
  mockfly.identify('test')

  const data = await mockfly.getFlag('test key')
  expect(data).toStrictEqual({
    _id: '64ccb3fdd253d90029878bc3',
    name: 'show',
    description: 'show',
    value: true,
  })
})
