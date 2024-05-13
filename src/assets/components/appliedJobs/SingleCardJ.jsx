import { FaDollarSign } from "react-icons/fa6";
import { MdOutlineEmojiPeople } from "react-icons/md";




const SingleCardJ = ({ singleCard }) => {

    const { photo, jobtitle, salary, deadline, applicantnumber, description, applicant_email } = singleCard


    return (
        <div>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobtitle}</h5>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{description.slice(1, 100)}</p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <FaDollarSign />
                            <span>{salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdOutlineEmojiPeople />
                            <span>{applicantnumber}</span>
                        </div>

                    </div>
                    <div className="flex text-xs font-semibold">
                        <div className="flex gap-5">
                            <span>Dead-Line : {deadline} </span>
                            <span>Posting-Date : </span>
                        </div>
                    </div>
                </div>
            </a>

        </div>

    );
};

export default SingleCardJ;