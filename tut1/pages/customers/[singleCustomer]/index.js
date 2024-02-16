import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
// router.replace does not create a history in browser
// const useCustomer = ()=>({
//     customer:null,
//     loading:false,
// })
// if user does not exist then when we go on route it gets directed to home page only

const useCustomer = ()=>({
    customer:{name:"molly"},
    loading:false,
})
const index = () => {
    const router = useRouter();
    const customer = useCustomer();
    useEffect(() => {
        if(customer.name == null)
        {
            router.replace(`/`)
        }
        
    }, [router,customer.name]);
  return (
    <div>
        <h1>Hello {router.query.singleCustomer} </h1>
        <button onClick={()=>router.push(`${router.query.singleCustomer}/settings`)} >Go to settings</button>
        <button onClick={()=>router.replace(`/`)}>Go to Home</button>
       
    </div>
  )
}

export default index