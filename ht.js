const opr=process.argv[2];
var result=0;
if(opr==='sub'||opr==='div')
{
    if(process.argv.length>5)
    {
        console.error('Invalid !! For "sub" and "div" operations, you must provide exactly 2 arguments');
        process.exit(1);
    }
    else
    {
        const n1=parseFloat(process.argv[3]);
        const n2=parseFloat(process.argv[4]);
        if(opr==='sub')
        {
            result=n1-n2;
            console.log(result);
        }

        else if(opr==='div'&&n2===0.0)
        {
            console.error('Invalid !!Division by zero is not possible!!');
            process.exit(1);
        }

        else if(opr==='div'&&n2!=0.0)
        {
            result=n1/n2;
            console.log(result);
        }

    }
}

else if(opr==='add'||opr==='mul')
{
    const a=[];
    for(var i=3;i<process.argv.length;i++)
    {
        const number=parseFloat(process.argv[i]);
         if (!isNaN(number))
        {
            a.push(number);
        }
    }
    if(opr==='add')
    {
        var sum=0.0;
        for(var i=0;i<a.length;i++)
        {
            sum+=a[i];
        }
        result=sum;
        console.log(result);
    }

    else if(opr==='mul')
    {
        var product=1.0;
        for(var i=0;i<a.length;i++)
        {
            product*=a[i];
        }
        result=product;
        console.log(result);
    }
}