import { useRouter } from 'next/router'
import Link from 'next/link'
import {
	HomeIcon,
	MusicLibraryIcon,
	RadioIcon,
	VideoIcon,
	UserIcon,
	LogoutIcon,
} from '../../icons'

const Header = () => {
	const router = useRouter()

	console.log(router)

	return (
		<header className='w-1/4 sm:w-24 hidden sm:block'>
			<img src='/images/svg/logo.svg' alt='logo' className='mb-10 mx-auto' />
			<nav className='flex flex-col items-center'>
				<ul className='p-12 sm:p-4 mb-12 bg-zinc-900 rounded-full'>
					<li className='my-8'>
						<Link href='/'>
							<HomeIcon active={router.pathname === '/'} />
						</Link>
					</li>
					<li className='my-8'>
						<Link href='/'>
							<MusicLibraryIcon active={router.pathname === '/About'} />
						</Link>
					</li>
					<li className='my-8'>
						<Link href='/'>
							<RadioIcon active={router.pathname === '/Collections'} />
						</Link>
					</li>
					<li className='my-8'>
						<Link href='/'>
							<VideoIcon />
						</Link>
					</li>
				</ul>
				<ul className='p-12 sm:p-4 bg-zinc-900 rounded-full'>
					<li className='my-8'>
						<Link href='/'>
							<UserIcon />
						</Link>
					</li>
					<li className='my-8'>
						<Link href='/'>
							<LogoutIcon />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
