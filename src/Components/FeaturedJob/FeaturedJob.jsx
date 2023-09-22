import { MdOutlineLocationOn } from "react-icons/md";
import { BiDollar } from "react-icons/bi";

const FeaturedJob = ({ featuredjob }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = featuredjob;

    return (
        <div>
            <div className=" bg-base-100 border ">
                <figure><img className="mt-5 ml-8" src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="mb-4">{company_name}</p>
                    <div className="mb-3">
                        <button className="border text-indigo-400 px-5 py-2 rounded mr-4">{remote_or_onsite}</button>
                        <button className="border text-indigo-400 px-5 py-2 rounded">{job_type}</button>
                    </div>
                    <div className="flex mb-4">
                        <div className="flex mr-6">
                            <p className="text-2xl"><MdOutlineLocationOn></MdOutlineLocationOn></p>
                            <p className="">{location}</p>
                        </div>

                        <div className="flex">
                            <p className="text-2xl"><BiDollar></BiDollar></p>
                            <p>{salary}</p>
                        </div>

                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;