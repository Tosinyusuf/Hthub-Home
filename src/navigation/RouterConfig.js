import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout'
import { BUSINESS_HOME } from './CONSTANTS'
import { Home, NotFound } from '../pages/index'

export const RouterConfig = () => {
  return (
    <Routes>
      {/* List of all public routes here */}

      <Route
        exact
        path={BUSINESS_HOME}
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* List a generic 404-Not Found route here */}
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  )
}
