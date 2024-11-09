  // import { createContext, useContext, useEffect, useState } from "react";
  // import { initializeApp } from "firebase/app"; // Initialize Firebase
  // import {
  //   getAuth,
  //   createUserWithEmailAndPassword,
  //   signOut,
  //   signInWithEmailAndPassword,
  //   GoogleAuthProvider,
  //   signInWithPopup,
  //   onAuthStateChanged,
  // } from "firebase/auth"; // Firebase Authentication
  // import {
  //   getFirestore,
  //   doc,
  //   setDoc,
  //   getDoc,
  //   collection,
  // } from "firebase/firestore"; // Firestore
  // import { getStorage } from "firebase/storage"; // Firebase Storage

  // // Create Firebase Context
  // export const FirebaseContext = createContext();

  // // Firebase configuration (API key, project ID, etc.)
  // const firebaseConfig = {
  //   apiKey: "AIzaSyB6d12RSK2M2cgmiYXsEpvq76jrpCah_ak",
  //   authDomain: "e-commerce-a269a.firebaseapp.com",
  //   projectId: "e-commerce-a269a",
  //   storageBucket: "e-commerce-a269a.appspot.com",
  //   messagingSenderId: "44877954203",
  //   appId: "1:44877954203:web:c72913246dbc82fd9bda3e",
  // };

  // // Initialize Firebase services
  // const firebaseApp = initializeApp(firebaseConfig);
  // const firebaseAuth = getAuth(firebaseApp); // Firebase Authentication instance
  // const googleProvider = new GoogleAuthProvider(); // Google provider for login
  // const fireStore = getFirestore(firebaseApp); // Firestore instance
  // const storage = getStorage(firebaseApp); // Storage instance

  // // Firebase Context Provider
  // export const FirebaseProvider = ({ children }) => {
  //   const [user, setUser] = useState(null); // Holds the authenticated user
  //   const [userData, setUserData] = useState(null); // Holds Firestore user data (name, email)

  //   // Function to create a user account and save additional information to Firestore
  //   const crateUserAccount = async (name, email, password) => {
  //     try {
  //       // Create user with email and password
  //       const userCredential = await createUserWithEmailAndPassword(
  //         firebaseAuth,
  //         email,
  //         password
  //       );
  //       const user = userCredential.user;

  //       // Save user information (name and email) to Firestore using UID
  //       await setDoc(doc(fireStore, "users", user.uid), {
  //         name: name,
  //         email: email,
  //       });

  //       console.log("User registered successfully and data saved to Firestore!");
  //     } catch (error) {
  //       console.error("Error registering user:", error);
  //     }
  //   };

  //   // Google login function
  //   const loginWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  //   // Function to login an existing user
  //   const loginUserAccount = async (email, password) => {
  //     try {
  //       const userCredential = await signInWithEmailAndPassword(
  //         firebaseAuth,
  //         email,
  //         password
  //       );
  //       const user = userCredential.user;
  //       setUser(user);

  //       console.log("Logged in user UID:", user.uid); // Check if user UID is correctly fetched

  //       // Fetch user data from Firestore
  //       const docRef = doc(fireStore, "users", user.uid);
  //       const docSnap = await getDoc(docRef);

  //       if (docSnap.exists()) {
  //         const userData = docSnap.data();
  //         setUserData(userData); // Store user data (name, email)
  //         console.log("User data fetched:", userData); // Log the fetched data
  //       } else {
  //         console.log("No such document!");
  //       }
  //     } catch (error) {
  //       console.error("Error logging in user:", error);
  //     }
  //   };

  //   // Logout the current user
  //   const logOutUser = async () => {
  //     try {
  //       // Attempt to sign the user out
  //       await signOut(firebaseAuth);

  //       // Clear user state and user data after successful signout
  //       setUser(null);
  //       setUserData(null);

  //       console.log("User logged out successfully");
  //     } catch (error) {
  //       console.log("Error logging out user:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
  //       if (user) {
  //         setUser(user); // Set authenticated user
  //         // Fetch user data from Firestore
  //         const docRef = doc(fireStore, "users", user.uid);
  //         const docSnap = await getDoc(docRef);

  //         if (docSnap.exists()) {
  //           setUserData(docSnap.data()); // Set user data in state
  //           console.log("User data fetched:", docSnap.data());
  //         }
  //       } else {
  //         // No user is signed in, clear state
  //         setUser(null);
  //         setUserData(null);
  //         console.log("User logged out or not signed in");
  //       }
  //     });

  //     return () => unsubscribe(); // Cleanup listener on component unmount
  //   }, []);

  //   // Return whether the user is logged in (used to protect routes, etc.)
  //   const isLoggedIn = user ? true : false;
  //   // console.log(isLoggedIn);

  //   return (
  //     <FirebaseContext.Provider
  //       value={{
  //         user,
  //         userData, // User data from Firestore (name, email)
  //         fireStore,
  //         crateUserAccount,
  //         loginUserAccount,
  //         loginWithGoogle,
  //         logOutUser,
  //         isLoggedIn,
  //       }}
  //     >
  //       {children}
  //     </FirebaseContext.Provider>
  //   );
  // };

  // // Custom hook to use Firebase context in other components
  // export const useFirebaseContext = () => {
  //   return useContext(FirebaseContext);
  // };


  // Firebase.jsx
  import { createContext, useContext, useEffect, useState } from "react";
  import { initializeApp } from "firebase/app";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
  } from "firebase/auth";
  import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
  } from "firebase/firestore";
  import { getStorage } from "firebase/storage";

  export const FirebaseContext = createContext();

  const firebaseConfig = {
    apiKey: "AIzaSyB6d12RSK2M2cgmiYXsEpvq76jrpCah_ak",
    authDomain: "e-commerce-a269a.firebaseapp.com",
    projectId: "e-commerce-a269a",
    storageBucket: "e-commerce-a269a.appspot.com",
    messagingSenderId: "44877954203",
    appId: "1:44877954203:web:c72913246dbc82fd9bda3e",
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();
  const fireStore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const crateUserAccount = async (name, email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );
        const user = userCredential.user;

        await setDoc(doc(fireStore, "users", user.uid), {
          name: name,
          email: email,
        });

        console.log("User registered successfully!");
        return { success: true };
      } catch (error) {
        console.error("Error registering user:", error);
        return { success: false, error };
      }
    };

    const loginWithGoogle = async () => {
      try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        return { success: true, user: result.user };
      } catch (error) {
        console.error("Google login error:", error);
        return { success: false, error };
      }
    };

    const loginUserAccount = async (email, password) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );
        const user = userCredential.user;
        
        const docRef = doc(fireStore, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserData(userData);
        }
        
        return { success: true };
      } catch (error) {
        console.error("Error logging in:", error);
        return { success: false, error };
      }
    };

    const logOutUser = async () => {
      try {
        await signOut(firebaseAuth);
        setUser(null);
        setUserData(null);
        return { success: true };
      } catch (error) {
        console.error("Error logging out:", error);
        return { success: false, error };
      }
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
        try {
          if (user) {
            setUser(user);
            const docRef = doc(fireStore, "users", user.uid);
            const docSnap = await getDoc(docRef);
            console.log("USer Data",user);
            

            if (docSnap.exists()) {
              setUserData(docSnap.data());
            }
          } else {
            setUser(null);
            setUserData(null);
          }
        } catch (error) {
          console.error("Auth state change error:", error);
        } finally {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, []);

    const value = {
      user,
      userData,
      fireStore,
      crateUserAccount,
      loginUserAccount,
      loginWithGoogle,
      logOutUser,
      isLoggedIn: !!user,
      loading
    };

    return (
      <FirebaseContext.Provider value={value}>
        {!loading && children}
      </FirebaseContext.Provider>
    );
  };

  export const useFirebaseContext = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
      throw new Error("useFirebaseContext must be used within a FirebaseProvider");
    }
    return context;
  };