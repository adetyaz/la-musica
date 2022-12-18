import { DotIcon, HeartOutlineIcon } from '../../icons'
import { Song } from '../../interfaces'

type SongListProps = {
	songs: Song[]
}

const SongList = ({ songs }: SongListProps) => {
	return (
		<>
			{songs.map((item) => (
				<div
					className='flex items-center justify-between bg-primary-200 rounded-3xl text-white text-xl p-6 mb-6'
					key={item.title}
					role='songs'
				>
					<img src={item.image} alt='song art' className='w-20' />
					<HeartOutlineIcon />
					<p className='text-xl'>
						<span>{item.title}</span> - <span role='artist'>{item.artist}</span>
					</p>
					<p>{item.album}</p>
					<p>{item.duration}</p>
					<DotIcon />
				</div>
			))}
		</>
	)
}

export default SongList
