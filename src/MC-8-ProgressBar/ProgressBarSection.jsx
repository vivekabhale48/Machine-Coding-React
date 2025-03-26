import { useEffect, useState } from "react"

export const ProgressBarSection = () => {

  const [width, setWidth] = useState(0);
  useEffect(() => {

    let interval = setInterval(() => {
      console.log('ihda');
      setWidth((prevWIdth) => {
        if(prevWIdth >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevWIdth + 10
      })
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <div className="border w-[250px] h-[50px]">
        <div style={{width: `${width}%`}} className="bg-[#dc1c1c] h-full">

        </div>
        <p className="text-center mt-2">{width}%</p>
      </div>
    </div>
  )
}