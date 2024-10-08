import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState, useRef } from 'react';

const Chat = () => {
const [open,setOpen] = useState(false);
const [text,setText] = useState("");

const endRef = useRef(null);

useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"});
}, []);



const handleEmoji = e => {
   setText((prev)=>prev + e.emoji);
   setOpen(false);
};

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="avatar" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet </p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="phone" />
                    <img src="./video.png" alt="video" />
                    <img src="./info.png" alt="info" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="avatar" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente hic consequuntur earum odio! Tenetur quibusdam eum nobis laudantium ullam rem earum tempora voluptas, recusandae at, asperiores in omnis sit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente hic consequuntur earum odio! Tenetur quibusdam eum nobis laudantium ullam rem earum tempora voluptas, recusandae at, asperiores in omnis sit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="avatar" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente hic consequuntur earum odio! Tenetur quibusdam eum nobis laudantium ullam rem earum tempora voluptas, recusandae at, asperiores in omnis sit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente hic consequuntur earum odio! Tenetur quibusdam eum nobis laudantium ullam rem earum tempora voluptas, recusandae at, asperiores in omnis sit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="avatar" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente hic consequuntur earum odio! Tenetur quibusdam eum nobis laudantium ullam rem earum tempora voluptas, recusandae at, asperiores in omnis sit.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    
                    <div className="texts">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jGGYJn_Sob97AYrTPKIlyFVBawARrJCIAw&s" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente hic consequuntur earum odio! Tenetur quibusdam eum nobis laudantium ullam rem earum tempora voluptas, recusandae at, asperiores in omnis sit.</p>
                        <span>1 min ago</span>

                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder='Type a message....' value={text} onChange={e=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="emoji" onClick={()=>setOpen(prev=>!prev)}/>
                    <div className="picker">

                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className='sendButton'>Send</button>
                
            </div>
        </div>
    )
}

export default Chat;