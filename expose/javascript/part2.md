# Part 2
### Questions
1. Line 12 should print 3 in this case since it is printing the value of i after it has failed the condition of the for loop which is being lesser than the length of prices which in this case is 3
2. Line 13 should print 150 since the last value that discounted prices had is the 1 - discount which is 0.5 multiplied by last value in the prices array which is 300
3. this should also print 150 since the last value that final price stored in the loop is the last value of discountedPrice * 100 / 100  the rounding doesn't change anything since it is an int result.
4. The function will return an array with the following values [50, 100, 150]. This is because each value in the prices array is multiplied with the 1-discount to get the discounted price so [100, 200, 300] are each multiplied by 0.5 thus we get the result above.
5. There will be an error because there is an attempt to access i outside of its defined scope(inside the for loop).
6. This would also result in an error since we are attempting to access discountedPrice outside of the defined scope of withing the for loop.
7. This would print 150 since the last value that final price stored in the loop is 150 * 100 / 100 which would result in 150 this doesn't give an error since finalPrice is defined withing the scope of the funtion discountedPrices
8. The function will return an array with the following values [50, 100, 150]. This is because each value in the prices array is multiplied with the 1-discount to get the discounted price so [100, 200, 300] are each multiplied by 0.5 thus we get the result above.
9. Line 11 woould be an error since i is being accessed outide of its scope which is within the for loop.
10. it should print 3 since length of prices is 3
11. This funtion will also output the array with values [50, 100, 150]. This happens because each value in prices is multiplied by 1-discount, this is the same explanation as before there shouldn't be any errors. 
12. Q12:
    1. student.name
    2. student["Grad Year"]
    3. student.greeting()
    4. student["Fav Teacher"].name
    5. student.courseLoad[0]
13. Q13:
    1. '32'
    2. 1
    3. 3
    4. '3null'
    5. 4
    6. 3
    7. '3undefined'
    8. NaN
14. Q14:
    1. true
    2. false
    3. true
    4. false
    5. false
    6. true
15. == does type conversion if necessary then compares while === directly compares the values without ttype conversion
16. in file part2-question16.js
17. The return value of modifyArray will be an array with values [2, 4, 6]. This happens because we go through each element of the input array in the for loop and call doSomething on it. doSomething takes its input and multiplies it by 2. so for each element in input it is doubled and added to the output array thus we end up with the above output.
18. in file part2-question18.js
19. this should output 1 then 4 then 3 then 2.