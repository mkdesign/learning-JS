window.onload=function(){
		var mehrad=document.getElementsByTagName('p').item(0);

		mehrad.onclick=function(){
			document.write('<i>booogh</i>');
			//setTimeout(function(){alert('boogh');},2000);
			setInterval(function(){
				document.write('<i><b>hi!</b></i></br>');
			},1000)
		}
		//var p2=document.getElementById('sth');
		//	p2.onclick=function(){
		//		document.write('biiiiiiiib');
		//	}
		var p3=document.getElementsByClassName('some').item(0).getElementsByTagName('span').item(0);
		p3.onclick=function(){
			document.write('alert');
		}
	}