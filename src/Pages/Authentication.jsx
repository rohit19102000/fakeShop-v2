import { useEffect, useState } from 'react'
import { auth, googleProvider } from '../Config/firebase'
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from 'firebase/auth'
function Authentication() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [user,setUser] = useState();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user)=>{
        setUser(user);
    })
    return () => unsubscribe();
  })
  const googleSignIn = async(e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      console.log('google Sign-in successful!');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  }


  const signIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      console.log('Sign-in successful!');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };
const logOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth, email, password);
      console.log('logged out successful!');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
    {auth.currentUser ? (
      <div className="text-2xl mb-4">
        Hello {auth.currentUser.displayName || auth.currentUser.email}
      </div>
    ) : (
      <h1 className="text-2xl mb-4"> log in to continue</h1>
    )}

    <div className="bg-black bg-opacity-25 p-0 rounded shadow-lg w-96">
      <form className="flex flex-col items-center">
        <div className="mb-4 w-full">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4 w-full">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={signIn}
          className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Sign In
        </button>
      </form>

      <button
        onClick={googleSignIn}
        className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Sign in with Google
      </button>

      {auth.currentUser && (
        <button
          onClick={logOut}
          className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Log out
        </button>
      )}
    </div>
  </div>
  );
}

export default Authentication;