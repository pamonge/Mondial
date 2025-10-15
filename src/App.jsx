import { Routes, Route } from 'react-router-dom'
import './App.css'
import appStyles from './styles/appStyles'
import { NavBarComponent } from './components/navigation/NavBarComponent'
import { HomePage } from './pages/HomePage'
import { BuyPage } from './pages/BuyPage'
import { SellPage } from './pages/SellPage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { RentPage } from './pages/RentPage'
import { UsPage } from './pages/UsPage'
import { FooterComponent } from './components/footer/FooterComponent'
import { CopyRightComponent } from './components/footer/CopyRightComponent'
import { CookiesPage } from './pages/CookiesPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { LegalAdvicePage } from './pages/LegalAdvicePage'
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage'
import { Error404 } from './pages/Error404'

function App() {
    return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/buy' element={ <BuyPage /> } />
        <Route path='/sell' element={ <SellPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
        <Route path='/blog' element={ <BlogPage /> } />
        <Route path='/rent' element={ <RentPage /> } />
        <Route path='/us' element={ <UsPage /> } />
        <Route path='/cookies' element={ <CookiesPage /> } />
        <Route path='/tyc' element={ <TermsAndConditionsPage /> } />
        <Route path='/privacy' element={ <PrivacyPolicyPage /> } />
        <Route path='/legal' element={ <LegalAdvicePage /> } />
        <Route path='/*' element={ <Error404 /> } />
      </Routes>
      <FooterComponent />
      <CopyRightComponent />
    </>
  )
}

export default App
