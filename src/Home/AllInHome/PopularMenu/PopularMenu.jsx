import { useEffect, useState } from "react";
import SectionHeader from "../../../SectionHeader/SectionHeader";
import ItemsShowCase from "../../../ItemsShowCase/ItemsShowCase";
import InteractionButton from "../InteractionButton/InteractionButton";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(x => x.category === 'popular')
                setMenu(popularItems);
            })
    }, [])

    return (
        <div className="">
            <SectionHeader time={'Chill fun foorti'} mainTitle={"Popular Items"} />
            <div className="flex w-full flex-wrap justify-center">
            {
                menu.map(item => <ItemsShowCase key={item._id} item={item} />)
            }
            </div>
            <InteractionButton text={"See All"}></InteractionButton>
        </div>
    );
};

export default PopularMenu;