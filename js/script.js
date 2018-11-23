function myFirstApp(name, age) {

	alert("Привет, меня зовут "+name+" и это моя первая программа!");

	function showSkills() {
		let skills = ['html', 'css', 'jQuery'];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18){
			alert("Вы нам идеально подходите!");
		} else {
			alert("Приходи через годик, другой!");
		}
	}

	function calcPow(num) {
		console.log( num*num );
	}

	calcPow(4);

	checkAge();

}
	myFirstApp("Ivan", 32);
	myFirstApp("bober", 2);