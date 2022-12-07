import { HeartIcon } from '../../icons'
import { avatarData } from '../../utils/avatars'
import UserAvatar from '../UserAvatar/UserAvatar'

type PlaylistCardProps = {
	name?: string
	preview?: string
	avatars?: []
	likes?: string
}

const PlaylistCard = ({}: PlaylistCardProps) => {
	return (
		<div className='playlist-card w-full bg-teal-500 text-white p-16 mb-8 flex flex-col justify-between items-start'>
			<p className='text-xl'>Curated Playlist</p>
			<div>
				<h2 className='text-6xl'>R & B Hits</h2>
				<p className='text-2xl'>
					All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
					habit, and so much more
				</p>
			</div>
			<div className='flex gap-4'>
				{avatarData.map((item) => (
					<UserAvatar image={item.image} key={item.image} />
				))}
				<HeartIcon />
				<p className='text-2xl'>33k Likes</p>
			</div>
		</div>
	)
}

export default PlaylistCard
