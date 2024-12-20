const SectionHeader = ({time, mainTitle}) => {
    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="text-[#c38c66] p-2">---{time}---</h1>
            <h1 className="text-3xl p-2 font-bold text-white border-y-2 border-[#c38c66]">{mainTitle}</h1>
        </div>
    );
};

export default SectionHeader;