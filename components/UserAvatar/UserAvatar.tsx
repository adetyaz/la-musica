type UserAvatarProps = {
	image?: string
	key?: string
}

const UserAvatar = ({ image, key }: UserAvatarProps) => {
	return <img src={image} alt='user avatar' key={key} className='avatars' />
}

export default UserAvatar
