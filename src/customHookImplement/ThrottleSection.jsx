import { useEffect, useState } from "react"

export const ThrottleSection = () => {

  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    window.addEventListener("resize", calculateWindowWidth)

    return () => window.removeEventListener("resize", calculateWindowWidth);
  }, [])

  function calculateWindowWidth() {
    setWindowWidth({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  const calculateWidthUsingThrottle = useThrottle(calculateWindowWidth, 500);
  
  return (
    <div>
      {windowWidth.width}X{windowWidth.height}
    </div>
  )
}