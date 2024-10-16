import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-8 md:pb-20 pt-8 md:pt-12 px-4 md:px-36 space-y-6 md:space-y-0">
                <div className="w-full md:w-1/2">
                    <img src={featuredImg} alt="Featured" className="w-full rounded-lg shadow-lg"/>
                </div>
                <div className="w-full md:w-1/2 md:ml-10 text-center md:text-left space-y-4">
                    <p className="text-sm md:text-base">Aug 20, 2029</p>
                    <p className="uppercase text-lg md:text-xl font-semibold">Where can I get some?</p>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 md:mt-6">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
