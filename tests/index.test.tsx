import { render, screen } from '@testing-library/react'

import IndexPage from '../pages'

jest.mock('next/router', () => ({
	useRouter: () => ({
		pathname: '/',
	}),
}))

describe('IndexPage', () => {
	test('renders IndexPage', () => {
		const component = render(<IndexPage />)
		const title = screen.getByRole('title')
		const playlistCard = screen.getByRole('playlist')

		component.debug()
		expect(playlistCard).toBeInTheDocument()
		expect(title).toHaveTextContent('La Musica')
		expect(title).toHaveAttribute('role', 'title')
	})
})
