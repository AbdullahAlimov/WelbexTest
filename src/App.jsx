import { useEffect, useRef, useState } from "react";
import "./app.scss"
import Home from "./pages/Home/Home"

function App() {
  const widthRef = useRef(null);
  const [appWidth, setAppWidth] = useState(null);

  useEffect(() => {
    const getWidth=()=>{
      setAppWidth(widthRef?.current.getBoundingClientRect().width)
    }
    getWidth();
    window.addEventListener('resize', getWidth);
    return () => {
      window.removeEventListener('resize', getWidth);
    };
  }, [])

  return (
    <div className="app__container" ref={widthRef}>
      <div className="app__content">
      {appWidth !== null && 
      <Home appWidth={appWidth} 
      />}
      </div>
    </div>
  )
}

export default App;
