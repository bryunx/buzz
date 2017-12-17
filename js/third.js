//Additional Array Methods
//Iterators Exercises
//Part 1

var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
];

function printEmails(users) {
	users.forEach(function(user){
		console.log(user.email);
	});
}

printEmails(users);

function printHobbies(users) {
	users.forEach(function(user){
		user.hobbies.forEach(function(hobby){
			console.log(hobby);
		})
	});
}

printHobbies(users);

function findHometownByState(state){
	console.log(users.find(function(val){
		return val.hometown.state === state;
	}));
}

findHometownByState('NY');

function allLanguages(){
	var languages = [];
	users.forEach(function(user){
		user.favoriteLanguages.forEach(function(language){
			if(languages.indexOf(language) === -1) {
				languages.push(language);
			}
		})
	})
	console.log(languages);
}

allLanguages();

//Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in


function hasFavoriteEditor(editor){
	users.some(function(user){
		console.log(user.favoriteEditor === editor);
	})
}

hasFavoriteEditor('Sublime Text');

function findByUsername(username){
	console.log(users.find(function(user){
		return user.username === username;
	}));
}

findByUsername('sam');

//Part II

function vowelCount(str){
	var splitstr = str.split('');
	var obj = {};
	var vowels = ['a','e','i','o','u'];
	
	splitstr.forEach(function(letter){
		if(vowels.indexOf(letter.toLowerCase()) !== -1) {
			if(obj[letter]){
				obj[letter]++;
			} else {
				obj[letter] = 1;
			}
		}
	})
	console.log(obj);
}

vowelCount('apple');

function removeVowels(str){
	var vowels = ['a','e','i','o','u'];
	console.log(str.split('').filter(function(val){
		return vowels.indexOf(val) === -1;
	}));
}

removeVowels('superman');




