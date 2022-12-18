import { render, screen } from '@testing-library/react'
import { SongList } from '../../../components'
import { songData } from '../../../utils/song-data'

describe('Should render SongList', () => {
	test('render songs list component', () => {
		render(<SongList songs={songData} />)
		const songs = screen.getAllByRole('songs')
		expect(songs[0]).toHaveTextContent(songData[0].title)
		expect(songs[0]).toHaveAttribute('role', 'songs')
	})
})
