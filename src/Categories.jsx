import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
  {
    id: 1,
    name: "All",
    image: <TiThSmallOutline />,
  },
  {
    id: 2,
    name: "breakfast",
    image: <MdOutlineFreeBreakfast />,
  },
  {
    id: 3,
    name: "soups",
    image: <TbSoup />,
  },
  {
    id: 4,
    name: "pasta",
    image: <CiBowlNoodles />,
  },
  {
    id: 5,
    name: "main_course",
    image: <MdOutlineFoodBank />,
  },
  {
    id: 6,
    name: "pizza",
    image: <GiFullPizza />,
  },
  {
    id: 7,
    name: "burger",
    image: <GiHamburger />,
  },
];
export default Categories;
