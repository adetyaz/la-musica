import { VolumeIcon } from '../../icons'

type VolumeProps = {
	level?: number
}

const VolumeBar = ({}: VolumeProps) => {
	return (
		<div className='flex gap-2 items-center w-full'>
			<VolumeIcon />
			<div className='h-1 w-full bg-light-300 rounded'>
				<div className='h-1 w-1/2 bg-secondary rounded'></div>
			</div>
		</div>
	)
}

export default VolumeBar
