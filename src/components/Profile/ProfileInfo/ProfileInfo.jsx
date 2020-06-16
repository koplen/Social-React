import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = ({profile, updateStatus, status}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.profile_photo}>
                <img src='https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>
            </div>
        </div>
    );
};

export default ProfileInfo;