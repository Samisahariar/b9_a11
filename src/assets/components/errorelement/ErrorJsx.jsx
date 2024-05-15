import { Link } from "react-router-dom";


const ErrorJsx = () => {

    return (
        <div className="flex justify-center items-center">
            <h3 className="text-6xl font-semibold">404 : Not Found Error</h3>
            <Link className="btn btn-primary" to="/">Go Back</Link>
        </div>
    );
};

export default ErrorJsx;