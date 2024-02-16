import React from 'react'
import {useRouter} from 'next/router'
//  We are learning how to make a dynamic route
// first create a file with square brackets [id].js or [name].js or [email].js or [userkanaam].js
// then to get from routes whatever we entered use useRouter Hook
// Inside that we have a query property that contains our data
// like if our file name is [id].js then query contains {"id":1243}
// if is is [name].js then query contains {"name":"whatever name we entered"}
const DynamicRouteExample= () => {
    const router = useRouter();
    console.log("Router is : ",router)
    console.log("Router.query is : ",router.query)
    console.log("Router.query.name is : ",router.query.name)
  return (
    <div>User Name is : {router.query.name} </div>
  )
}

export default DynamicRouteExample