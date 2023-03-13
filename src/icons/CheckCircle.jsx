import React from 'react'

export default function CheckCircle({ width, height, color}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.66669 9.99999C1.66669 5.39999 5.40002 1.66666 10 1.66666C14.6 1.66666 18.3334 5.39999 18.3334 9.99999C18.3334 14.6 14.6 18.3333 10 18.3333C5.40002 18.3333 1.66669 14.6 1.66669 9.99999ZM4.75002 10.5833L7.74169 13.575C8.06669 13.9 8.60002 13.9 8.91669 13.575L15.2417 7.24999C15.5667 6.92499 15.5667 6.39999 15.2417 6.07499C14.9167 5.74999 14.3917 5.74999 14.0667 6.07499L8.33335 11.8083L5.92502 9.40832C5.60002 9.08332 5.07502 9.08332 4.75002 9.40832C4.59398 9.56402 4.50628 9.77539 4.50628 9.99582C4.50628 10.2163 4.59398 10.4276 4.75002 10.5833Z" fill={color}/>
</svg>
  )
}
