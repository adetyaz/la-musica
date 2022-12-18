import React from 'react'
import HeartOutlineIcon from '../../icons/HeartOutlineIcon'
import { ChartData } from '../../interfaces'

type ChartListProps = {
	chartData: ChartData[]
}

const ChartList = ({ chartData }: ChartListProps) => {
	return (
		<>
			{chartData.map((item) => (
				<div
					className='rounded-3xl bg-primary-300 p-6 flex justify-between items-center w-full text-white m-8'
					key={item.id}
				>
					<div className='sm:flex gap-4 items-center'>
						<img src={item.image} alt='album art' />
						<div>
							<p className='text-xl'>{item.name}</p>
							<p className='text-gray-500'>{item.creator}</p>
							<p className='text-xl'>{item.duration}</p>
						</div>
					</div>
					<div className='rounded-full border-2 border-light-300 p-2'>
						<HeartOutlineIcon />
					</div>
				</div>
			))}
		</>
	)
}

export default ChartList
