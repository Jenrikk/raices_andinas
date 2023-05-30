import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { startLoadingEntryForUpdate } from '../../store/entries/thunks';
import { TextField, Typography } from '@mui/material';

export const EditFormComponent = () => {
  const { entryId } = useParams();

  const dispatch = useDispatch();

  const { entryForEdition } = useSelector(state => state.entries);
  console.log(entryForEdition);
  


  // useEffect which execute thunk
  useEffect(() => {

    dispatch(startLoadingEntryForUpdate(entryId));
  }, [])

  if(entryForEdition === undefined){
    return <Typography variant='h4' sx={{m: 2}}>No se pudo encontrar la entrada</Typography>
  }

  return (
    <div>EditFormComponentt</div>
  )
}
