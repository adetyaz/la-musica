import React from 'react'
import { Album } from '../../interfaces'

type CollectionCardProps = {
	album: Album[]
}

const gradient: string =
	'linear-gradient(90deg, rgba(2,0,36,0.38139005602240894) 0%, rgba(3,3,22,0.6334908963585435) 35%, rgba(0,28,33,0.34217436974789917) 100%)'

const CollectionCard = ({ album }: CollectionCardProps) => {
	return (
		<>
			{album.map((item) => (
				<div
					className='collection-card rounded-3xl p-8 flex flex-col justify-end gap-2 mb-8'
					style={{
						backgroundImage: `${gradient},url(${item.image})`,
					}}
				>
					<p className='text-3xl text-white'>{item.title}</p>
					<p className='text-xl text-gray-300'>{item.artist}</p>
				</div>
			))}
		</>
	)
}

export default CollectionCard
