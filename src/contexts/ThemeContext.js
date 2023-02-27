import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })


const ThemeContextProvider = ({ children }) => {
  
  const cookies = new Cookies();
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = cookies.get(CACHE_KEY)
    document.getElementsByTagName('body')[0].className = isDarkUserSetting === true || isDarkUserSetting === 'true' ? "body-dark" : "body-light";
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    document.getElementsByTagName('body')[0].className = isDark ? "body-light" : "body-dark";
    setIsDark((prevState) => {
      cookies.set(CACHE_KEY, JSON.stringify(!prevState), { path: '/' });
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? "dark-theme" : "light-theme"}>{children}</div>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
