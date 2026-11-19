import jollofRiceImage from "../assets/images/jollof-rice.jpg";
import friedRiceImage from "../assets/images/fried-rice.jpg";
import coconutRiceImage from "../assets/images/coconut-rice.jpg";
import whiteRiceImage from "../assets/images/white-rice.jpg";
import egusiSoupImage from "../assets/images/egusi-soup.jpg";
import bangaSoupImage from "../assets/images/banga-soup.jpg";
import ohaSoupImage from "../assets/images/oha-soup.jpg";
import ogbonoSoupImage from "../assets/images/ogbono-soup.jpg";
import poundedYamImage from "../assets/images/pounded-yam.jpg";
import ebaImage from "../assets/images/eba.jpg";
import fufuImage from "../assets/images/fufu.jpg";
import semovitaImage from "../assets/images/semovita.jpg";
import grilledFishImage from "../assets/images/grilled-fish.jpg";
import grilledChickenImage from "../assets/images/chicken.jpg";
import grilledTurkeyImage from "../assets/images/turkey.jpg";
import suyaImage from "../assets/images/suya.jpg";
import cowLegImage from "../assets/images/cow-leg.jpg";
import meatPieImage from "../assets/images/meat-pie.jpg";
import puffPuffImage from "../assets/images/puff-puff.jpg";
import sausageRollImage from "../assets/images/sausage-roll.jpg";
import akaraImage from "../assets/images/akara.jpg";
import zoboImage from "../assets/images/zobo.jpg";
import chapmanImage from "../assets/images/chapman.jpg";
import orangeJuiceImage from "../assets/images/orange-juice.jpg";
import waterImage from "../assets/images/bottle-water.jpg";



export const categories = [
    { id: "rice-dishes", name: "Rice Dishes" },
    { id: "soups", name: "Soups" },
    { id: "swallows", name: "Swallows" },
    { id: "grills-and-proteins", name: "Grills and Proteins"},
    { id: "snacks", name: "Snacks"},
    { id: "drinks", name: "Drinks"}
];

export const menuItems = [
    // RICE DISHES
    {
        id: "jollof-rice",
        name: "Nigerian Jollof Rice",
        category: "rice-dishes",
        description: "A popular Nigerian rice dish cooked in a rich tomato and pepper sauce with aromatic spices.",
        price: 8500,
        image: jollofRiceImage
    },
    {
        id: "fried-rice",
        name: "Nigerian Fried Rice",
        category: "rice-dishes",
        description: "Colourful rice prepared with mixed vegetables, seasoning and a delicious blend of spices.",
        price: 8500,
        image: friedRiceImage
    },
    {
        id: "coconut-rice",
        name: "Coconut Rice",
        category: "rice-dishes",
        description: "Fragrant rice cooked in coconut milk with vegetables and carefully selected spices.",
        price: 9000,
        image: coconutRiceImage
    },
    {
        id: "white-rice",
        name: "White Rice and Stew",
        category: "rice-dishes",
        description: "Fluffy steamed white rice served with freshly prepared Nigerian tomato stew.",
        price: 7000,
        image: whiteRiceImage
    },

    // SOUPS
    {
        id: "egusi-soup",
        name: "Egusi Soup",
        category: "soups",
        description: "A rich Nigerian soup made with ground melon seeds, vegetables and assorted meat.",
        price: 7500,
        image: egusiSoupImage
    },
    {
        id: "banga-soup",
        name: "Banga Soup",
        category: "soups",
        description: "A traditional Delta delicacy prepared with palm fruit extract, fresh fish and aromatic local spices.",
        price: 9000,
        image: bangaSoupImage
    },
    {
        id: "oha-soup",
        name: "Oha Soup",
        category: "soups",
        description: "A traditional Nigerian soup prepared with oha leaves, cocoyam thickener and assorted meat.",
        price: 8000,
        image: ohaSoupImage
    },
    {
        id: "ogbono-soup",
        name: "Ogbono Soup",
        category: "soups",
        description: "A delicious draw soup made with ground ogbono seeds, vegetables and assorted proteins.",
        price: 7500,
        image: ogbonoSoupImage
    },

    // SWALLOWS
    {
        id: "pounded-yam",
        name: "Pounded Yam",
        category: "swallows",
        description: "Smooth and freshly prepared pounded yam, perfect with traditional Nigerian soups.",
        price: 6000,
        image: poundedYamImage
    },
    {
        id: "eba",
        name: "Eba",
        category: "swallows",
        description: "A traditional Nigerian swallow prepared from garri and hot water.",
        price: 2500,
        image: ebaImage
    },
    {
        id: "fufu",
        name: "Fufu",
        category: "swallows",
        description: "Soft and smooth cassava-based swallow served alongside your favourite Nigerian soup.",
        price: 3000,
        image: fufuImage
    },
    {
        id: "semovita",
        name: "Semovita",
        category: "swallows",
        description: "A smooth and satisfying swallow made from semolina flour.",
        price: 3000,
        image: semovitaImage
    },

    // GRILLS AND PROTEINS
    {
        id: "grilled-fish",
        name: "Grilled Fish",
        category: "grills-and-proteins",
        description: "Fresh fish seasoned with Nigerian spices and grilled to perfection.",
        price: 12000,
        image: grilledFishImage
    },
    {
        id: "grilled-chicken",
        name: "Grilled Chicken",
        category: "grills-and-proteins",
        description: "Tender chicken marinated in a special spice blend and grilled until deliciously golden.",
        price: 10000,
        image: grilledChickenImage
    },
    {
        id: "grilled-turkey",
        name: "Grilled Turkey",
        category: "grills-and-proteins",
        description: "Juicy turkey seasoned with aromatic spices and grilled for a rich, smoky flavour.",
        price: 15000,
        image: grilledTurkeyImage
    },
    {
        id: "suya",
        name: "Nigerian Suya",
        category: "grills-and-proteins",
        description: "Thinly sliced beef coated in traditional suya spices and grilled for a smoky, spicy taste.",
        price: 5000,
        image: suyaImage
    },
    {
        id: "cow-leg",
        name: "Cow Leg",
        category: "grills-and-proteins",
        description: "Tender cow leg slowly cooked with traditional seasonings until flavourful and soft.",
        price: 2000,
        image: cowLegImage
    },

    // SNACKS
    {
        id: "meat-pie",
        name: "Meat Pie",
        category: "snacks",
        description: "A golden, flaky pastry filled with seasoned minced meat and vegetables.",
        price: 1500,
        image: meatPieImage
    },
    {
        id: "puff-puff",
        name: "Puff Puff",
        category: "snacks",
        description: "Soft, fluffy and lightly sweetened Nigerian fried dough balls.",
        price: 1000,
        image: puffPuffImage
    },
    {
        id: "sausage-roll",
        name: "Sausage Roll",
        category: "snacks",
        description: "A savoury pastry filled with seasoned sausage and baked until golden.",
        price: 1500,
        image: sausageRollImage
    },
    {
        id: "akara",
        name: "Akara",
        category: "snacks",
        description: "Crispy Nigerian bean cakes made from blended beans, peppers and onions.",
        price: 1500,
        image: akaraImage
    },

    // DRINKS
    {
        id: "zobo",
        name: "Zobo",
        category: "drinks",
        description: "A refreshing Nigerian drink made from hibiscus leaves, fruit and natural spices.",
        price: 3000,
        image: zoboImage
    },
    {
        id: "chapman",
        name: "Chapman",
        category: "drinks",
        description: "A refreshing Nigerian cocktail-style soft drink blended with fruity flavours.",
        price: 3500,
        image: chapmanImage
    },
    {
        id: "orange-juice",
        name: "Fresh Orange Juice",
        category: "drinks",
        description: "Freshly prepared orange juice with a naturally sweet and citrusy flavour.",
        price: 3000,
        image: orangeJuiceImage
    },
    {
        id: "water",
        name: "Bottled Water",
        category: "drinks",
        description: "Chilled bottled drinking water.",
        price: 1000,
        image: waterImage
    }
];