import './style.css'

const UserInfo = ( {url, user, place} ) => {

    return (
        <div className='user-info'>
            <img className='avatar' src={url} alt="jessical randall" />
            <h2 className='user-name'>{user}</h2>
            <span className='user-location'>{place}</span>
        </div>
    )
}

export default UserInfo
