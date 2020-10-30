import React, {useState} from 'react'
import {backgroundsData, fonts, colors, layouts} from './const'
import './style.css'
import Box from './components/Box'

function App() {

  const [lines, setLines] = useState(['Dòng trên', 'Dòng dưới'])

  const [background, setBackground] = useState(backgroundsData[0])
  const [backgrounds, setBackgrounds] =  useState([...backgroundsData])

  const [font, setFont] = useState(fonts[0])
  const [color, setColor] = useState(colors[0])
  const [fontSize, setFontSize] = useState(30)

  const [layout, setLayout] = useState(layouts[1].value)

  const setLine = (e, index) => {
    let newLines = [...lines];
    newLines[index] = e.target.value;
    setLines(newLines)
  }

  const addBackgroundUrl = (e) => {
    let newBackgrounds = [...backgrounds];
    newBackgrounds.push(e.target.value)
    setBackgrounds(newBackgrounds)
    setBackground(e.target.value)
  }


  const uploadBackground = (e) => {
    let newBackgrounds = [...backgrounds];
    newBackgrounds.push(URL.createObjectURL(e.target.files[0]))
    setBackgrounds(newBackgrounds)
    setBackground(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <main className="flex bg-gray-200 min-h-screen w-full text-gray-700">
      <div className="w-2/3 flex flex-col h-full justify-between h-screen">
        <div className="flex items-center justify-center h-full">
          <div className={`relative ${font}`} style={{fontSize: fontSize}}>
            <div className={`absolute w-full h-full top-0 left-0 flex flex-col text-center overflow-hidden p-10 ${layout}`} style={{color: color}}>
              {lines.map((line, index) => <h2 key={index}><div dangerouslySetInnerHTML={{ __html: line}} ></div></h2>)}
            </div>  
            <img className="max-w-full max-h-full"  style={{maxHeight: 'calc(100vh - 50px'}} src={background} alt="bg" />
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-white border-l max-h-screen overflow-y-auto">
        <Box title="Content" isShowDefault>
          {lines.map((line, index) => (
            <div className="my-4 flex items-center">
              <label className="font-bold w-40 text-sm">Dòng {index + 1}</label>
              <textarea onChange={(e) => setLine(e, index)} className="px-4 py-2 border w-full rounded">{line}</textarea>
            </div>
          ))}
        </Box>
        <Box title="Background">
          <div className="my-4 flex items-center">
            <label className="font-bold w-40 text-sm">Url</label>
            <input onChange={(e) => {addBackgroundUrl(e)}} placeholder="http://" className="px-4 py-2 border w-full rounded" />
          </div>
          <div className="my-4 flex items-center">
            <label className="font-bold w-40 text-sm">Upload</label>
            {/* <button className="px-4 py-2 border w-full bg-gray-100 rounded">Upload</button> */}
            <input className="px-4 py-2 border w-full bg-gray-100 rounded cursor-pointer" type="file" onChange={(e) => {uploadBackground(e)}} />
          </div>
          <div className="my-4">
            <h3 className="font-bold w-40 text-sm">Default</h3>
            <div className="pt-4 w-full">
              <div className="whitespace-no-wrap overflow-x-auto flex flex-no-wrap py-1">
                {backgrounds.map((currentBackground, index) => (
                    <div key={index} className={`w-20 flex-none h-20 overflow-hidden cursor-pointer mx-1 border-2 inline-block ${(currentBackground === background ? 'border-black' : '')}`}>
                      <img 
                        onClick={() => setBackground(currentBackground)} 
                        src={currentBackground} alt="bg" 
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Box>
        <Box title="Font">
          <div className="my-4">
            <h3 className="font-bold w-40 text-sm">Color</h3>
            <div className="pt-4 w-full">
              <div className="whitespace-no-wrap overflow-x-auto flex flex-no-wrap py-1">
                {colors.map((currentColor, index) => (
                    <div 
                      key={index}
                      onClick={() => setColor(currentColor)} 
                      className={`w-8 flex-none h-8 overflow-hidden cursor-pointer mx-1 border-2 inline-block ${(currentColor === color ? 'border-black' : '')}`}
                      style={{backgroundColor: currentColor}}
                    >
                    </div>
                  ))}
                <div className={`w-8 font-bold relative text-xl pb-1 flex-none h-8 overflow-hidden cursor-pointer mx-1 border-2 inline-block bg-black text-white `}>
                  <input type="color" className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer z-50" onChange={(e) => setColor(e.target.value)}  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pb-1">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <h3 className="font-bold w-40 text-sm">Font</h3>
            <div className="pt-4 w-full">
              <div className="whitespace-no-wrap overflow-x-auto flex flex-no-wrap py-1">
                {fonts.map((currentFont, index) => (
                  <div 
                    key={index}
                    className={`text-xl px-10 flex-none flex justify-center items-center h-12 overflow-hidden cursor-pointer mx-1 border-2 inline-block ${currentFont} ${(currentFont === font ? 'border-black' : '')}`}
                    onClick={() => setFont(currentFont)}
                  >
                    Lorem Ipsum
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-4">
            <h3 className="font-bold w-40 text-sm">Size</h3>
            <div className="pt-4 w-full">
              <input className="w-full  cursor-pointer" id="typeinp" type="range" defaultValue={fontSize} min={10} max={100} onChange={(e) => setFontSize(e.target.value)} />
            </div>
          </div>
        </Box>
        <Box title="Layout" isShowDefault>
          <div className="my-4">
            <h3 className="font-bold w-40 text-sm">Default</h3>
            <div className="pt-4 w-full">
              <div className="whitespace-no-wrap overflow-x-auto flex flex-no-wrap py-1">
                {layouts.map((currentLayout, index) => (
                    <div  key={index} onClick={() => setLayout(currentLayout.value)} className="cursor-pointer">
                      <div className={`w-20 flex-none h-20 overflow-hidden mx-1 border-2 inline-block bg-gray-500 flex flex-col ${currentLayout.value} ${(currentLayout.value === layout ? 'border-black' : '')}`}>
                        <div className="bg-white h-2 w-16 mx-auto mt-2"></div>
                        <div className="bg-white h-2 w-16 mx-auto mb-2"></div>
                      </div>
                      <div className="text-center font-bold">{currentLayout.label}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Box>
      </div>
    </main>
  );
}

export default App;
