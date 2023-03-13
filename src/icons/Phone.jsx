import React from 'react'

export default function Phone({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2218 15.2681L16.6818 14.9781C16.0718 14.9081 15.4718 15.1181 15.0418 15.5481L13.2018 17.3881C10.3718 15.9481 8.0518 13.6381 6.6118 10.7981L8.4618 8.94807C8.8918 8.51807 9.1018 7.91807 9.0318 7.30807L8.7418 4.78807C8.6218 3.77807 7.7718 3.01807 6.7518 3.01807H5.0218C3.8918 3.01807 2.9518 3.95807 3.0218 5.08807C3.5518 13.6281 10.3818 20.4481 18.9118 20.9781C20.0418 21.0481 20.9818 20.1081 20.9818 18.9781V17.2481C20.9918 16.2381 20.2318 15.3881 19.2218 15.2681Z" fill={color}/>
</svg>
  )
}
