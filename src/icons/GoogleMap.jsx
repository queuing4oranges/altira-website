import React from 'react'

export default function GoogleMap({ width, height }) {
  return (
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5792.742759509452!2d15.120575056900295!3d50.39676841356672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea99e878a931f%3A0x9233cd53654b5529!2s294%2004%20Veselice!5e0!3m2!1sde!2scz!4v1678473708644!5m2!1sde!2scz" width={width} height={height} style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}
