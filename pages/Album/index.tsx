import { Layout, SongList } from '../../components'

import { CollectionIcon, PlayIcon, RedHeartIcon } from '../../icons'
import { songData } from '../../utils/song-data'

type AlbumPageProps = {}

const Album = ({}: AlbumPageProps) => {
	return (
		<Layout>
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
						<div className='bg-zinc-800 opacity-60 rounded-full p-6  flex gap-2'>
							<PlayIcon />
							Play all
						</div>
						<div className='bg-zinc-800 opacity-60 rounded-full p-6 flex gap-2'>
							<CollectionIcon />
							Add to collection
						</div>
						<div className='bg-zinc-800 opacity-60 rounded-full p-6 w-max'>
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
