import logo1 from "../../img/logo1.png"
import logo2 from "../../img/logo2.jpg"
import logo3 from "../../img/logo3.jpg"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Footer} from '../../index.js'



function Header() {
	let logoNumbers = [
		{id: 1, link: logo1},
		{id: 2, link: logo3}, 
		{id: 3, link: logo2}
	];

	let navItems = [
		{id: 1, text: "Детская хирургия", link: "/surgery"},
		{id: 2, text: "Основные направления работы", link: "/directions"},
		{id: 3, text: "Научная деятельность", link: "/science"},
		{id: 4, text: "Библиотека", link: "/library"},
		{id: 5, text: "Архив видео", link: "/archive"},
		{id: 6, text: "Наши учителя", link: "/preceptor"},
		{id: 7, text: "О Нас", link: "/about"},
	]

	return (
		<header className="header container">
			<HeaderTop logos={logoNumbers}/>
			<HeaderNav navItems={navItems}/>
		</header>
	)
}

function HeaderTop(props) {
	const logosList = props.logos.map((logo) => {
		return <a key={logo.id} href=""><img className="logo__image" src={logo.link} alt="logo" height="80"/></a>
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
		return <li key={item.id} className="nav-menu__item"><Link to={item.link}>{item.text}</Link></li>
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