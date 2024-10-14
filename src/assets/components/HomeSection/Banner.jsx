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
        <div className="pt-10 mx-auto px-[5%] dark:bg-gray-600">
            <div ref={sliderRef} className="keen-slider h-[80vh] relative">
                <div className="keen-slider__slide number-slide1"></div>
                <div className="keen-slider__slide number-slide2"></div>
                <div className="keen-slider__slide number-slide3"></div>
                <div className="keen-slider__slide number-slide4"></div>
                <div className="hero-overlay bg-opacity-30 h-[80vh]  w-[100vw] absolute top-0 flex justify-center items-center flex-col gap-3">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            x: { type: "spring", stiffness: 600 },
                            opacity: { duration: 2 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className="dark:border-l-[#378CE7] border-l-[#80f762] border-l-4 w-[80%] px-2 b">
                        <h3 className="text-start lg:text-6xl text-4xl md:text-5xl text-white">HUNT WORLD CLASS <br />JOB <br /><span className="dark:text-[#378CE7] text-[#80f762]">WITH US</span></h3>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;