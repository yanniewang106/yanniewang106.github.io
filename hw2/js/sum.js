//定义sum函数
function sum()
{
	var array_arguments = new Array();
	var sum_arguments = 0;
	for(var i = 0; i < arguments.length; i++)
	{
		if(!isNaN(arguments[i]))
		{
			array_arguments[i] = arguments[i];
		}
		else
		{
			array_arguments[i] = 0;
		}
		sum_arguments += array_arguments[i];
	}
	var n = Math.pow(10, 1);
	return Math.round(sum_arguments*n)/n;
}
document.write("sum(1, 2, 3, 4, 5) = " + sum(1, 2, 3, 4, 5) + "<br>");
document.write("sum(-5, null, 5) = " + sum(-5, null, 5) + "<br>");
document.write("sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', 1) = " + sum(false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', 1) + "<br>");
document.write("sum(0.1 + 0.2) = " + sum(0.1 + 0.2) + "<br>");