import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://cdn3.iconfinder.com/data/icons/social-media-set-1-1/256/Social_Media-11-512.png'/>
       <div className={s.item_post}> { props.message }
            <div className={s.item_span}>
                <span>like</span>
                {props.likesCount }
            </div>
       </div>
    </div>
  )
};

export default Post;