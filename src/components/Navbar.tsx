import { LeafIcon, UserIcon } from "lucide-react"
import { Button } from "./ui/button"
import UserProfileNav from "./UserProfileNav"

const currentUser = true

const Navbar = () => {
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc border-b border-zinc-500 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2 px-4'>
        {/* LOGO */}
        <a href='/' className='flex gap-2 items-center'>
          <LeafIcon className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='hidden text-zinc-700 text-sm font-medium md:block tracking-wide'>
            My Electric Vehicle
          </p>
        </a>

        <div className='flex gap-2'>
          {!currentUser ?
            <>
              <Button className='rounded-full h-8'>Log in</Button>
              <Button className='rounded-full h-8'>Sign up</Button>
            </>
            :
            <>
              {/* <Button className='rounded-full h-8'>Logout</Button> */}
              <UserProfileNav name='raghav' email='raghavbhai4545@gmail.com' image="https://github.com/shadcn.png" />
              {/* <Button variant='outline' size='icon' className='rounded-full border-[3px] h-8 w-8' >
                <UserIcon className="h-5 w-5" />
              </Button> */}
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar