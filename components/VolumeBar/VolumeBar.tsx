import { VolumeIcon } from '../../icons'

type VolumeProps = {
	level?: number
}

const VolumeBar = ({}: VolumeProps) => {
	return (
		<div className='flex gap-2 items-center w-full'>
			<VolumeIcon />
			<div className='h-1 w-full bg-slate-700 rounded'>
				<div className='h-1 w-1/2 bg-orange-500 rounded'></div>
			</div>
		</div>
	)
}

export default VolumeBar
