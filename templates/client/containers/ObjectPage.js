import React from 'react'
import { Link } from 'react-router'

export default function ObjectPage() {

  return (
    <div>
      <Link to='/objects/' activeClassName='active'>
        Go to objects page
      </Link>
    </div>
  )

}
