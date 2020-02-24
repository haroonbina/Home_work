



let Numbers = [];
for (i = 0; i < 20; i++) { 
	Numbers.push((parseInt((Math.random() * (50 - 0) + 0))));
}

let lines = "";
for (i = 0; i < Numbers.length; i++) { 
    lines += Numbers[i] + ",";
}

let tmp = [];
for (i = 0; i < Numbers.length; i++) { 
 
	for (j = 0; j < Numbers.length; j++) { 
		
		if (Numbers[j] > Numbers[j+1]) {
		 tmp = Numbers[j];
		 Numbers[j] = Numbers[j + 1];
		 Numbers[j + 1] = tmp;
		}
	}
}
document.write(Numbers + '<br>')


document.write( '----------------------------'+'<br>')

function reverseString(str) {
    var splitString = str.split("");  
    var splitString = "hello".split("");
     ["h", "e", "l", "l", "o"]
     document.write(str)
     document.write(''+ '<br>')

    var reverseArray = splitString.reverse(); 
    var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    ["o", "l", "l", "e", "h"]
    document.write(reverseArray)

    document.write(''+ '<br>')
    var joinArray = reverseArray.join("");  
    var joinArray = ["o", "l", "l", "e", "h"].join("");

    document.write(joinArray)
    
}
reverseString("hello")



