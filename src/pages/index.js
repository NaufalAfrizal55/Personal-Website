import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[url('../img/space.jpg')] bg-cover pb-[30px] h-[100vh]">
      <div className='w-[90%] m-auto h-[100%]'>
        <div className="flex md:justify-center py-[110px] h-[100%] m-auto">
          <h1 className='md:text-[80px] flex items-center'>Hello. Welcome to my Web</h1>
        </div>
      </div>
    </div>
  )
}
