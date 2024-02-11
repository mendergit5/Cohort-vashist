import './App.css'

function App() {
  return (
    <>
    <main className='p-3 sm:p-8 w-full gap-8 flex flex-col'>
    <div className='flex flex-wrap gap-5'>
      <CardComponent ordervalue="2,312.23" ordercount={"23"}paymentdate={"Today, 4:00PM"}></CardComponent>
      <CardComponent></CardComponent>
    </div>
    </main>
    </>
  )
}

// eslint-disable-next-line react/prop-types
function CardComponent({ordervalue, ordercount, paymentdate}){
  return <>
  <div className='rounded-[8px] flex-grow hover:bg-[#0E4F82] bg-[#146EB4] text-white min-w-[300px]'>
    <div className='flex items-center p-4'>
      <div>Next Payout </div>
      <div className='px-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
</div>
    </div>
    <div className='flex justify-between px-4 pb-2 ' >
      <div className='text-2xl flex'><span>&#8377;</span>{ordervalue}</div>
      <div className='underline flex'>{ordercount} Orders<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 m-0.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
 </div>
    </div>
    <div className='bg-blue-800 rounded-md'>
      <div className='flex py-2 px-4 justify-between'>
        <div>NextPayment Date:</div>
        <div>{paymentdate}</div>
      </div>
    </div>
  </div>
  </>

}



export default App
