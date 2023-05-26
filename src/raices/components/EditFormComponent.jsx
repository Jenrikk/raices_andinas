import React from 'react'
import { useParams } from 'react-router-dom'

export const EditFormComponent = () => {

    const {entryId} = useParams();

    // useEffect which execute thunk

  return (
    <div>EditFormComponentt</div>
  )
}
