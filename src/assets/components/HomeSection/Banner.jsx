import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../../../App.css"
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"


const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            }
        ]
    )



    return (
        <>
            <div ref={sliderRef} className="keen-slider h-[80vh] relative w-[80vw]">
                <div className="keen-slider__slide number-slide1"></div>
                <div className="keen-slider__slide number-slide2"></div>
                <div className="keen-slider__slide number-slide3"></div>
                <div className="keen-slider__slide number-slide4"></div>
                <div className="hero-overlay bg-opacity-30 h-[80vh]  w-[100vw] absolute top-0 flex justify-center items-center flex-col gap-3">
                    <motion.h3 className="lg:text-6xl text-4xl md:text-5xl text-white text-center tracking-widest animate__animated animate__fadeInUp font-tita">Jute And
                        <br />wooden <span className="text-[#FF204E] dark:text-[#378CE7]"><Typewriter words={["Craft"]} /></span></motion.h3>
                </div>
            </div>
        </>
    );
};

export default Banner;