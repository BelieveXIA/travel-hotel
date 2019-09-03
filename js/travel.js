
window.onload=function()
{
	var dib=document.getElementById("dec_input_btn");
	var ds=document.getElementById("dec_select");
	var hsb=document.getElementById("hs_btn");
	var hsh=document.getElementById("hs_hide");
	dib.onclick=function()
	{
		Show_Hide_1(ds);
		return false;
	};
	hsb.onclick=function()
	{
		Show_Hide_2(hsh);
		return false;
	};
};
function Show_Hide_1(obj)
{
	if(obj.style.display=="none")
	{
		obj.style.display='block';
	}
	else
	{
		obj.style.display='none';
	}
}

function Show_Hide_2(obj)
{
	if(obj.style.display=="none")
	{
		obj.style.display='block';
	}
	else
	{
		obj.style.display='none';
	}
}

// $("#input_value").on("click", "li", function(){
//     $("#select_value").val($(this).text());
//   });