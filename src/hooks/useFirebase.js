import { useEffect, useState } from 'react'
 import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,GithubAuthProvider } from "firebase/auth";
import initializefirebase from 'src/firebaseinitialize/initialize';

 
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();
initializefirebase()
const useFirebase = () => {
const [user,setUser]=useState('')
const [error,setError]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [userName,setUserName]=useState('')
// all input event handler

const handleUserEmail=(e)=>{
setEmail(e.target.value)
}
const handelUserPassword=(e)=>{
    setPassword(e.target.value)
}
const handelUserName=(e)=>{
    setUserName(e.target.value)
}




const auth=getAuth()
const signInUsingGoolge=()=>{
   return signInWithPopup(auth,googleProvider)
   
}

const signInUsingGithub =()=>{
   return signInWithPopup(auth,githubProvider)
    
}

 useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
        
    })
 },[auth])


 const createNewUser=()=>{
  return createUserWithEmailAndPassword(auth,email,password)

 }

// const setNewUserName=()=>{
//     updateProfile(auth.currentUser, {
//         displayName:{userName}
//       }).then(() => {
       
//       })
//       .catch(error=>{
//           setError(error.code)
//       })

// }


const login=()=>{
return signInWithEmailAndPassword(auth, email, password)

}




const logOut=()=>{
        signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      setError(error.code)
    });
}





    return {
        signInUsingGoolge,
        signInUsingGithub,
        user,
        error,
        logOut,
        handelUserPassword,
        handleUserEmail,
        createNewUser,
        handelUserName,
        userName,
        login,
        setError
    }
};

export default useFirebase;