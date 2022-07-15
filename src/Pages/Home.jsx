import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Featured from '../Components/Featured'
import About from '../Components/About'
import Gallery from '../Components/Gallery'
import Footer from '../Components/Footer'
import '../Styles/Home.scss'
import BottomMenu from '../Components/BottomMenu'

const Home = () => {
    const [preloader, setPreloader] = useState(true)
    const [timer, setTimer] = useState(5)
    const id = useRef(null)

    const clear = () => {
        window.clearInterval(id.current)
        setPreloader(false)
    }

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((timer) => timer - 1)
        }, 1000)
    }, [])

    useEffect(() => {
        if (timer === 1) {
            clear()
        }
    }, [timer])

    return (
        <>
            {
                preloader ? (
                    <div className="loader-wrapper absolute" >
                        <h1>RacconTrash 3D</h1>
                        <h2>La Paz</h2>
                    </div>
                ) :
                    (
                        <>
                            <div className='main-container' id='main-container'>
                                <Header />
                                <Featured />
                                <About />
                                <Gallery />
                                <Footer />
                            </div>
                            <BottomMenu />
                        </>
                    )
            }
        </>
    )
}

export default Home