import React from 'react'
import AuthButton from '../../../components/AuthButton'

export const Auth = () => {
  return (
    <div>
      <AuthButton type="submit" text={'Login'} className={'login'} />
    </div>
  )
}
