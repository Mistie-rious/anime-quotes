import { useEffect, useState } from 'react'



function App() {
  const [fetchedQuote, setFetchedQuote] = useState(null)
  const [title, setTitle] = useState("")



    const fetchData = async () => {
      try {
        const response = await fetch('https://animechan.xyz/api/random');
        const quote = await response.json();
        setFetchedQuote(quote);
        console.log(quote);
      } catch (error) {
        console.error('Oops:', error);
      }
    };


    
      const searchByTitle = async (e) => {
        e.preventDefault()
        try {
          const response = await fetch(`https://animechan.xyz/api/random/anime?title=${title}`)
          const quote = await response.json();
          setFetchedQuote(quote);
          console.log(quote);
        } catch (error) {
          console.error('Oops:', error);
        }
        setTitle("")
      };




 
  


  return (
    <>
  <div className='flex max-sm:flex-col max-sm:space-y-6 font-Inter bg-[#2B3D6B] min-h-screen max-h-fit'>
    <div className='flex w-1/2  flex-col max-sm:w-full items-center space-y-8 pt-3   text-[27px] '>
      <div className='text-white'>
      <div className=' font-semibold '>
    Anime Quote Generator
   </div>
   <div className=' text-center  text-[19px] '>
    Feeling out of touch?
   </div>
   <div className='text-center  text-[15px]'>You'll feel better after a quote!</div>

   </div>
   <div className='space-y-3 flex flex-col items-center'>
    <div>
    <div  className='text-[15px] text-white '>Search by anime name</div>
   <form onSubmit={searchByTitle}>
    <input 

    type='text' 
    placeholder='Search...' 
    value={title} 
    onChange={(e) => setTitle(e.target.value)} 
    className='text-[15px] focus:outline-none py-2 px-2 rounded-md'>
    
    </input>
   </form>
   </div>
 
   <div className='text-white text-center text-[15px]'>or</div>

  
   <button onClick={fetchData} className='transition ease-in-out delay-50 bg-[#375b8ac5] hover:bg-[#243f63c5]  text-white font-semiboldbold text-[15px] w-fit px-[16px] rounded-md py-2'>Generate a random quote</button>

   </div>
   { fetchedQuote ? 
   
   <div className=' bg-transparent px-4 text-[15px] text-white text-center py-3 rounded-2xl space-y-2 w-1/2 mb-4 '>
   
 
  
   <div className='font-semibold' >{fetchedQuote.quote}
    </div>
    <div> By {fetchedQuote.character} </div>
    <div>From  {fetchedQuote.anime}</div>
   
  
   </div>
   
   : <></>}
   </div>
   <div className='w-1/2 max-sm:bg-mobile  max-sm:w-full bg-background bg-cover min-h-screen'></div>
   </div>
    </>
  )
}

export default App
