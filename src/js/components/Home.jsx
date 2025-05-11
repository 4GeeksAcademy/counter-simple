import React, { useState, useEffect } from "react";

const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [intervalId, setIntervalId] = useState(null);

	useEffect(() => {
		const id = setInterval(() => {
			setSeconds(prevSeconds => {
				const newSeconds = prevSeconds + 1;
				if (newSeconds === 10) {
					alert("¡El contador ha llegado a 10 segundos!");
					clearInterval(id);
					setIntervalId(null);
				}
				return newSeconds;
			});
		}, 1000);
		setIntervalId(id);
		return () => {
			if (id) {
				clearInterval(id);
			}
		};
	}, []);

	const stopInterval = () => {
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};

	const startInterval = () => {
		if (intervalId) return;
		const id = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);
		setIntervalId(id);
	};

	const resetInterval = () => {
		setSeconds(0);
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};

	return (
		<div className="text-center">
			<h2>Contador: {seconds}</h2>
			<p>Valor actual: {seconds}</p>
			<button onClick={startInterval}>Start</button>
			<button onClick={stopInterval}>Stop</button>
			<button onClick={resetInterval}>Reset</button>
		</div>
	);
};

export default Home;