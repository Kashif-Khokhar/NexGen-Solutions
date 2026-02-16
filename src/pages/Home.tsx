import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Contact />
        </>
    )
}

export default Home
