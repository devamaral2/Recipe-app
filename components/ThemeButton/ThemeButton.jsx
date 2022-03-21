import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Button from './styled'

export default function ThemeButton () {
  const { setTheme, theme } = useContext(AppContext);
  return (
    <Button
      type='button'
      onClick={() => setTheme((prev) => prev === 'light' ? 'dark' : 'light')} 
      className="theme-button" 
      >
      {theme === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}