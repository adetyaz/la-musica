import { ReactNode } from 'react'

type AlbumListProps = {
	title?: string
	children?: ReactNode
}

const AlbumList = ({ title, children }: AlbumListProps) => {
	return (
		<>
			<h2 className='text-white text-3xl font-bold my-8 '>{title}</h2>
			<div className='flex gap-4'>{children}</div>
		</>
	)
}

export default AlbumList
