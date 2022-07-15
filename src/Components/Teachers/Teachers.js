import {useInnerWidth} from '../../index.js';
import teachersDB from '../../database/TeachersDB.js'; 
import React, {useState} from 'react'


function Teachers() {
	let [teachersListProps, setTeachersListProps] = useState(teachersDB[0])
	let innerWidth = useInnerWidth();
	function TeachersEven(props) {
		return (
			<div className="teachers-elem">
				<TeachersImage teachers={props.teachersListProps}/>
				<div className="teachers-descript teachers-inner">
					<TeachersTitle teachers={props.teachersListProps}/>
					<TeachersDescript teachers={props.teachersListProps}/>
				</div>	
			</div>
		)
	}

	function TeachersOdd(props) {
		return (
			<div className="teachers-elem teachers-elem">
				<div className="teachers-descript teachers-inner">
					<TeachersTitle teachers={props.teachersListProps}/>
					<TeachersDescript teachers={props.teachersListProps}/>
				</div>
				<TeachersImage teachers={props.teachersListProps}/>
			</div>
		)
	}
	
	let teachersListInfo = teachersDB.map((item, id) => {	
		if ((item.id % 2 == 1) || (innerWidth < 1199)) {
			return (
				<div className="cards-list-elem" key={id}>
					<TeachersEven teachersListProps={teachersDB[id]}/>
				</div>
			) 
		} else 
		if (item.id % 2 == 0)  {
			return (
				<div className="cards-list-elem" key={id}>
					<TeachersOdd teachersListProps={teachersDB[id]}/>
				</div>
			)
		}	
	})

	return (
		<main className="main-teachers container">
			{teachersListInfo}
		</main>	
	)
}

function TeachersImage (props) {
	return (
		<div className="teachers-inner teachers-image">
			<img className="teachers-image__item" src={props.teachers.link} alt="illustration"/>
		</div>	

	)
}

function TeachersDescript (props) {
	const element = React.useRef(null);
	// useEffect(() => {
	// 	if (element.current.getBoundingClientRect().height < parseInt(window.getComputedStyle(element.current).maxHeight.split('').splice(0, 3).join(''))) //Приводим к числовумо значению первые три цифры максимальной высоты элемента 
	// 		element.current.style.overflowX = "hidden";
	// 		//Если текст влезает блок, то прокрутка удаляется 
	// }, [])

	return (
		<p className="teachers-text teachers-inner" ref={element}>{props.teachers.text}</p>
	)
}

function TeachersTitle(props) {
	return (
		<h4 className="teachers-inner teachers-title">{props.teachers.title}</h4>
	)
}

export default Teachers;