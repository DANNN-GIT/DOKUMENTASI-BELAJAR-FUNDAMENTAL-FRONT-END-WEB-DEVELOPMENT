import "./article-item.js";
import article from "./data-article.js";

const containerElement = document.querySelector('.container');
const articleElement = document.createElement('article-item');
articleElement.article = article;

containerElement.appendChild(articleElement);