import React ,{useEffect, useState}from 'react'


function Github() {

    const [data , setdata] = useState([])
useEffect(()=>{
    
    fetch('https://api.github.com/users/Dev-mannan')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

        setdata(data)
        
        
    })

},[])

  return (

    <div className='text-3xl text-center bg-gray-600 text-white p8'>Github Followers :{data.followers} 
    <img className='' src="{data.avatar_url}" alt="Github Avatar" width={300} />
    
    </div>
   
  )
}

export default Github