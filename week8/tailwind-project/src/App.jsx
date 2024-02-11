import './App.css'

function App() {

  return (
    <>
      <div>Flex Example :</div>
      <div className="flex justify-between">
        <div className='bg-blue-500'>Home</div>
        <div className='bg-red-500'>AboutUs</div>
        <div className='bg-pink-500'>ContactUs</div>
      </div>

      {/* grid example */}
      <div>Grid Example for Equal width :</div>
      <div className='grid grid-cols-3'>
        <div className='bg-blue-500'>Home</div>
        <div className='bg-red-500'>AboutUs</div>
        <div className='bg-pink-500'>ContactUs</div>
      </div>

      <div>Grid Example for Unequal width :</div>
      <div className='grid grid-cols-10'>
        <div className='col-span-4 bg-blue-500'>Home</div>
        <div className='col-span-4 bg-red-500'>AboutUs</div>
        <div className='col-span-2 bg-pink-500'>ContactUs</div>
      </div>
      <div>Flex Example with unequal width:</div>
      <div className="flex">
        <div className='w-[20%] bg-blue-500'>Home</div>
        <div className='w-[40%] bg-red-500'>AboutUs</div>
        <div className='w-[40%] bg-pink-500'>ContactUs</div>
      </div>

      {/* {Adding responsiveness} */}
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className='bg-blue-500'>Home</div>
        <div className='bg-red-500'>AboutUs</div>
        <div className='bg-pink-500'>ContactUs</div>
      </div>

    </>
  )
}

export default App
