import "./Post.css";

import P1 from '../../assets/person/1.jpeg';
import PO1 from '../../assets/post/1.jpeg';
import Like from '../../assets/like.png';
import Heart from '../../assets/heart.png';

import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
         
         <div className="postTop">
            <div className="postTopLeft">
               <img src={P1} alt="" className="postProfileImg" />
               <span className="postUsername">Sam Bilings</span>
               <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
               <MoreVert />
            </div>
         </div>

         <div className="postCenter">
            <span className="postText">Hey! its my first Post.</span>
            <img src={PO1} className="postImg" alt="" />
         </div>

         <div className="postBottom">
            <div className="postBottomLeft">
               <img src={Like} className="likeIcon" alt="" />
               <img src={Heart} className="likeIcon" alt="" />
               <span className="postLikeCounter">32 people like it</span>
            </div>
            <div className="postBottomRight">
               <span className="postCommentText">9 comments</span>
            </div>
         </div>
      </div>
    </div>
  )
}
