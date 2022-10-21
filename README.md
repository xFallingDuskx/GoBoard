# GoBoard
A scoreboard to keep track of the spades card game games.

## Sources
- [Partner icons created by tuktukdesign - Flaticon](https://www.flaticon.com/free-icons/partner)
- [Spades Glossary](https://www.thegameofspades.com/pages/spades-glossary-1)
- [Rules of Spades](https://bicyclecards.com/how-to-play/spades/)


## Necessary Features:
- [ ] Get game information: 
    - [ ] # of players (2 or 4)
    - [ ] Names of players on each team
    - [ ] # of bids for board - default set to 4, but allow options of 2 and 3 as well
    - [ ] How many points until end game (winning sum)
        - [ ] Provide default winning sums of 200, 300, 400, and 500
        - [ ] Allow users to enter their winning sum by increasing/decreasing current score by 10 and 100 starting from 100
            - [ ] Prevent user from entering a score below 100
- [ ] Track team scores and bags in a table
- [ ] Teams can select their bid prior to each round: # of books, nil bid, or blind nil
    - [ ] Set minimum (1) and maximum (13) bids for each team
    - [ ] Prevent a total number of bids greater than 13
- [ ] Users can enter the results of the round
- [ ] Scoreboard updates automatically according to round results
- [ ] Winning team is displayed somewhere on-screen
- [ ] Users can reset the round in case of misdeal or any other issue
- [ ] Game is stopped when when a team has won and notify players
    - [ ] Users have the option to continue playing to a higher score

## Additional Features:
- [ ] Offer explanation of rules of the game to users if they do not know
- [ ] Able to restart game at any point or at end of game - double confirmation here
- [ ] Users are allowed to manually edit the scoreboard
- [ ] Users are allowed to edit their names
- [ ] Option to show details behind current score by displaying score after each round and quick description of that round
- [ ] Certain functions (i.e. reset button) are indicated to users before 1st round in a tutorial-like fashion
    - [ ] Users have the chance to skip this
- [ ] Game stats (i.e # of nil bids, blind nil bids, rounds w/point decrease) are displayed at end of game
- [ ] Display quick animations for...
    - [ ] Going board
    - [ ] Winning game
    - [ ] Collecting 10 bags, thus losing 100 points
    - [ ] Nil bid
    - [ ] Blind nil bid
    - [ ] Reneging 
