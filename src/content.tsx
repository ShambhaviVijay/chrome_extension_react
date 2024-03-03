import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import React from 'react';
import { IconButton } from "~features/count-button"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex fixed top-32 right-8">
      <IconButton />
    </div>
  )
}

export default PlasmoOverlay
