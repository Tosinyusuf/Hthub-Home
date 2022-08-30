import React from 'react'
import { Company, Resources, Landing } from '../../../../utils/Footer'
import { LinkRoute } from '../../../../components/LinkRoute'

export const Routes = () => {
  const menu1 = (
    <div>
      {Landing.map((category, index) => (
        <LinkRoute to={category.url} className="category" key={index}>
          {category.label}
        </LinkRoute>
      ))}
    </div>
  )
  const menu2 = (
    <div>
      {Company.map((category, index) => (
        <LinkRoute to={category.url} className="category" key={index}>
          {category.label}
        </LinkRoute>
      ))}
    </div>
  )
  const menu3 = (
    <div>
      {Resources.map((category, index) => (
        <LinkRoute to={category.url} className="category" key={index}>
          {category.label}
        </LinkRoute>
      ))}
    </div>
  )
  return (
    <div className="routesContainer">
      <div className="routes">
        <h4>Landings</h4>
        {menu1}
      </div>
      <div className="routes">
        <h4>Company</h4>
        {menu2}
      </div>
      <div className="routes">
        <h4>Resources</h4>
        {menu3}
      </div>
    </div>
  )
}
