import './list.css';
import UserInfo from './userinfo/UserInfo';
import Chatlist from './chatlist/Chatlist';

const List = () => {
    return (
        <div className='list'>
            <UserInfo/>
            <Chatlist/>
        </div>
    )
}

export default List;
