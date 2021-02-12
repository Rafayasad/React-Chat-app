import Firebase from '../../config/firebase';
import firebase from 'firebase';

// const set_data = () => {
//     return (dispatch) => {
//         dispatch({
//             type: "SETDATA",
//             user: { name: 'mustafa', email: 'mustafa@gmail.com' }
//         })
//         console.log("runn..");
//     }
// }

const facebook_login = (history) => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;

                let create_user = {
                    name:user.displayName,
                    emial:user.email,
                    profilePhoto:user.photoURL,
                    uid:user.uid
                }

                firebase.database().ref("/").child(`users/${user.uid}`).set(create_user)
                .then(()=>{
                    dispatch({type:"SETUSER",payload:create_user})
                    alert("user login succesfully");
                    history.push('/chat');
                })

                console.log("user==>",user);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // var email = error.email;
                // var credential = error.credential;

                console.log("error===>",error);
            });
    }
}

export {
    facebook_login,
   
}