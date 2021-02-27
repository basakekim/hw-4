import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Clothes from "../components/cloth/Clothes";
import ClothesDetail from "../components/cloth/ClothesDetail";
import NotFound from "../components/base/404";

const links = [
  {
    link: "/",
    title: " HOME       ",
    component: Home,
    isExact: true,
    isLink: true
  },
  {
    link: "/Clothes",
    title: " CLOTHES        ",
    component: Clothes,
    isExact: true,
    isLink: true
  },
  {
    link: "/clothes/:clothesID",
    title: "Clothes Detail",
    component: ClothesDetail,
    isExact: false,
    isLink: false
  },
  {
    link: "/about",
    title: " ABOUT        ",
    component: About,
    isExact: true,
    isLink: true
  },
  {
    link: "/contact",
    title: " CONTACT       ",
    component: Contact,
    isExact: true,
    isLink: true
  },
  {
    link: "/404",
    title: "404",
    component: NotFound,
    isExact: false,
    isLink: false
  }
];

export default links;
