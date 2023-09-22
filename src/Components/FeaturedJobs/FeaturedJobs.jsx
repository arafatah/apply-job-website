import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-28">
                <p className="text-5xl font-bold mb-4">Featured Jobs</p>
                <p className=" text-2xl font-normal mb-9">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    jobs.slice(0, dataLength).map(featuredjob => <FeaturedJob key={featuredjob.id} featuredjob={featuredjob}></FeaturedJob>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <div className="flex justify-center items-center my-3">
            <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn btn-primary ">Show All Jobs</button>
                    </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;