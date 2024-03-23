import './Rightbar.css';

import Gift from '../../assets/gift.png';
import Ad from '../../assets/ad.png';
import P3 from '../../assets/person/3.jpeg';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src={Gift} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mark zgr</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src={Ad} className='rightbarAd' alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={P3} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">Cox Jonathan</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
