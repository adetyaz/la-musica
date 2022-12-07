import { Album } from '../../interfaces'

type AlbumCardProps = {
	album: Album[]
}

const AlbumCard = ({ album }: AlbumCardProps) => {
	return (
		<>
			{album.map((item) => (
				<div className='p-4 text-gray-400'>
					<img
						src={item.image}
						alt='album cover'
						className='mb-6 object-cover object-center'
					/>
					<p className='text-xl'>{item.title}</p>
					<p className='text-xl'>{item.artist}</p>
				</div>
			))}
		</>
	)
}

export default AlbumCard
