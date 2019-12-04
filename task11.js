var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?", "CAKE");
var C=-1;

for(i=0;i<A.length;i++)
{
    if(B.toLowerCase()==A[i])
    {
        C=i;
    }
}

if(C!=(-1))
{
    document.write(A[C]+" is <b>available</b> at index "+C+" in our bakery");
}
else
{
    document.write("We are sorry, "+B.toLowerCase()+" is <b>not available</b> in our bakery");
}