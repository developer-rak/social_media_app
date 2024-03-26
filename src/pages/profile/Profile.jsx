import './Profile.css';

import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

import PO3 from '../../assets/post/3.jpeg';
import P7 from '../../assets/person/7.jpeg';

export default function Profile() {
  return (
   <>
   <Topbar />
   <div className='profile'>
      <Sidebar />
      <div className="profileRight">
         <div className="profileRightTop">
            <div className="profileCover">
               <img src={PO3} className='profileCoverImg' alt="" />
               <img src={P7} className='profileUserImg' alt="" />
            </div>
            <div className="profileInfo">
               <h4 className="profileInfoName">developer-rak</h4>
               <span className="profileInfoDesc">Hello my friends!</span>
            </div>
         </div>
         <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
         </div>
      </div>
   </div>
 </>
  )
}
