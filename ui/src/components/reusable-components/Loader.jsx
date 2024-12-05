import { Spinner } from 'flowbite-react'
import React from 'react'

const Loader = () => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-50'>
            <div className="text-center">
                <Spinner aria-label="Center-aligned spinner example" />
            </div>
        </div >
  )
}

export default Loader