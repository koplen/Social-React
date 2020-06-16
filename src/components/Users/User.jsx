import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.content_block}>
            <div className={styles.content_flex}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                             <div className={styles.follow_button}>
                                 {user.followed
                                     ? <button disabled={followingInProgress
                                         .some(id => id === user.id)}
                                               onClick={() => {
                                                   unfollow(user.id)
                                               }}>
                                         Unfollow </button>
                                     : <button disabled={followingInProgress.some(id => id === user.id)}
                                               onClick={() => {
                                                   follow(user.id)
                                               }}>
                                         Follow </button>}
                             </div>
                        </span>
                        <span>
                            <span>
                                <div className={styles.content_user_name}>{user.name}</div>
                                <div className={styles.content_user_name}>{user.status}</div>
                            </span>
                            <span>
                                <div className={styles.content_location}>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </div>
                            </span>
                        </span>
            </div>
        </div>)
};


export default User;