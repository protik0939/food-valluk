import SectionHeader from "../SectionHeader/SectionHeader";
import AboutBanner from "./AllInHome/AboutBanner/AboutBanner";
import Banner from "./AllInHome/Banner/Banner";
import Category from "./AllInHome/Banner/Category";
import PopularMenu from "./AllInHome/PopularMenu/PopularMenu";
import bigImage from '../assets/bigImage.webp'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionHeader time={"From 6:00AM to 10:00PM"} mainTitle={"Order now"}></SectionHeader>
            <Category></Category>
            <AboutBanner image={bigImage} title={'Food Valluk'} description={'Food Valluk is a dynamic food delivery company dedicated to bringing delicious meals right to your doorstep. Whether you\'re craving a quick snack or a full-course meal, Food Valluk makes ordering easy and convenient through our user-friendly website. We pride ourselves on delivering fresh, high-quality food from your favorite local restaurants, ensuring that every order meets our high standards of taste and satisfaction. With a commitment to excellent service and prompt delivery, Food Valluk is your trusted partner for enjoying great food in the comfort of your home.'}></AboutBanner>
            <PopularMenu></PopularMenu>
            <div className="w-full p-4 my-20">
                <div className="flex p-20 items-center justify-center w-full h-[100px] bg-[#2d180d]">
                    <h2 className="font-bold text-white text-[3vw]">Call Us - 01822938474</h2>
                </div>
            </div>
            <SectionHeader time={"Don't miss them"} mainTitle={"Chef Recommend"}></SectionHeader>
            
        </div>
    );
};

export default Home;