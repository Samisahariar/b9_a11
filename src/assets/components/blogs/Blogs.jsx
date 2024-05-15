import { motion } from "framer-motion";


const Blogs = () => {
    return (

        <div className="px-[10%] flex flex-col gap-10">
            <motion.div whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }} className="hero min-h-[50vh] bg-base-200 rounded-xl cursor-pointer">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/3h3fz8g/premium-photo-1671306963320-c368eacbd44f-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-semibold">What is an access token and refresh token and <br /> how does all thigs works?</h1>
                        <p className="py-2 text-xs">An access token is a credential used by an application to access resources on behalf of a user. It is usually short-lived, valid for a limited period of time (often minutes or hours), and grants specific permissions to access certain resources or perform certain actions. Once the access token expires, it becomes invalid and cannot be used anymore.</p>
                        <p className="py-2 text-xs">A refresh token is a long-lived credential that is used to obtain a new access token once the current access token expires. Unlike access tokens, refresh tokens are typically kept secret and stored securely on the client side. They are used to obtain fresh access tokens without requiring the user to log in again.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }} className="hero min-h-[50vh] bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/J2CTMKh/photo-1555949963-aa79dcee981c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-semibold">What is express js and Nest JS?</h1>
                        <p className="py-2 text-xs">Express.js is a popular and minimalist web application framework for Node.js, designed to build web applications and APIs quickly and easily. It provides a robust set of features for building web servers and handling HTTP requests and responses</p>
                        <p className="py-2 text-xs">NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and heavily inspired by Angular, leveraging concepts such as decorators, dependency injection, and modular architecture</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </motion.div>
            
            
        </div>

    );
};

export default Blogs;