import React from 'react'
import NotFoundPage from '../../components/NotFoundPage'

export const metadata = ({
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
})

const notFound = () => {
  return (
    <NotFoundPage />
  )
}

export default notFound