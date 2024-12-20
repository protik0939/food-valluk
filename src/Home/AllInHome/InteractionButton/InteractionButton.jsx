const InteractionButton = ({ text }) => {
    return (
        <div className="w-full flex items-center justify-center mt-10">
            <div className="cursor-pointer hover:scale-110 text-white hover:text-[#c38c66] transition duration-150 ease-in-out">
                <h1 style={{borderWidth: '0px 0px 2px 0px', borderColor: '#c38c66'}} className="w-auto px-5 p-2 rounded-[7px]">{text}</h1>
            </div>
        </div>
    );
};

export default InteractionButton;