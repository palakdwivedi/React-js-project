import React,{useState, useMemo , useEffect} from 'react'

export default function App() {
  const[number, setNumber] = useState(0)
  const [dark , setDark] = useState(false);
  const tripleNum= useMemo(() => {
    return palakfunction(number)
  }, [number])
  const themeStyles = useMemo( ()=> {
    return {
      backgroundColor :dark  ? 'black' :'white',
      color: dark ? 'white' : 'black'
    }
  },[dark])
  useEffect (() => {
    console.log("theme is changed")
  }, [themeStyles])
  return (
    <>
    
      <input type="number" value= {number} onChange= {e=> setNumber (parseInt (e.target.value))}/>
      <button onClick={() => setDark(prevDark => !prevDark)}>change theme</button>
      <div style = {themeStyles}>{tripleNum}</div>
    
    </>
  )
}

function palakfunction(number){
  for(let i=0;i<10000000;i++){}
  return number*3
}
