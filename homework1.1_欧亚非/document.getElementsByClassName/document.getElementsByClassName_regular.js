function getElementsByClassName(tagName, className)
{
	var tag = document.getElementsByTagName(tagName);
	
	var regular_expression = new RegExp ("\\b" + className + "\\b");
	var result = new Array();	
	var intermediate_quantity;

	for(var i=0;i<tag.length;i++)

	{
		intermediate_quantity = tag[i];
		if(regular_expression.test(intermediate_quantity.className))
			{
				result.push(intermediate_quantity);
			}
	}
	return (result)
}