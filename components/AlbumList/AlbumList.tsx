import { ReactNode } from 'react'

type AlbumListProps = {
	title?: string
	children?: ReactNode
}

const AlbumList = ({ title, children }: AlbumListProps) => {
	return (
		<>
			<h2 className='text-white text-3xl font-bold my-8 '>{title}</h2>
			<div className='grid grid-flow-col auto-cols-max pb-16 gap-4 overflow-x-auto overscroll-x-contain snap-x scroll-px-4'>
				{children}
			</div>
		</>
	)
}

export default AlbumList
