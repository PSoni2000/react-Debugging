import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
	const [courseGoals, setCourseGoals] = useState([
		{ text: "Do all exercises!", id: "g1" },
		{ text: "Finish the course!", id: "g2" },
	]);

	const addGoalHandler = (enteredText) => {
		setCourseGoals((prevGoals) => {
			const updatedGoals = [...prevGoals];
			updatedGoals.unshift({ text: enteredText, id: Math.random().toString() }); // NOTE: here "goal1" was statically assigned
			return updatedGoals;
		});
	};

	const deleteItemHandler = (goalId) => {
		setCourseGoals((prevGoals) => {
			const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
			return updatedGoals;
		});
	};

	let content = (
		<p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
	);

	if (courseGoals.length > 0) {
		content = (
			<CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
		);
	}

	return (
		// NOTE: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
		<div>
			<section id="goal-form">
				<CourseInput onAddGoal={addGoalHandler} />
			</section>
			<section id="goals">{content}</section>
		</div>
	);
};

export default App;
