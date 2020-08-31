import './style/style.css';
import "regenerator-runtime";
import $ from "jQuery";
window.jQuery = $;
window.$ = $;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./script/component/about-us";
import "./script/component/article-left";
import "./script/component/article-right";
import "./script/component/footer-page";
import "./script/component/head-slider";
import "./script/component/img-3col";
import "./script/component/nav-bar";
import "./script/component/our-services";
import "./script/component/image-col";
import "./script/component/search-bar"
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
import ScrollSpy from './script/view/scrollspy.js'
ScrollSpy();