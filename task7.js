var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c = a.concat(b);
var temp = 0;
//Additional ways to concat multiple arrays
//var c = [].concat(a, b);
//var c = [...a,...b];

document.write("a = {"+a+"}<br/>");
document.write("b = {"+b+"}<br/>");
document.write("c = {"+c+"}<br/>");

//Option 1 (Eliminating Duplicates): Using indexOf()
for(i=0;i<c.length;i++)
{
    if(i!=c.indexOf(c[i]))
    {
        c.splice(i, 1);
        i--;
    }
}

//Option 2 (Eliminating Duplicates): First elements get sorted based on string values then getting eliminated by comparing neighbouring Elements
/*c = c.sort();
document.write("Sorted c = {"+c+"}<br/>");
for(var i=0;i<c.length;i++)
{
    if(c[i]==c[i+1])
    {
        c.splice(i+1,1);
        i--;
    }
}*/

document.write("Duplicates Removed c = {"+c+"}<br/>");

//Option 1 (Sorting): Using Bubble Sort Algorithm to sort elements
for(var i=0;i<c.length;i++)
{
    for(var j=0;j<c.length;j++)
    {
        if(c[j]>c[i])
        {
            temp=c[i];
            c[i]=c[j];
            c[j]=temp;

            //Another way of swaping elements of an array without using a temp variable
            /*[c[i],c[j]] = [c[j],c[i]];*/
        }
    }
}

//Option 2 (Sorting): Elements are sorted according to the return value of the compare function
/*
a-b='- Number' (a comes first)
a-b='+ Number' (b comes first)
a-b='0 Zero' (a and b position remain unchanged)
*/
/*c.sort(function(a, b)
{
    return a - b;
});*/

document.write("c = {"+c+"}<br/>");
