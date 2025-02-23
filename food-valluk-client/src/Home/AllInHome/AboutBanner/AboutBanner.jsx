const AboutBanner = ({ image, title, description }) => {
    return (
        <div className="w-full p-[3vw]">
            <div className='relative flex w-full items-center'>
                <img className="w-full" src={image} alt="" />
                <div className="absolute flex flex-col items-center justify-center  p-10 text-center">
                    <div className='bg-black/60 p-[3vw] backdrop-blur'>
                        <h1 className="text-[3vw] font-bold text-[#c38c66] mb-4">{title}</h1>
                        <p className='text-[1vw] text-white'>{description}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AboutBanner;