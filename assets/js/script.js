function printRelation(level, gender)
{
    let relation;
    if(gender == 'f' && level > 0)
    {
        relation = "daughter"
    }
    else if(gender == 'f' && level < 0)
    {
        relation = "mother"
    }
    else if(gender == 'm' && level > 0)
    {
        relation = "son"
    }
    else
    {
        relation = "father"
    }

    switch(level)
    {
        case -3:
        case 3:
            console.log("great grand" + relation);
            break;
        case -2:
        case 2:
            console.log("grand" + relation);
            break;
        case -1:
        case 1:
            console.log(relation)
            break;
        case 0:
            console.log("me");
            break;
    }

}

let level = 2
let gender = 'f'

printRelation(level, gender)