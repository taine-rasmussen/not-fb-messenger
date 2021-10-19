import {useState, useEffect} from 'react'

const PREFIX = 'messenger-'

const useLocalStorage = (key, initialValue) => {
   
   // Combines key with PREFIX value to clarify local storage associated with this project
   const prefixedKey = PREFIX + key

   // Get data from local storage
   const [value, setValue] = useState(() => {
      const jsonValue = localStorage.getItem(prefixedKey)

      if (jsonValue !== 'undefined' && jsonValue !== null   ){
         return JSON.parse(jsonValue)
      }

      if (typeof initialValue === 'function'){
         return initialValue()
      } else {
         return initialValue
      }
   })

   // Updates local storage if value is changed
   useEffect(() =>{
      localStorage.setItem(prefixedKey, JSON.stringify(value))
   }, [prefixedKey, value])
   return [value, setValue]
}

export default useLocalStorage