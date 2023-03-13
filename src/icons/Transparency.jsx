import React from 'react'

export default function Transparency({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M31.6387 30.1491H33.2845L42.1179 39.0241C42.972 39.8783 42.972 41.2741 42.1179 42.1283C41.2637 42.9824 39.8679 42.9824 39.0137 42.1283L30.1595 33.2741V31.6283L29.597 31.0449C26.6804 33.5449 22.7012 34.8366 18.472 34.1283C12.6804 33.1491 8.05538 28.3158 7.34705 22.4824C6.26371 13.6699 13.6804 6.25326 22.4929 7.33659C28.3262 8.04493 33.1595 12.6699 34.1387 18.4616C34.847 22.6908 33.5554 26.6699 31.0554 29.5866L31.6387 30.1491ZM11.4095 20.7741C11.4095 25.9616 15.597 30.1491 20.7845 30.1491C25.972 30.1491 30.1595 25.9616 30.1595 20.7741C30.1595 15.5866 25.972 11.3991 20.7845 11.3991C15.597 11.3991 11.4095 15.5866 11.4095 20.7741Z" fill={color}/>
</svg>
  )
}
