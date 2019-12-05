var A = [20,53,78,4,91,12];

document.write("A = ["+A+"]<br/>");

//See Task 7 for more options
for(i=0;i<A.length;i++)
{
    for(j=0;j<A.length;j++)
    {
        if(A[j]>A[i])
        {
            temp=A[i];
            A[i]=A[j];
            A[j]=temp;
        }
    }
}

document.write("Output = ["+A+"]");