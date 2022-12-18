type UserAvatarProps = {
	image?: string
}

const UserAvatar = ({ image }: UserAvatarProps) => {
	return <img src={image} alt='user avatar' className='avatars' />
}

export default UserAvatar
