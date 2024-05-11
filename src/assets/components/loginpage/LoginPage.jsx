import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../../../App.css"
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthCon } from "../authcontext/AuthContext";

const LoginPage = () => {
    const { signIn, setUser } = useContext(AuthCon);
    const navigate = useNavigate();
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

    const handleTheLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const checked = form.checkbox.checked;
        if (checked) {
            signIn(email, password)
                .then(res => {
                    setUser(res.user);
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "Login Successfull!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
        }
    }


    const tothemain = () => {
        navigate('/main/home')
    }
    const totheregister = () => {
        navigate('/register')
    }



    return (
        <div ref={sliderRef} className="keen-slider h-[100vh] relative w-[90%] mx-auto">
            <div className="keen-slider__slide number-slide1"></div>
            <div className="keen-slider__slide number-slide2"></div>
            <div className="keen-slider__slide number-slide3"></div>
            <div className="keen-slider__slide number-slide4"></div>
            <div className="hero-overlay bg-opacity-30 h-[100vh]  w-[100vw] absolute top-0 flex items-centergap-3 items-center justify-between px-[10%]">
                <div className="bg_glossy w-[35%] p-4 rounded-xl h-[70vh] space-y-2">
                    <div className="space-y-1">
                        <h3 className="text-4xl text-white">LOG-IN</h3>
                        <hr className="w-[20%] border-2 border-green-400" />
                    </div>
                    <form className=" mx-auto" onSubmit={handleTheLogin}>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </span>
                                <input name="email" type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input name="password" type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="flex items-start mb-2">
                            <div className="flex items-center h-5">
                                <input name="checkbox" id="terms" type="checkbox" value="checked" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div>
                        <div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Are You New To The Site ?<a onClick={totheregister} className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">Register</a></label>
                        </div>
                        <button type="submit" className="text-black bg-green-400 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-blue-800">Login</button>
                    </form>
                </div>
                <div>
                    <h3 className="lg:text-6xl text-4xl md:text-5xl text-white text-center tracking-widest animate__animated animate__fadeInUp font-tita"><span className="text-green-400"><Typewriter words={["EXPLORE"]} loop={false} /></span>
                        <br />New Jobs<span className="text-[#FF204E] dark:text-[#378CE7]"></span></h3>
                    <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={tothemain}>Start The Journey</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;