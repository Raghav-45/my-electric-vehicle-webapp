import React, { createContext, useContext, useEffect, useState } from 'react'

interface ContextType {
  geoLoc: { lat: number | null, lng: number | null }
}

const Context = createContext<ContextType>({
  geoLoc: { lat: null, lng: null },
  // currentUser: null,
  // signInWithGoogle: () => Promise,
  // login: () => Promise,
  // register: () => Promise,
  // logout: () => Promise,
  // forgotPassword: () => Promise,
  // resetPassword: () => Promise,
})

export const useStore = () => useContext(Context)

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  const [geoLoc, setGeoLoc] = useState<{ lat: number | null, lng: number | null }>({lat: null, lng: null})

  // useEffect(() => {
  //   const updateGeoLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const { latitude: newLatitude, longitude: newLongitude } = position.coords
  //         if (geoLoc.lat !== newLatitude || geoLoc.lng !== newLongitude) {
  //           // Only update the database if the location has changed
  //           // updateGeoLocOnDB(newLatitude, newLongitude)
  //           setGeoLoc({lat: newLatitude, lng: newLongitude})
  //         } else {
  //           console.log('Same GeoLoc, No Need to Update on DB')
  //         }
  //       }, (error) => {
  //         console.error('Error getting location:', error)
  //       })
  //     } else {
  //       console.error('Geolocation is not supported by this browser.')
  //     }
  //   }

  //   const interval = setInterval(() => updateGeoLocation(), 3000)
  //   return () => clearInterval(interval)
  // }, [geoLoc])

  // useEffect(() => {
    // const updateGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((rawPosition) => {
          console.log({lat: rawPosition.coords.latitude, lng: rawPosition.coords.longitude})
          setGeoLoc({lat: rawPosition.coords.latitude, lng: rawPosition.coords.longitude})
        })
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    // }

    // const interval = setInterval(() => updateGeoLocation(), 3000)
    // return () => clearInterval(interval)
  // }, [])

  const value = {
    geoLoc,
    // currentUser,
    // signInWithGoogle,
    // login,
    // register,
    // logout,
    // forgotPassword,
    // resetPassword,
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}