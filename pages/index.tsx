import Link from 'next/link'
import { AlbumCard, AlbumList } from '../components'
import ChartList from '../components/ChartList/ChartList'
import Inputfield from '../components/Inputfield/Inputfield'
import Layout from '../components/Layout'
import PlaylistCard from '../components/PlaylistCard/PlaylistCard'
import { albumData, chartData } from '../utils'

const IndexPage = () => (
	<Layout title='La Musica'>
		<div className='sm:flex sm:gap-6'>
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
