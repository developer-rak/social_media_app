import './Rightbar.css';

import Gift from '../../assets/gift.png';
import Ad from '../../assets/ad.png';
// import P3 from '../../assets/person/3.jpeg';

import { Users } from '../../dummyData';
import Online from '../online/Online';

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
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
