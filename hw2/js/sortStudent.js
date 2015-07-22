//定义一个对象数组
var s1 = new Student("Mary", 20, 80);
var s2 = new Student("Cindy", 21, 90);
var s3 = new Student("Mia", 20, 90);
var s4 = new Student("Andy", 21, 90);
var s5 = new Student("Bernadeth", 19, 70);
var s6 = new Student("David", 20, 90);
var s7 = new Student("Rita", 19, 90);
var s8 = new Student("Fay", 20, 100);
var s9 = new Student("Peter", 22, 90);
var s10 = new Student("Vina", 22, 95);
var student = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

//定义Student类
function Student(n, a, s)
{
	this.firstname = n;
	this.age = a;
	this.score = s;
}

//定义排序函数
function sorter(x, y)
{
	if (x.age > y.age)
	{
		return 1;
	}
	else if (x.age == y.age)
	{
		if (x.score > y.score)
		{
			return -1;
		}
		else if (x.score == y.score)
		{
			if (x.firstname > y.firstname)
			{
				return 1;
			}
			else if (x.firstname == y.firstname)
			{
				return 0;
			}
			else
			{
				return -1;
			}
		}
		else
		{
			return 1;
		}
	}
	else
	{
		return -1
	}
}
document.write("--------Original Order-------", "<br>");
for (var i = 0; i < student.length; i++)
{
	document.write("Name : " + student[i].firstname + ", Age : " + student[i].age + ", Score : " + student[i].score + "<br><br>");
}
document.write("--------Final Order-------", "<br>");
student.sort(sorter);
for (var i = 0; i < student.length; i++)
{
	document.write("Name : " + student[i].firstname + ", Age : " + student[i].age + ", Score : " + student[i].score + "<br><br>");
}