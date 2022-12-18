import React from 'react'
import { Album } from '../../interfaces'

type CollectionCardProps = {
	album: Album[]
}

const gradient: string =
	'linear-gradient(to bottom, rgba(255,255,255,0.6138830532212884) 3%, rgba(15,18,19,0.8567401960784313) 85%, rgba(0,0,0,0.6082808123249299) 0%)'

const CollectionCard = ({ album }: CollectionCardProps) => {
	return (
		<>
			{album.map((item) => (
				<div
					className='collection-card rounded-3xl p-8 flex flex-col justify-end gap-2 mb-8'
					style={{
						backgroundImage: `${gradient}, url(${item.image})`,
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
