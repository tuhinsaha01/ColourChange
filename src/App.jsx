import { useState } from 'react'

function App() {

  const [color, setColor] = useState("white");
  return (
    <>
    
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <h1 className='fixed flex flex-wrap justify-center top-50 bottom-80 inset-x-0 px-2 font-bold' >CHANGE COLOUR OF BACKGROUND BY USING BUTTON</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-slate-600 px-3 py-2 rounded-3xl">
            <button
              className="but"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setColor("red");
              }}
            >Red
            </button>
            <button
             className="but"
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                setColor("blue");
              }}
            >Blue
            </button>
            <button
             className="but"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setColor("green");
              }}
            >Green
            </button>
            <button
             className="but"
              style={{ backgroundColor: "gold" }}
              onClick={() => {
                setColor("gold");
              }}
            >Gold
            </button>
            <button
             className="but"
              style={{ backgroundColor: "Black" }}
              onClick={() => {
                setColor("white");
              }}
            >Retry
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
