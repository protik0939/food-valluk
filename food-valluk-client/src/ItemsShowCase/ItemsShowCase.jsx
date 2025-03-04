const ItemsShowCase = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex w-[40%] sm:w-[100%] p-10">
                
            <div className="flex sm:flex-col space-x-4 justify-center items-center">
                <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[30%]" src={image} alt="" />
                <div>
                    <h1 className="font-bold text-white uppercase">{name}</h1>
                    <h1 className="text-white">{recipe}</h1>
                </div>
                <h1 className="text-2xl font-bold text-[#c38c66]">{price}$</h1>
            </div>
        </div>
    );
};

export default ItemsShowCase;