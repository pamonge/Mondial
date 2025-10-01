import { Routes, Route } from 'react-router-dom'
import './App.css'
import appStyles from './styles/appStyles'
import { NavBarComponent } from './components/NavBarComponent'
import { HomePage } from './pages/HomePage'
import { BuyPage } from './pages/BuyPage'
import { SellPage } from './pages/SellPage'
import { ContactPage } from './pages/ContactPage'
import { NewsPage } from './pages/NewsPage'
import { RentPage } from './pages/RentPage'
import { UsPage } from './pages/UsPage'
import { FooterComponent } from './components/FooterComponent'
import { CopyRightComponent } from './components/CopyRightComponent'
import { CookiesPage } from './pages/CookiesPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { LegalAdvicePage } from './pages/LegalAdvicePage'

function App() {
    return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/buy' element={ <BuyPage /> } />
        <Route path='/sell' element={ <SellPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
        <Route path='/news' element={ <NewsPage /> } />
        <Route path='/rent' element={ <RentPage /> } />
        <Route path='/us' element={ <UsPage /> } />
        <Route path='/cookies' element={ <CookiesPage /> } />
        <Route path='/cookies' element={ <CookiesPage /> } />
        <Route path='/privacy' element={ <PrivacyPolicyPage /> } />
        <Route path='/legal' element={ <LegalAdvicePage /> } />
      </Routes>
      <FooterComponent />
      <CopyRightComponent />
    </>
  )
}

export default App
