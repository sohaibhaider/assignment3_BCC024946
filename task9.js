var a = [24,53,78,91,12];
var b=0;

document.write("Array items: "+a);

for(i=1;i<a.length;i++)
{
    if(a[i]>a[b])
    {
        b=i;
    }
}

document.write("<br/>The largest number is "+a[b]);