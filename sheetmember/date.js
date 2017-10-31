
		var setTime=new Date();
		var montday=[31,0,31,30,31,30,31,31,30,31,30,31];
		var year=document.getElementById('selectyear');
		var month=document.getElementById('selectmon');
		var date=document.getElementById('selectdate');  
		init();
		
		function init(){
		setyear();
		setmon();
		setdate();
		}
		 function newOption(i){
			var selectoption=document.createElement('option');
			selectoption.value=i;
			selectoption.innerHTML=i;
			return selectoption;
		 
		 }
		function setyear(){
			for(var i=1911;i<=setTime.getFullYear();i++)
			{
				var selectoption=newOption(i);
				year.appendChild(selectoption);
			}
		}
		
		function setmon(){
			 for(var i=1;i<=12;i++)
			{
				var selectoption=newOption(i);
				month.appendChild(selectoption);
			}
			
		}
		function leapyearotnot()
		{	
			var theyear=$("#selectyear").val();
			if(theyear%4==0 ||theyear%100!=0 )
			{
				setdate();
			}
		}
		function leapyear(){
			var theyear=$("#selectyear").val();
			if(theyear%4!=0 ||theyear%100==0 )
			{
				for(var i=1;i<=28;i++)
				{
				var selectoption=newOption(i);
				date.appendChild(selectoption);
				}
			}
			else{
				for(var i=1;i<=29;i++)
				{
				var selectoption=newOption(i);
				date.appendChild(selectoption);
				}
			}
			
			
		
		}
		function setdate(){
			var monthdat=$("#selectmon").val()-1;
			
			while(date.hasChildNodes())
			{date.removeChild(date.firstChild);}
			for(var i=1;i<=montday[monthdat];i++)
			{
			var selectoption=newOption(i);
			date.appendChild(selectoption);
			}
			if(monthdat==1)leapyear();
		}
		 
		 
		
		
		
		 
