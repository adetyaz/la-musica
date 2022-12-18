import { Layout, SongList } from '../../components'

import { CollectionIcon, PlayIcon, RedHeartIcon } from '../../icons'
import { songData } from '../../utils/song-data'

type AlbumPageProps = {}

const gradient: string =
	'linear-gradient(to bottom, rgba(0,0,0,0.6811099439775911) 0%, rgba(0,0,0,1) 100%)'

const Album = ({}: AlbumPageProps) => {
	return (
		<Layout backgroundImage={`${gradient}, url('/images/png/album.png')`}>
			<div className='pt-10 flex gap-8 items-center'>
				<img src='/images/png/album.png' alt='album art' />
				<div className='flex flex-col gap-6  text-white'>
					<h1 className='text-6xl text-blue-300 font-bold'>Tomorrow’s tunes</h1>
					<p className='text-xl'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
						purus sit amet luctus venenatis
					</p>
					<p className='text-xl'>
						<span>64 songs </span>~<span> 16 hrs+</span>
					</p>
					<div className='flex gap-4 mt-1'>
						<div className='collection-button'>
							<PlayIcon />
							Play all
						</div>
						<div className='collection-button'>
							<CollectionIcon />
							Add to collection
						</div>
						<div className='collection-button block w-max'>
							<RedHeartIcon />
						</div>
					</div>
				</div>
			</div>

			<div className='my-8'>
				<SongList songs={songData} />
			</div>
		</Layout>
	)
}

export default Album
