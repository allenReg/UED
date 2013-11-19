function getElementsByClassName(tagName, className)
{
	var tag = document.getElementsByTagName(tagName);
	
	var result = new Array();	
	var intermediate_quantity;

	for(var i=0;i<tag.length;i++)

	{
		intermediate_quantity = tag[i];
		if(intermediate_quantity.className.search(className)!= -1)
			{
				result.push(intermediate_quantity);
			}
	}
	return (result)
}