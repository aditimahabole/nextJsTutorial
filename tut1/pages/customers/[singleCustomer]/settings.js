import React from 'react'
import { useRouter } from 'next/router';

const settings = () => {
    const router = useRouter();
    console.log("Customer Router is : ",router)
    console.log("Customer Router.query is : ",router.query)
    console.log("Router.query.singleCustomer is : ",router.query.singleCustomer)
    const customer = router.query.singleCustomer
  return (
    <div> This is cutomer/{customer}/settings</div>
  )
}

export default settings