import {
	NextIcon,
	PlayIcon,
	PreviousIcon,
	RepeatIcon,
	ShuffleIcon,
} from '../../icons'
import PlayProgress from '../PlayProgress/PlayProgress'
import VolumeBar from '../VolumeBar/VolumeBar'

type Props = {}

const Player = (props: Props) => {
	return (
		<div className='border-t border-orange-100 flex justify-around bg-slate-900 p-8 items-center'>
			<img
				src='/images/png/album-1.png'
				alt='album art'
				className='w-16 h-16'
			/>
			<div>
				<p className='text-white text-xl'>Song Title</p>
				<p className='text-gray-500'>Artist Name</p>
			</div>
			<div className='flex flex-col gap-10 items-center basis-7/12'>
				<div className='flex gap-12 justify-center items-center'>
					<ShuffleIcon />
					<PreviousIcon />
					<PlayIcon />
					<NextIcon />
					<RepeatIcon />
				</div>
				<PlayProgress />
			</div>
			<div className='basis-1/12'>
				<VolumeBar />
			</div>
		</div>
	)
}

export default Player
