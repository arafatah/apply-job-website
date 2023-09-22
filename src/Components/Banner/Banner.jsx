import mainImage from '../../assets/images/user.png';
const Banner = () => {
    return (
        <div className='container mx-auto'>
        <div className='flex justify-center items-center'>
            <div>
                <p className='text-7xl font-extrabold my-6'>One Step Closer To Your Dream Job</p>
                <p className='text-2xl font-medium my-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='px-7 py-5 bg-indigo-600 text-white font-extrabold text-2xl rounded-md'>Get started</button>
            </div>
            <div>
             <img className='w-full' src={mainImage} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;