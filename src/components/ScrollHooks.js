import React, {useState, useEffect} from 'react'

export default function ScrollHooks () {
	const [scrollY, setScrollY] = useState(0);
	//const [name, setName] = useState("Nickel");

	useEffect(() => {
		//console.log("Moviendo el scroll");

		const detectarScroll = () => setScrollY(window.pageYOffset);

		detectarScroll();

		//window.addEventListener("scroll", detectarScroll);

		return () => {
			//window.removeEventListener("scroll", detectarScroll);
		};
	}, [scrollY]);

	useEffect(() => {
		//console.log("Fase de montaje")
	},[]);

	useEffect(() => {
		//console.log("Fase de actualizacion")
	});

	useEffect(() => {
		return () => {
		//console.log("Fase de desmontaje")
		};
	});

	return(
		<>
		<h2>Hooks - useEffect y el Ciclo de Vida</h2>
		<p>Scroll Y del Navegador {scrollY}px</p>
		</>
	)
}