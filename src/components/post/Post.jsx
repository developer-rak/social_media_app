import "./Post.css";

import P1 from '../../assets/person/1.jpeg';
import PO1 from '../../assets/post/1.jpeg';
import Like from '../../assets/like.png';
import Heart from '../../assets/heart.png';

import { MoreVert } from "@mui/icons-material";

import { Users } from '../../dummyData.js';

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
         
         <div className="postTop">
            <div className="postTopLeft">
               <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
               <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
               <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
               <MoreVert />
            </div>
         </div>

         <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.Photo} className="postImg" alt="" />
         </div>

         <div className="postBottom">
            <div className="postBottomLeft">
               <img src={Like} className="likeIcon" alt="" />
               <img src={Heart} className="likeIcon" alt="" />
               <span className="postLikeCounter">{post.like} people like it</span>
            </div>
            <div className="postBottomRight">
               <span className="postCommentText">{post.comment} comments</span>
            </div>
         </div>
      </div>
    </div>
  )
}
