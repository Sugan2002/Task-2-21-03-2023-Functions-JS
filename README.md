# EXPERIMENT-09
# <p align="center"> Finding ancestor and offspring </P>

## Aim: 
The aim of the given code is to create a function that takes a number and a character representing the gender ("m" for male, "f" for female) and returns the name of an ancestor (m/f) or descendant (m/f) based on the input values.

## Algorithm:
1. Create a function named check that takes two parameters: num (the 
number representing the generation) and gen (the character 
representing the gender).
2. Inside the function, check the value of gen to determine whether it 
represents a male or female.
3. If gen is equal to 'f', execute the following steps:
• Use a switch statement to check the value of num:
• If num is -1, print "Mother".
• If num is -2, print "Grand Mother".
• If num is -3, print "Great Grand Mother".
• If num is 0, print "ME".
• If num is 1, print "Daughter".
• If num is 2, print "Grand Daughter".
• If num is 3, print "Great Grand Daughter".
4. If gen is equal to 'm', execute the following steps:
• Use a switch statement to check the value of num:
• If num is -1, print "Father".
• If num is -2, print "Grand Father".
• If num is -3, print "Great Grand Father".
• If num is 0, print "ME".
• If num is 1, print "Son".
• If num is 2, print "Grand Son".
• If num is 3, print "Great Grand Son".
5. Close the switch statement and the if-else statement.
6. Call the check function with the arguments 1 and 'f'.

## Programm:
```
function check(num,gen)
{
 if(gen=='f')
 {
 switch(num)
 {
 case -1:
 console.log("Mother")
 break
 case -2:
 console.log("Grand Mother")
 break
 case -3:
 console.log("Great Grand Mother")
 break
 case 0:
 console.log("ME")
 break
 
 case 1:
 console.log("Daughter")
 break
 case 2:
 console.log("Grand Daughter")
 break
 
 case 3:
 console.log("Great Grand Daughter")
 break
 }
 }
 else if(gen == 'm')
 {
 switch(num)
 {
 case -1:
 console.log("Father")
 break
 case -2:
 console.log("Grand Father")
 break
 case -3:
 console.log("Great Grand Father")
 break
 case 0:
 console.log("ME")
 break
 
 case 1:
 console.log("Son")
 break
 case 2:
 console.log("Grand Son")
 break
 
 case 3:
 console.log("Great Grand Son")
 break
}
}
}
check.call(this,1,'f')
```

## Output:

![image](https://github.com/Sugan2002/mern-Ancestor-Offspring-09/assets/77089743/5eef1adb-36cd-4303-8736-f61fd2873643)

## Results:
The output of the given code, when calling the check function with 1 as num and 'f' as gen, will be "Daughter".
