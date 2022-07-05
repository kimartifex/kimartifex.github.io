x=document.createElement ("button");
x.innerHTML="Hello";
document.body.append (x);

k=0;

function max () {
	
x=prompt("x")*1; 
y=prompt("y")*1;
z=prompt("z")*1; 

if (x>y && x>z) { alert(x);}
	else if (y>x && y>z) { alert(y);}
	else if (z>y && z>x) { alert(z);}
	else if (z==y && z==x) { alert ("равны");}
else { alert("НЕЗНАЮ");}

k++;

if (k<5) { max(); }


}

function yellow() {
	alert(1);
}










