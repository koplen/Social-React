import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: ' Hi, how are you?', likesCount: 2},
                {id: 2, message: ' It\'s my first post', likesCount: 11},
                {id: 3, message: ' It\'s time for do something', likesCount: 11},
                {id: 4, message: ' Dada', likesCount: 11},
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: ' Dimych'},
                {id: 2, name: ' Andrey'},
                {id: 3, name: ' Sveta'},
                {id: 4, name: ' Sasha'},
                {id: 5, name: ' Vikror'},
                {id: 6, name: ' Valeriy'}
            ],

            messages: [
                {id: 1, message: ' Hi'},
                {id: 2, message: ' How are you?'},
                {id: 3, message: ' Yo man'},
                {id: 4, message: ' Yo man'},
                {id: 5, message: ' Yo man'}
            ],
            newMessageBody: "",
        },

        sidebar: {}
        },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._state._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarReducer =  sidebarReducer(this._state.sidebar, action);

        this._state._callSubscriber(this._state);
    }
};






export default store;
window.store = store;


/*Store OPP*/