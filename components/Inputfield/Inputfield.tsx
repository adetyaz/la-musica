import { SearchIcon } from '../../icons'

function Inputfield() {
	return (
		<div className='flex input-wrapper'>
			<SearchIcon />
			<input className='input-form' placeholder='Search Artists' type='text' />
		</div>
	)
}

export default Inputfield
