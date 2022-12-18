import Link from 'next/link'
import { AlbumCard, AlbumList } from '../components'
import ChartList from '../components/ChartList/ChartList'

import Layout from '../components/Layout'
import PlaylistCard from '../components/PlaylistCard/PlaylistCard'
import { albumData, chartData } from '../utils'

const IndexPage = () => (
	<Layout title='La Musica' backgroundColor='bg-primary-100'>
		<div className='sm:flex sm:gap-6' role='playlist'>
			<PlaylistCard />
			<div className='basis-2/5'>
				<ChartList chartData={chartData} />
			</div>
		</div>
		<AlbumList title='New releases'>
			<AlbumCard album={albumData} />
		</AlbumList>
	</Layout>
)

export default IndexPage
