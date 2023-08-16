import { getPhotos, getUser } from './getUnsplash'
import '@testing-library/jest-dom/extend-expect'
import { redirect } from 'next/navigation'

jest.mock('next/navigation', () => ({
  redirect: jest.fn()
}))

describe('API Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should get photos successfully', async () => {
    const mockPhotos = [{ id: 1, url: 'photo1.jpg' }]
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockPhotos)
    })

    const username = 'testuser'
    const result = await getPhotos(username)

    expect(result).toEqual(mockPhotos)
    expect(fetch).toHaveBeenCalledWith(
      `https://api.unsplash.com/users/${username}/photos?&per_page=20&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    )
  })

  it('should handle photo fetch error and redirect', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: async () => ({})
    })

    const username = 'testuser'

    await getPhotos(username)

    expect(redirect).toHaveBeenCalledWith('/not-found')
  })

  it('should get user information successfully', async () => {
    const mockUser = { id: 1, username: 'testuser' }
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockUser)
    })

    const username = 'testuser'
    const result = await getUser(username)

    expect(result).toEqual(mockUser)
    expect(fetch).toHaveBeenCalledWith(
      `https://api.unsplash.com/users/${username}/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    )
  })

  it('should handle user fetch error and redirect', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: async () => ({})
    })
    const username = 'testuser'

    await getUser(username)

    expect(redirect).toHaveBeenCalledWith('/not-found')
  })
})
