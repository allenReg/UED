function getElementsByClassName(node, tagName, className)
{
	var tag = (tagName == "*" && node.all) ? node.all : node.getElementsByTagName(tagName);

	className = className.replace(/\-/g, "\\-");
	
	var regular_expression = new RegExp ("(\s|^)" + className + "(\s|$)");
	var Return = Array();	
	var intermediate_quantity;

	for(var i=0; i < tag.length; i++)

	{
		intermediate_quantity = tag [i];
		if( regular_expression.test (intermediate_quantity.className) )
			{
				Return [Return.length] (intermediate_quantity);
			}
	}
	return (Return)
}