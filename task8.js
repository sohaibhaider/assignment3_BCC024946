document.write("a. Counting: ");
for(i=1;i<=15;i++)
{
    document.write(i);
    if(i!=15)
    {
        document.write(", ");
    }
}

document.write("<br/>b. Reverse Counting: ");
for(i=10;i>0;i--)
{
    document.write(i);
    if(i!=1)
    {
        document.write(", ");
    }
}

document.write("<br/>c. Even: ");
for(i=0;i<=20;i++)
{
    if(i%2==0)
    {
        document.write(i);
        if(i!=20)
        {
            document.write(", ");
        }
    }
}

document.write("<br/>d. Odd: ");
for(i=0;i<20;i++)
{
    if(i%2==0)
    {
        document.write(++i);
        if(i!=19)
        {
            document.write(", ");
        }
    }
}

document.write("<br/>e. Series: ");
for(i=1;i<=20;i++)
{
    if(i%2==0)
    {
        document.write(i+"K");
        if(i!=20)
        {
            document.write(", ");
        }
    }
}