type HeartProps = {
	className?: string
}

const HeartOutlineIcon = ({ className }: HeartProps) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z'
				stroke='#FACD66'
				strokeWidth='0.5625'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				opacity='0.4'
				d='M11 4.02501C11.8025 4.28451 12.3695 5.00076 12.4377 5.84151'
				stroke='#FACD66'
				strokeWidth='0.5625'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default HeartOutlineIcon
