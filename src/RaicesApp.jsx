import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
import { ConfirmProvider } from 'material-ui-confirm'

export const RaicesApp = () => {
  return (
    <AppTheme>
      <ConfirmProvider>
        <AppRouter />
      </ConfirmProvider>
    </AppTheme>
  )
}
