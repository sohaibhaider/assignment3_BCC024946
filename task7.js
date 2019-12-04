var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var temp = 0;
var c = (a.concat(b)).sort();

document.write("a = {"+a+"}<br/>");
document.write("b = {"+b+"}<br/>");
document.write("Concat + Sort = {"+c+"}<br/>");

for(var i=0;i<c.length;i++)
{
    if(c[i]==c[i+1])
    {
        c.splice(i+1,1);
        i--;
    }
}

document.write("After Deleting Duplicates = {"+c+"}<br/>");

for(var i=0;i<c.length;i++)
{
    for(var j=0;j<c.length;j++)
    {
        if(c[j]>c[i])
        {
            temp=c[i];
            c[i]=c[j];
            c[j]=temp;
        }
    }
}

document.write("c = {"+c+"}<br/>");
