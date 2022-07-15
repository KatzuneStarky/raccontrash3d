import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function useLocationScroll(start) {
    useEffect(() => {
        if(!start) return;

        const scrollEL = document.querySelector('#main-container')
        const locoScroll = new LocomotiveScroll({
            el: scrollEL,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        })
    }, [start])
}