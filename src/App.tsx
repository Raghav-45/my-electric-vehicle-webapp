import Layout from './components/Layout'
import ContextProvider from './contexts/ContextApi'
import Home from './pages/Home'

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Home />
      </Layout>
    </ContextProvider>
  )
}

export default App
