import React, { useState, useEffect } from 'react';


export const IconButton = () => {
  const [isTextboxOpen, setIsTextboxOpen] = useState(false);
  const [isIconHidden, setHidden] = useState(false);
  const [data, setData] = useState("enter text");
  const [generate, regenerate] = useState("Generate");
  const [userPrompt, setUserPrompt] = useState(""); // State to hold user's prompt
  const [isGenerateClicked, setIsGenerateClicked] = useState(false);
  const [savedUserPrompt, setSavedUserPrompt] = useState("")


  const bringdummydata = () => {
    setData(`Thank you for your prompt. If you have any more questions or if there's anything else I can help you with, feel free to ask.`);
    setSavedUserPrompt(userPrompt)
    setIsGenerateClicked(true)
  }
  const insertbutton = () => {
    setIsGenerateClicked(true);
  };
  const toggleTextbox = () => {
    setIsTextboxOpen(!isTextboxOpen);
    setHidden(true);
  }

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isTextboxOpen && !event.target.closest('.textbox-container') && !event.target.closest('.icon-button')) {
  //       setIsTextboxOpen(false)
  //       setHidden(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside, true)
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside, true)
  //   }
  // }, [isTextboxOpen])
  
  return (
    <div className="flex items-center justify-center h-[500px] max-w-[1000px] ">
      <div className="text-center">
        {!isIconHidden && (
          <button onClick={toggleTextbox} type="button" className="flex items-center justify-center w-10 h-10 rounded-full border-none
              shadow-lg hover:shadow-md
              active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900" >
            icon
          </button>
        )}
        <div className='container'>
        {isTextboxOpen && (
          <div className="flex items-center justify-center bg-white">
            <div className="w-full max-w-md p-4 rounded-md bg-white shadow-lg" style={{ maxWidth: '1000px', maxHeight: '400px', overflow: 'auto' }}>
              <div className="text-center">
                {!isIconHidden && (
                  <button onClick={toggleTextbox} type="button" className="flex items-center justify-center w-10 h-10 rounded-full border-none
            shadow-lg hover:shadow-md
            active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900" >
                    icon
                  </button>
                )}
                <div className="w-[300px]">

                  {isTextboxOpen && (
                    <div className="textbox-container">

                      {isGenerateClicked && (

                        <div>
                          <div className='text-right'>
                            <textarea
                              className="w-[250]  min-h-10 mt-2 px-4 bg-[#DFE1E7] rounded-md resize-none text-right"
                              value={savedUserPrompt}
                              readOnly
                            />
                          </div>
                          <div className='text-left'>
                            <textarea
                              className="w-[250] h-32 mt-2 px-4 bg-[#DBEAFE] rounded-md resize-none text-left"
                              value={data}
                              readOnly
                            />
                          </div>
                        </div>
                      )}
                      <input
                        type="text"
                        className="w-full h-10 mt-2 px-4 bg-[#DFE1E7] rounded-md"
                        placeholder="Enter your prompt"
                        value={userPrompt}
                        onChange={(e) => setUserPrompt(e.target.value)}
                      />
                      <div className='text-right'>
                        <button onClick={() => { bringdummydata(); insertbutton(); regenerate("Regenerate"); }} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                          {generate}
                        </button>
                        <button className="mt-4 border border-black text-black font-bold py-2 px-4 rounded">
                          Insert
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
