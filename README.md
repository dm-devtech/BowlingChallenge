## Bowling Scorecard

#### Instructions
Clone the repo then open index.html (in the App folder) and do the following in the browser console:

1. Create a new instance of the Scorecard class (e.g. myScore = new Scorecard)
2. To add rolls to the scorecard use the addRoll(FrameRoll, pinsKnockedDown) function.
   E.g. A player knocks down 5 pins in frame 1 roll 1 enter myScore.addRoll(1.1, 5)
   You cannot enter more than one turn at a time.
3. Use the total(x) function to output your score with x being the frame you want the score for.    
   E.g. If you want the total of frame 5 enter total(5)
4. To print the entire scorecard use print(y) where y is the frame you want the scorecard up to
5. To reset the scorecard to zero all entries use resetScorecard()

#### Tech used:
- Javascript
- Testing framework: Jasmine

#### Running tests
- To run tests clone the repo
- Copy the path of SpecRunner.html (in the App folder)
- Paste the file link into your web browser

#### Console code example
```
myScore = new Scorecard
myScore.addRoll(1.1, 5)
myScore.addRoll(1.2, 5)
myScore.addRoll(2.1, 8)
myScore.addRoll(2.2, 0)
myScore.addRoll(3.1, 3)
myScore.addRoll(3.2, 4)

myScore.total(3)
=> 33
```

#### Future features:
- Interface using jQuery

#### Challenge specifications
- [Link to original challenge](https://github.com/makersacademy/bowling-challenge)
