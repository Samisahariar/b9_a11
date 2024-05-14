import { useParams } from "react-router-dom";

const Update = () => {

    const id = useParams()


    return (
        <div>
            this is update page and the {id}
        </div>
    );
};

export default Update;