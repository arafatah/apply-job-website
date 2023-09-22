import Cards from "../Cards/Cards";


const CategoryList = () => {
    return (

        <div>
            <div className="text-center mt-28">
                <p className="text-5xl font-bold mb-4">Job Category List</p>
                <p className=" text-2xl font-normal mb-9">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                <Cards></Cards>
            </div>
        </div>


    );
};

export default CategoryList;