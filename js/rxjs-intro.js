var source = Rx.Observable.interval(400).take(9)
				.map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);


var result = source
				.map(x => parseInt(x)) //list all
				.filter(x => !isNaN(x)) //list only numbers, filter out
 				.reduce((x,y) => x + y); //calculate current and previous numbers

			result.subscribe(x => console.log(x));