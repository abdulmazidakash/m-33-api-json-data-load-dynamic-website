// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json()) 
//       .then(response => console.log(response)) 
	  
	  //.json is not similar but close to json.parse
    //   .then(json => console.log(json))

// fetch('')

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData(){
	fetch(url)
		.then(response => response.json())
		.then(json => console.log(json))
}
