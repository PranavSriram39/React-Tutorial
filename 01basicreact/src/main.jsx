import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {jsxx as _jsx} from "react/jsx-dev-runtime"
import App from './App.jsx'
function MyApp(){
  return (
    <div>
      <h1>Customm app!</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }
const anotherElement = (
  <a href = "https://google.com"  target='_blank'> vist gooogla</a>
)

const anotherUser = "chai aur react"

const reactElement= React.createElement(
'a',
{href:'https://google.com',target : '_blank'},
'click me to visit google',
anotherUser
)

createRoot(document.getElementById('root')).render(
 
reactElement

)
