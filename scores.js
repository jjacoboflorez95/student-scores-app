/*Assignment 4-2 Instructions: Develop the Student Scores application*/
"use strict";

/**
 * Function that is in charge of:
 * 1. Calculates the average score and display it.
 * 2. Display de Students’ names and scores.
 * @param {} scores
 * @param {*} scoresString
 */
const displayScores = (scores, scoresString) => {
	let sum = 0;
	for (let score of scores) {
		sum += parseInt(score);
	}
	const average = sum / scores.length;
	$("#avr_score").text(average);
	// Displays students’ names and scores in the text area
	$("#scores").val(scoresString.join("\n"));
};

$(document).ready(() => {
	const scoreValues = [];
	const studentsNamesScores = [];

	// Click event handler for the Add Student Score button
	$("#add_button").click(() => {
		// User entries
		const first_name = $("#first_name").val().trim();
		const last_name = $("#last_name").val().trim();
		const score = $("#score").val().trim();
		// User entries validations
		if (!first_name) {
			alert("Please insert a first name.");
			return;
		}

		if (!last_name) {
			alert("Please insert a last name.");
			return;
		}

		if (!score) {
			alert("Please insert a score.");
			return;
		} else if (isNaN(score)) {
			alert("Please insert a number in score field.");
			return;
		}

		const studentScore = last_name + ", " + first_name + ": " + score;
		scoreValues.push(score);
		studentsNamesScores.push(studentScore);

		displayScores(scoreValues, studentsNamesScores);

		// get the add form ready for next entry
		$("#first_name").val("");
		$("#last_name").val("");
		$("#score").val("");
		$("#first_name").focus();
	}); // end click()

	// Click event handler for the Clear Student Scores button
	$("#clear_button").click(() => {
		// remove the score data from the web page
		$("#avr_score").val("");
		$("#scores").val("");
		// Clear both arrays.
		scoreValues.length = 0;
		studentsNamesScores.length = 0;

		$("#first_name").focus();
	}); // end click()

	// Click event handler for the Sort By Last Name button
	$("#sort_button").click(() => {
		// Sorts the students by last name and then re-displays the score information.
		studentsNamesScores.sort();
		displayScores(scoreValues, studentsNamesScores);
	}); // end click()

	$("#first_name").focus();
}); // end ready()
