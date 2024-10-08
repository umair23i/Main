import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h4>Jane Deo</h4>
        <p>Lorem ipsum dolor, sit amet</p>
      </div>
      <div className="info">
        <div className="option">
        <div className="title">
          <span>Chat Settings</span>
          <img src="./arrowUp.png" alt="" />
        </div>
        </div>
        <div className="option">
        <div className="title">
          <span>Chat Settings</span>
          <img src="./arrowUp.png" alt="" />
        </div>
        </div>
        <div className="option">
        <div className="title">
          <span>Privacy & Help</span>
          <img src="./arrowUp.png" alt="" />
        </div>
        </div>
        <div className="option">
        <div className="title">
          <span>Shared Photos</span>
          <img src="./arrowDown.png" alt="" />
        </div>
        </div>
        <div className="photos">
          <div className="photoitem">
            <div className="photodetail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jGGYJn_Sob97AYrTPKIlyFVBawARrJCIAw&s"
              alt=""
            />
            <span>photo_2024_2.png</span>
            </div>
          <img src="./download.png" alt="" className="icon"/>
          </div>
         
          <div className="photoitem">
            <div className="photodetail">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jGGYJn_Sob97AYrTPKIlyFVBawARrJCIAw&s"
              alt=""
            />
            <span>photo_2024_2.png</span>
            </div>
          <img src="./download.png" alt="" className="icon"/>
          </div>
        </div>
        <div className="option">
        <div className="title">
          <span>Shared FIle</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <button>Block User</button>
      </div>
    </div>
  );
};

export default Detail;
