import React from 'react'

export default function Tab1({ tab1 }) {
  return (
    <div>
      <p>{ tab1.title }</p>
      <p>{ tab1.content }</p>
      <p>{ tab1.moreContent }</p>
    </div>
  )
}
