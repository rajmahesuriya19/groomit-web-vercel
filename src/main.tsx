import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import ErrorBoundaryProvider from './contexts/errorBoundary'
import { LoaderProvider } from './contexts/loaderContext/LoaderContext'
import GlobalLoader from './common/loader/GlobalLoader'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './utils/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { HelmetProvider } from 'react-helmet-async'

const isMobile = window.matchMedia('(max-width: 767px)').matches

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element not found')

createRoot(rootEl).render(
  <HelmetProvider>
    <ErrorBoundaryProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LoaderProvider>
            <GlobalLoader />
            <App />

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
              pauseOnFocusLoss
              theme="colored"
              style={{
                width: isMobile ? '90vw' : 'auto',
                maxWidth: '400px',
              }}
            />
          </LoaderProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundaryProvider>
  </HelmetProvider>
)
