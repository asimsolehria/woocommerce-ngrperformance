
	const homePageButtons=document.querySelectorAll('.add-to-cart-button a');

		Array.from(homePageButtons).forEach(element => {
			element.style.backgroundColor="#14A800";
			element.style.borderColor="#14A800";
			element.style.color="white";
			element.innerText="BUY NOW";

		});
  
	var selection=document.getElementById("pa_size");
	
	
	

		
	 
		const price=document.getElementById("pq-price");
		const minus=document.getElementsByClassName("minus button is-form");
  		const plus=document.getElementsByClassName("plus button is-form");
		const betweenPlusMinus=document.getElementsByClassName("input-text qty text");
        var actprice=price.innerText.split("$");
	
	  console.log("ASIM");
	  
	console.log(price);
	
		var actpriceParsed=parseFloat(actprice[2]?actprice[1]:actprice[1]);
	if(selection==null)
		{
			var newPrice=actpriceParsed;
			console.log(newPrice);
		}
	else{
	selection.addEventListener('change',function(e){
					e.preventDefault;
		element.innerText='';
		betweenPlusMinus[0].value=1;
				
		var optionText=selection.options[selection.selectedIndex].text;
							   switch(optionText) {

  case "5 Inch":
  case "-10 AN":
	actpriceParsed=parseFloat(actprice[2]?actprice[2]:actprice[1]);
									   newPrice=actpriceParsed;
	break;
  case "-8 AN":
	actpriceParsed=12.99;
newPrice=actpriceParsed;
	break;
  case "-6 AN":
	actpriceParsed=10.99;
newPrice=actpriceParsed;
	break;
  default:
			
    actpriceParsed=parseFloat(actprice[1]);
									   newPrice=actpriceParsed;
};
			
							   });
	
	};	
	
		const buttons=document.getElementsByClassName("quantity buttons_added");
		
	
	
	
	
	
	let element = document.createElement('div');

	
	
		element.classList.add("dynamic-price");
		plus[0].addEventListener("click", function(e) {
			e.preventDefault();
			
			
		buttons[0].appendChild(element);
			
			
			
					
					newPrice=newPrice+actpriceParsed;
			        element.innerText=`$ ${newPrice.toFixed(2)}`;
// 	  				price.innerText=`$ ${newPrice.toFixed(2)}`;
			        
				
	});
		minus[0].addEventListener("click", function(e) {
			
			e.preventDefault();
			
			
		buttons[0].appendChild(element);
			
			console.log("MINUS CLICKED");
			console.log(element);
  		if(newPrice>actpriceParsed)
				{
					newPrice=newPrice-actpriceParsed;
					element.innerText=`$ ${newPrice.toFixed(2)}`;
// 	  				price.innerText=`$ ${newPrice.toFixed(2)}`;
	  				
					
				}
});
		
