import Pillow1 from "/others/pr1.1.jpg";
import Pillow2 from "/others/pr1.2.jpg";
import Bag1 from "/others/pr2.1.jpg";
import Bag2 from "/others/pr2.2.jpg";
import Pad1 from "/others/pr3.1.jpg";
import Pad2 from "/others/pr3.2.jpg";
import WaterProof1 from "/others/pr4.1.jpg";
import WaterProof2 from "/others/pr4.2.jpg";
import LaundryBag1 from "/others/pr5.1.jpg";
import LaundryBag2 from "/others/pr5.2.jpg";
import Cabinet1 from "/others/pr6.1.jpg";
import Cabinet2 from "/others/pr6.2.jpg";
import Chair1 from "/others/pr7.1.jpg";
import Chair2 from "/others/pr7.2.jpg";
import ChairGray1 from "/others/pr8.1.jpg";
import ChairGray2 from "/others/pr8.2.jpg";
import MiniChair1 from "/others/pr9.1.jpg";
import MiniChair2 from "/others/pr9.2.jpg";
import Lamp1 from "/others/pr10.1.jpg";
import Lamp2 from "/others/pr10.2.jpg";
import Headset1 from "/others/pr11.1.jpg";
import Headset2 from "/others/pr11.2.jpg";
import Oven1 from "/others/pr12.1.jpg";
import Oven2 from "/others/pr12.2.jpg";
import Knife1 from "/others/pr13.1.jpg";
import Knife2 from "/others/pr13.2.jpg";  
import Basket1 from "/others/pr14.1.jpg";
import Basket2 from "/others/pr14.2.jpg";
import Organizer1 from "/others/pr15.1.jpg";
import Organizer2 from "/others/pr15.2.jpg";
import ToilerRollHolder1 from "/others/pr16.1.jpg";

import TrashCan1 from "/others/pr17.1.jpg";
import TrashCan2 from "/others/pr17.2.jpg";

import ShelfCover1 from "/others/pr18.1.jpg";
import ShelfCover2 from "/others/pr18.2.jpg";

import Bin1 from "/others/pr19.1.jpg";
import Bin2 from "/others/pr19.2.jpg";

import RecycleBag1 from "/others/pr20.1.jpg";
import RecycleBag2 from "/others/pr20.2.jpg";

import Hallbar1 from "/others/pr21.1.jpg";
import Hallbar2 from "/others/pr21.2.jpg";

import Umbrella1 from "/others/pr22.1.jpg";
import Umbrella2 from "/others/pr22.2.jpg";

import Hanger1 from "/others/pr23.1.jpg";
import Hanger2 from "/others/pr23.2.jpg";

import DoorHanger1 from "/others/pr24.1.jpg";
import DoorHanger2 from "/others/pr24.2.jpg";

import ClotheStand1 from "/others/pr25.1.jpg";
import ClotheStand2 from "/others/pr25.2.jpg";

export const AllProducts = [
  {
    id: 1,
    img: "/product/pr1.jpg",
    OtherImg: [Pillow1, Pillow2],
    category: "Furniture",
    name: "KVARNVEN",
    description: "Ergonomic pillow, side/back sleeper,",
    type: "Furnitures",
    price: 580,
  },
  {
    id: 2,
    img: "/product/pr2.jpg",
    OtherImg: [Bag1, Bag2],
    category: "Furniture",
    name: "RÄCKLA",
    description: "Bag, foldable, black,",
    type: "Furnitures",
    price: 390,
  },
  {
    id: 3,
    img: "/product/pr3.jpg",
    OtherImg: [Pad1, Pad2],
    category: "Furniture",
    name: "REXBEGONIA",
    description: "Cooling pad",
    type: "Furnitures",
    price: 490,
  },
  {
    id: 4,
    img: "/product/pr4.jpg",
    OtherImg: [WaterProof1, WaterProof2],
    category: "Furniture",
    name: "RENSARE",
    description: "Waterproof Bag",
    type: "Furnitures",
    price: 390,
  },
  {
    id: 5,
    img: "/product/pr5.jpg",
    OtherImg: [LaundryBag1, LaundryBag2],
    category: "Furniture",
    name: "KNALLA",
    description: "Laundry Bag",
    type: "Furnitures",
    price: 150,
  },
  {
    id: 6,
    img: "/product/pr6.jpg",
    OtherImg: [Cabinet1, Cabinet2],
    category: "Furniture",
    name: "KLEPPSTAD",
    description: "Shoe/storage cabinet, white,",
    type: "Furnitures",
    price: 6990,
  },
  {
    id: 7,
    img: "/product/pr7.avif",
    OtherImg: [Chair1, Chair2],
    category: "Chairs",
    name: "LISABO",
    description: "Chair, ash",
    type: "Furnitures",
    price: 3550,
  },
  {
    id: 8,
    img: "/product/pr8.jpg",
    category: "Chairs",
    OtherImg: [ChairGray1, ChairGray2],
    name: "ÄSPHULT",
    description: "Chair cover, universal/gray",
    type: "Furnitures",
    price: 990,
  },
  {
    id: 9,
    img: "/product/pr9.jpg",
    OtherImg: [MiniChair1, MiniChair2],
    category: "Chairs",
    name: "KARLJAN",
    description: "Chair, turquoise/Kabusa turquoise",
    type: "Furnitures",
    price: 2250,
  },
  {
    id: 10,
    img: "/product/pr10.jpg",
    OtherImg: [Lamp1, Lamp2],
    category: "Furniture",
    name: "RINGSTA",
    description: "Lamp shade, white, 17 inch ",
    type: "Furnitures",
    price: 890,
  },
  {
    id: 11,
    img: "/product/electronics.jpg", 
    category: "electronics",
    OtherImg: [Headset1, Headset2],
    name: "MÖJLIGHET",
    description: "Headset and tablet stand, white",
    type: "Electronics",
    price: 200,
  },
  {
    id: 12,
    img: "/product/kitchenOven.jpg",
    OtherImg: [Oven1, Oven2],
    category: "kitchen",
    name: "GÖRLIG",
    description: "Oven, Stainless steel",
    type: "Furnitures",
    price: 20990,
  },
  {
    id: 13,
    img: "/product/kitchen2.jpg",
    OtherImg: [Knife1, Knife2],
    category: "kitchen",
    name: "Bread Knife",
    description: "Bread knife, stainless steel, 23 cm ",
    type: "Furnitures",
    price: 990,
  },
  {
    id: 14,
    img: "/product/bathroom.jpg",
    OtherImg: [Basket1, Basket2],
    category: "bathroom",
    name: "TISKEN",
    description: "Basket with suction cup, white",
    type: "Furnitures",
    price: 300,
  },
  {
    id: 15,
    img: "/others/organizer.jpg",
    OtherImg: [Organizer1, Organizer2],
    category: "bathroom",
    name: "NOJIG",
    description: "Organizer, plastic/beige,",
    type: "Furnitures",
    price: 60,
  },
  {
    id: 16,
    img: "/product/pr16.jpg",
    OtherImg: [ToilerRollHolder1],
    category: "bathroom",
    name: "LILLASJÖN",
    description: "Toilet roll holder",
    type: "Furnitures",
    price: 350,
  },
  {
    id: 17,
    img: "/product/rs1.jpg",
    OtherImg: [TrashCan1, TrashCan2],
    category: "Rain Season Item",
    name: "VARIERA",
    description: "Trash can, white, 10 l (3 gallon)",
    type: "Furnitures",
    price: 150,
  },
  {
    id: 18,
    img: "/product/rs2.jpg",
    OtherImg: [ShelfCover1, ShelfCover2],
    category: "Rain Season Item",
    name: "Hylis",
    description: "Shelf unit, indoor/outdoor, ",
    type: "Furnitures",
    price: 1490,
  },
  {
    id: 19,
    img: "/product/rs3.jpg",
    OtherImg: [Bin1, Bin2],
    category: "Rain Season Item",
    name: "Sortera",
    description: "Recycling Bin",
    type: "Furnitures",
    price: 1290,
  },
  {
    id: 20,
    img: "/product/rs4.jpg",
    OtherImg: [RecycleBag1, RecycleBag2],
    category: "Rain Season Item",
    name: "Ajoss  ",
    description: "Recycling Bag",
    type: "Furnitures",
    price: 90,
  },
  {
    id: 21,
    img: "/product/rs5.jpg",
    OtherImg: [Hallbar1, Hallbar2],
    category: "Rain Season Item",
    name: "Hallbar",
    description: "Bin with Lid, 22L (6 Gallon)",
    type: "Furnitures",
    price: 590,
  },
  {
    id: 22,
    img: "/product/rs6.jpg",
    OtherImg: [Umbrella1, Umbrella2],
    category: "Rain Season Item",
    name: "Knalla",
    description: "Umbrella",
    type: "Furnitures",
    price: 390,
  },
  {
    id: 23,
    img: "/product/rs7.jpg",
    OtherImg: [Hanger1, Hanger2],
    category: "Rain Season Item",
    name: "Tjusig",
    description: "Hangar",
    type: "Furnitures",
    price: 890,
  },
  {
    id: 24,
    img: "/product/rs8.jpg",
    OtherImg: [DoorHanger1, DoorHanger2],
    category: "Rain Season Item",
    name: "Enudden",
    description: "Hanger for Door",
    type: "Furnitures",
    price: 300,
  },
  {
    id: 25,
    img: "/product/rs9.jpg",
    OtherImg: [ClotheStand1, ClotheStand2],
    category: "Rain Season Item",
    name: "Krokig",
    description: "Clothes Stand",
    type: "Furnitures",
    price: 1590,
  },
];
