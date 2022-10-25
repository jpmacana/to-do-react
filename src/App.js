import React, { useState } from 'react';
import './index.css';
import { GoTasklist } from 'react-icons/go';
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from 'react-icons/ai';

function App() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState('');

	// add tasks
	const handleSubmit = (e) => {
		e.preventDefault();
		const addTask = {
			id: Math.floor(Math.random() * 1000),
			text: input,
			completed: false,
		};

		setTasks([...tasks, addTask]);
		setInput('');
	};

	//delete tasks

	const deleteTask = (id) => {
		let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
		setTasks(filteredTasks);
		console.log('task deleted');
	};

	//togle completed task
	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task,
			),
		);

		console.log('toogle complete');
	};

	const date = new Date();

	let monthFull = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	let month = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	let dayFull = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return (
		<div className="App">
			<div className="container">
				<h1>
					To Do List <GoTasklist /> 2P
				</h1>

				<div className="date">
					<p>
						{dayFull[date.getDay()] +
							', ' +
							date.getDate() +
							' ' +
							month[date.getMonth()] +
							' ' +
							date.getFullYear() +
							'.'}
					</p>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="form-input">
						<AiOutlinePlusCircle className="icon-item" />
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Enter a task"
							type="text"
						/>
					</div>
				</form>

				<div>
					{tasks.map((task) => (
						<div
							className={`task-row ${task.completed ? 'completed' : ''}`}
							key={task.id}
							onDoubleClick={() => toggleComplete(task.id)}
						>
							<p>{task.text}</p>

							<AiOutlineCloseCircle
								onClick={() => deleteTask(task.id)}
								className="icon-item"
							/>
						</div>
					))}
				</div>

				<p className="length">
					{tasks < 1 ? 'You did not add any tasks' : `Tasks: ${tasks.length}`}
				</p>
				<br />

				<p className="info">
					{tasks < 1
						? 'If you double click on the task, you can cross out that the task has already been done without having to delete it.'
						: `Remember that you can cross out the task that has already been done, if you do not want to delete it.`}
				</p>
			</div>
		</div>
	);
}

export default App;
