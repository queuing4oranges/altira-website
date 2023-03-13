import React from 'react'

export default function Line({ width, height, stroke, strokeWidth }) {
  return (
    <svg width={width} height={height} viewBox="0 0 684 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.990845" y1="2" x2="683.009" y2="2" stroke={stroke} strokeWidth={strokeWidth}/>
    </svg>
  )
}
