import React from 'react'

export default function Hamburger({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Filled_Line" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><line fill="none" id="XMLID_837_" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="16" y2="16"/><line fill="none" id="XMLID_836_" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="25" y2="25"/><line fill="none" id="XMLID_835_" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="25" y1="7" y2="7"/></svg>
  )
}
