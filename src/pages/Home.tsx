import { Button } from '@/components/ui/button'
import { useStore } from '@/contexts/ContextApi'
import { FC, useState } from 'react'

interface HomeProps {
  
}

const Home: FC<HomeProps> = ({}) => {
  const [count, setCount] = useState(0)
  const { geoLoc } = useStore()
  return (
    <div className="p-4">
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <p>Lat: {geoLoc.lat}</p>
      <p>Lng: {geoLoc.lng}</p>
    </div>
  )
}

export default Home