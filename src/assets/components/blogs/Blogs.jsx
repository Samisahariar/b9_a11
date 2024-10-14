import { motion } from "framer-motion";


const Blogs = () => {
    return (

        <div className="px-[10%] flex flex-col gap-10 dark:bg-gray-600">
            <motion.div whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }} className="dark:bg-gray-700 text-black dark:text-white hero min-h-[50vh] bg-base-200 rounded-xl cursor-pointer">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/3h3fz8g/premium-photo-1671306963320-c368eacbd44f-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-semibold">What is an access token and refresh token and <br /> how does all thigs works?</h1>
                        <p className="py-2 text-xs">An access token is a credential used by an application to access resources on behalf of a user. It is usually short-lived, valid for a limited period of time (often minutes or hours), and grants specific permissions to access certain resources or perform certain actions. Once the access token expires, it becomes invalid and cannot be used anymore.</p>
                        <p className="py-2 text-xs">A refresh token is a long-lived credential that is used to obtain a new access token once the current access token expires. Unlike access tokens, refresh tokens are typically kept secret and stored securely on the client side. They are used to obtain fresh access tokens without requiring the user to log in again.</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }} className="hero min-h-[50vh] bg-base-200 rounded-xl  dark:bg-gray-700 dark:text-white">
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
            <motion.div whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }} className="hero min-h-[50vh] bg-base-200 rounded-xl  dark:bg-gray-700 dark:text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-2xl font-semibold">About This project!!</h1>
                        <p className="py-2 text-xs">Homepage:
Upon landing on the homepage of JobQuest, users are greeted with a clean and intuitive interface. The homepage features a search bar prominently placed at the center, inviting users to enter keywords, job titles, or specific criteria to begin their job hunt. Beneath the search bar, there are curated job categories and featured listings to provide inspiration and quick access to popular job sectors.
<br />
<br />
Search Functionality:
JobQuest boasts powerful search functionality, allowing users to tailor their search criteria based on various parameters such as location, industry, salary range, and job type (full-time, part-time, remote, etc.). Advanced filters enable users to refine their search results further, ensuring they only see jobs that match their preferences.
<br />
<br />
Job Listings:
The heart of JobQuest lies in its extensive database of job listings sourced from reputable companies and organizations worldwide. Each job listing is presented in a clear and concise format, featuring essential details such as job title, company name, location, salary, and application deadline. Users can click on any listing to view comprehensive job descriptions, requirements, and application instructions.
<br />
<br />

Personalized Recommendations:
JobQuest goes the extra mile to personalize the job search experience for every user. By leveraging advanced algorithms and machine learning techniques, the website analyzes user preferences, browsing history, and application behavior to deliver tailored job recommendations. These recommendations help users discover relevant opportunities they might have otherwise overlooked.
<br />
<br />
User Profiles:
To streamline the job application process, JobQuest offers users the option to create personalized profiles. Users can upload their resumes, highlight their skills and experiences, and set their job preferences within their profiles. Employers can also view these profiles when considering candidates, enhancing the chances of successful matches.
<br />
<br />

Job Alerts:
Never miss out on a promising opportunity with JobQuests job alert feature. Users can set up custom alerts based on their preferred criteria, such as job title, location, or industry. JobQuest will then notify users via email or push notifications whenever new jobs matching their criteria are posted, ensuring they stay informed and proactive in their job search.
<br />
<br />
Career Resources:
In addition to job listings, JobQuest offers a wealth of resources to support users throughout their job search journey. From resume writing tips and interview strategies to career development guides and industry insights, the website equips users with the knowledge and tools they need to succeed in todays competitive job market.</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </motion.div>
            
            
        </div>

    );
};

export default Blogs;