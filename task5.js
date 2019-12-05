var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

document.write("Sample Array: {"+arr1+"}<br/>");
console.log(arr1);

//Option 1: index of elements of arr1 is checked on each iteration if not same as index of element(unique) it is removed {3,a,2,4,9}
for(i=0;i<arr1.length;i++)
{
    if(i!=arr1.indexOf(arr1[i]))
    {
        arr1.splice(i, 1);
        i--;
    }
}

//Option 2: First it sorts elements of arr1 then removes duplicates {2,3,4,9,a}(changes order of Elements)
/*arr1 = arr1.sort();
for(var i=1;i<arr1.length;i++)
{
    if(arr1[i]==arr1[i-1])
    {
        arr1.splice(i, 1);
        i--;
    }
}*/

//Option 3: Remomes duplicates using nested loop {3,a,2,4,9}
/*for(var i=0;i<(arr1.length-1);i++)
{
    for(var k=1+i;k<arr1.length;)
    {
        if(arr1[i]===arr1[k])
        {
            arr1.splice(k, 1);
        }
        else
        {
            k++;
        }
    }
}*/



//Option 4: Uses filter() function which creates index for each unique element in arr1 and then return only those where element index matches with index of arr1 {3,a,2,4,9}
/*var arr1 = arr1.filter((item, index)=>
{
    return arr1.indexOf(item)===index;
});*/

//Option 5: Using Array.form() function "new Set(Array)" to include just unique elements from arr1 {3,a,2,4,9}
//arr1 = Array.from(new Set(arr1));


document.write("Sample Output: {"+arr1+"}<br/>");
console.log(arr1);