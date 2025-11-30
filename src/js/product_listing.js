import { ProductData } from "./ProductData.mjs";
import { ProductList } from "./ProductList.mjs";
import { loadHeader, getPeram } from "utills.mjs";

loadHeaderFooter();

const category = getPeram('category');


const dataSource = new ProductData();

const listElement = document.querySelector(".product-list");

const myList = new ProductList(category, dataSource, listElement);

myList.init();