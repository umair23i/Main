import './userinfo.css';

const UserInfo = () => {
    return (
        <div className='userinfo'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h4>Jhon Deo</h4>
            </div>
            <div className="icons">
                <img src="./video.png" alt="" />
                <img src="./more.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default UserInfo;