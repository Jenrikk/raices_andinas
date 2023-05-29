import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { startLoadingEntryForUpdate } from '../../store/entries/thunks';

export const EditFormComponent = () => {
  const { entryId } = useParams();

  const dispatch = useDispatch();

  const { entryForEdition } = useSelector(state => state.entries);
  console.log(entryForEdition);


  // useEffect which execute thunk
  useEffect(() => {

    dispatch(startLoadingEntryForUpdate(entryId));

  }, [])


  return (
    <div>EditFormComponentt</div>
  )
}
