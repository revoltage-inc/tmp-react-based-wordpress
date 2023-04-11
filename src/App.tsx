import { ViewportProvider } from '@libs/provider/viewport'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'

export default function App() {
  return <ViewportProvider>{useRoutes(routes)}</ViewportProvider>
}
