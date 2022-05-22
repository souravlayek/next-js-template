import { ReduxWrapper } from 'Application'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxWrapper>
      <Component {...pageProps} />
    </ReduxWrapper>
  )
}

export default App
