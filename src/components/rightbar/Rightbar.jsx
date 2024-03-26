import './Rightbar.css';

import Gift from '../../assets/gift.png';
import Ad from '../../assets/ad.png';
import P1 from '../../assets/person/1.jpeg';
import P2 from '../../assets/person/2.jpeg';
import P3 from '../../assets/person/3.jpeg';
import P4 from '../../assets/person/4.jpeg';
import P5 from '../../assets/person/5.jpeg';
import P6 from '../../assets/person/6.jpeg';

import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Sukkur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Sindh</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={P1} className='rightbarFollowingImg' alt="" />
            <span className='rightbarFollowingName'>Jogn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={P2} className='rightbarFollowingImg' alt="" />
            <span className='rightbarFollowingName'>Jogn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={P3} className='rightbarFollowingImg' alt="" />
            <span className='rightbarFollowingName'>Jogn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={P4} className='rightbarFollowingImg' alt="" />
            <span className='rightbarFollowingName'>Jogn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={P5} className='rightbarFollowingImg' alt="" />
            <span className='rightbarFollowingName'>Jogn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={P6} className='rightbarFollowingImg' alt="" />
            <span className='rightbarFollowingName'>Jogn Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        { profile ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}
