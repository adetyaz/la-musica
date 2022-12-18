import { CollectionCard, Layout } from '../../components'
import { albumData } from '../../utils'

type CollectionsProps = {}

const Collections = ({}: CollectionsProps) => {
	return (
		<Layout backgroundColor='bg-primary-100'>
			<div className='flex gap-8 text-2xl pt-12'>
				<div className='rounded-full bg-orange-400 py-6 px-8 w-max'>
					My collection
				</div>
				<div className='rounded-full bg-orange-400 py-6 px-8 w-max'>Likes</div>
			</div>
			<div className='my-10 flex flex-wrap gap-8'>
				<CollectionCard album={albumData} />
			</div>
		</Layout>
	)
}

export default Collections
