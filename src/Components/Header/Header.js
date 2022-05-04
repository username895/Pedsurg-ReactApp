import logo1 from "../../img/logo1.png"
import logo2 from "../../img/logo2.jpg"
import logo3 from "../../img/logo3.jpg"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Footer} from '../../index.js'



function Header() {
	let logoNumbers = [
		{id: 1, link: logo1, href: "http://xn----9sbdbejx7bdduahou3a5d.xn--p1ai/"},
		{id: 2, link: logo3, href: "http://xn----9sbdbejx7bdduahou3a5d.xn--p1ai/"}, 
		{id: 3, link: logo2, href: "https://fmba.gov.ru/"}
	];

	let navItems = [
		{id: 1, text: "Главная", link: ""},
		{id: 2, text: "Детская хирургия", link: "/surgery"},
		{id: 3, text: "Основные направления работы", link: "/directions"},
		{id: 4, text: "Научная деятельность", link: "/publications/mentions"},
		{id: 5, text: "Библиотека", link: "/library"},
		{id: 6, text: "Архив видео", link: "/archive"},
		{id: 7, text: "Наши учителя", link: "/teachers"},
		{id: 8, text: "О Нас", link: "/about"},
	]
	//При добавлении новых пунктов меню, добавлять Route в App.js
	return (
		<header className="header container">
			<HeaderTop logos={logoNumbers}/>
			<HeaderNav navItems={navItems}/>
		</header>
	)
}

function HeaderTop(props) {
	const logosList = props.logos.map((logo) => {
		return <a key={logo.id} href={logo.href}><img className="logo__image" src={logo.link} alt="logo" height="80"/></a>
	})			//Создание списка из логотипов

	return (
		<div className="header-top">
			<div className="logo">
				{logosList}
			</div>
			<div className="header-title">
				<h1>Детская торако-абдоминальная хирургия</h1>
			</div>
			<div className="header-contacts">
				<div className="header-contacts__item">Тел: +7 (916) 116-43-24</div>
				<div className="header-contacts__item">Mail: trunov2000@mail.ru</div>
			</div>
		</div>
	)
}

function HeaderNav(props) {
	let navList = props.navItems.map((item) => {
		return <li key={item.id} ><Link className="nav-menu__item" to={item.link}>{item.text}</Link></li>
	}) //Создание списка для элементов навигации
	return (
		<nav className="nav">
			<ul className="nav-menu">
				{navList}
			</ul>
		</nav>
	)
}

export default Header;