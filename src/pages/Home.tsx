import { Button } from '@/components/ui/button'
import { FC, useState } from 'react'

interface HomeProps {
  
}

const Home: FC<HomeProps> = ({}) => {
  const [count, setCount] = useState(0)
  return (
    <div className="p-4">
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  )
}

export default Home