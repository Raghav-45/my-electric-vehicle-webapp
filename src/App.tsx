import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div className="p-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </Layout>
  )
}

export default App
