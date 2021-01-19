Instructions

- Create a new instance of the Scorecard class (e.g. myScore = new Scorecard)
- To add rolls to the scorecard use the addRoll(FrameRoll, pinsKnockedDown) function. E.g. A player knocks down 5 pins in frame 1 roll 1 enter myScore.addRoll(1.1, 5) You cannot enter more than one turn at a time.
- Use the total(x) function to output your score with x being the frame you want the score for.
  E.g. If you want the total of frame 5 enter total(5)
- To print the entire scorecard use print(y) where y is the frame you want the scorecard up to
- To reset the scorecard to zero all entries use resetScorecard()


// $(document).ready(function() {
//   scorecard = new Scorecard();
//   $('#Score').text(scorecard.total(10));
//
//   $('#ResetScorecard').on('click', function() { // event listener
//     scorecard.resetScorecard(); // update model
//     $('#Score').text(scorecard.total(10)); // update view
//   });
//
//     $("#my-form").submit(function() {
//     event.preventDefault();
//     let turn = $('#fname').val();
//     let pins = $('#pins').val();
//     scorecard.addRoll(turn, pins)
//     console.log(scorecard.print(parseInt(turn)))
//     // $('#Score').text(scorecard.print(parseInt(turn)))
//   });
//
// });
