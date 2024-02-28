import { Route, Routes } from 'react-router'

import WithProtection from 'hoc/WithProtection'

import Login from 'pages/Login'
import Registration from 'pages/Registration'

import Main from 'pages/Main'
import Platform from 'pages/Platform'

import Agreements from 'pages/Agreements/Agreements'
import Confidentiality from 'pages/Agreements/Confidentiality'
import PayPolicy from 'pages/Agreements/PayPolicy'
import RiskAgree from 'pages/Agreements/RiskAgree'

import Account from 'pages/Account/Account'
import AccountVerification from 'components/account/AccountVerification/AccountVerification'
import AccountPayment from 'components/account/AccountPayment/AccountPayment'
import AdminPage from 'pages/AdminPage'


const AppRouter = () => {
  return (
    <Routes>
        <Route path = '/' element = {<Main/>}/>
        <Route path = '/platform' element = {<Platform/>}/>
        
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/registration' element = {<Registration/>}/>
        
        <Route path = '/agreements' element = {<Agreements />}/>
        <Route path = '/confidentiality' element = {<Confidentiality />} />
        <Route path = '/payPolicy' element = {<PayPolicy />} /> 
        <Route path = '/riskAgree' element = {<RiskAgree />} /> 

        <Route path="account">
          <Route path="personal" element = {<WithProtection><Account /></WithProtection>} />
          <Route path="verification" element={<WithProtection><AccountVerification /></WithProtection>}/>
          <Route path="payment" element={<WithProtection><AccountPayment /></WithProtection>}/>
        </Route>

        <Route path = '/admin' element={<AdminPage />}/>
    </Routes>
  )
}

export default AppRouter