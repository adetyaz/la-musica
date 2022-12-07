import Head from 'next/head'
import { LayoutProps } from '../interfaces'
import Header from './Header/Header'
import Inputfield from './Inputfield/Inputfield'
import Player from './Player/Player'

const Layout = ({ children, title = 'La Musica' }: LayoutProps) => (
	<>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='icon' href='/images/svg/logo.svg' />
		</Head>
		<div className='flex items-start p-8'>
			<Header />
			<main className='w-full px-12 pb-8'>
				<Inputfield />
				{children}
			</main>
		</div>
		<footer className='fixed w-full bottom-0'>
			<Player />
		</footer>
	</>
)

export default Layout
