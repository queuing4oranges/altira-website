import React from 'react'

export default function Envelope({ width, height, color}) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18L2.01 6C2.01 4.9 2.9 4 4 4ZM12.53 12.67L19.6 8.25C19.85 8.09 20 7.82 20 7.53C20 6.86 19.27 6.46 18.7 6.81L12 11L5.3 6.81C4.73 6.46 4 6.86 4 7.53C4 7.82 4.15 8.09 4.4 8.25L11.47 12.67C11.79 12.87 12.21 12.87 12.53 12.67Z" fill={color}/>
</svg>

  )
}
