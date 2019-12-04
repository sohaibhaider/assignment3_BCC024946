var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var temp = 0;

var c = (a.concat(b)).sort();
document.write(c+"<br/>");

for(var i=0;i<c.length;i++)
{
    document.write("i="+i+"<br/>");
    for(var j=0;j<c.length;j++)
    {
        if(i!=j && c[i]==c[j])
        {
            c.splice(j, 1);
            j--;
            document.write("D"+c+"<br/>");
        }
        else if(c[j]>c[i])
        {
            temp=c[i];
            c[i]=c[j];
            c[j]=temp;
            //j--;
            document.write("C"+c+"<br/>");
        }
    }
}

document.write(c+"<br/>");
