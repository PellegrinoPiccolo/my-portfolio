import React from 'react'
import NotFoundPage from '../../components/sections/NotFoundPage'

export const metadata = ({
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: "noindex,nofollow",
})

const notFound = () => {
  return (
    <NotFoundPage />
  )
}

export default notFound