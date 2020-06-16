import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

/*
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert (text);
    };
*/


    return <div>
        <div className={s.dialog}>{props.message}</div>
{/*        <div>
            <textarea ref={newMessageElement}> simple text </textarea>
        </div>
        <div>
            <button onClick={ addMessage }>Send Message</button>
        </div>*/}
    </div>
};

export default Message;