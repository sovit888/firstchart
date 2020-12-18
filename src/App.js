import React from 'react'
import Layout from "./components/Layout"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {routes} from "./routes/index";

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Layout>
 <Switch>
   {routes.map((value,index)=>{
     return <Route exact path={value.path} component={value.component} key={index}/>
   })}
 </Switch>
   </Layout>
   </BrowserRouter>
   </>
  )
}

export default App
