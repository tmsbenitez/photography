export async function getPhotos(username: string) {
  const photos = await fetch(
    `https://api.unsplash.com/users/${username}/photos?&per_page=20&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  )

  if (!photos.ok) {
    throw new Error('Failed to fetch data')
  }

  return photos.json()
}

export async function getUser(username: string) {
  const user = await fetch(
    `https://api.unsplash.com/users/${username}/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
  )

  if (!user.ok) {
    throw new Error('Failed to fetch data')
  }

  return user.json()
}
