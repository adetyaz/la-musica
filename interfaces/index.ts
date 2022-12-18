import { ReactNode } from 'react'
// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
	id: number
	name: string
}

export type LayoutProps = {
	children?: ReactNode
	title?: string
	backgroundColor?: string
	backgroundImage?: string
}

export type IconProps = {
	active?: boolean
}

export type ChartData = {
	id?: string
	name?: string
	image?: string
	creator?: string
	duration?: string
}

export type Avatars = {
	image?: string
}

export type Album = {
	id?: number | string
	artist?: string
	title?: string
	image?: string
}

export type Song = {
	image?: string
	title?: string | any
	artist?: string
	album?: string
	duration?: string
}
