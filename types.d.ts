export interface NavbarProps {
  showItems: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export interface NavLinkProps {
  showItems: boolean
  href: string
  text: string
  index: number
  setOpen: Dispatch<SetStateAction<boolean>>
}

export interface HeaderProps {
  handleToggle: () => void
  open: boolean
}

export interface GalleryItemProps {
  href: string
  author: string
  imgSrc: string
  imgAlt: string
  width: number
  height: number
  linkStyle?: string
  imgStyle?: string
}

export type ParamsUser = {
  params: { username: string }
}

declare module '*.otf'