# Big Fish

Background and Overview

Big Fish is a simple fishing game where a player can catch different types of fish.

### Functionality & MVPs

In Big Fish, players will be able to:
- [ ] Select different fishing hooks, rods, and bait
- [ ] Discover different types of fish
- [ ] Catch different types of fish
- [ ] Complete the game by catching the Big Fish
- [ ] View instructions on how to play

### Wireframes

![wireframe](https://github.com/kchansf5/big-fish/blob/master/big_fish_wireframe-01.png)

Big Fish will be played on a single screen with side menus that are toggled when a player clicks on the menu button. The main buttons/menu options available to the player will include:

- How-to-Play
- Switch Fishing Rod
- Switch Hook
- Switch Bait
- Fish!

Controls for this game are very simple and will be visually displayed on screen. The player will perform the 'fish' action by pressing the spacebar to activate an accuracy bar representing the player's probability of successfully catching a fish.

Architecture and Technologies

Big Fish will be built with the following technologies:

- Vanilla Javascript for overall structure and game logic
- HTML5 Canvas for DOM manipulation and rendering
- Webpack to bundle and serve up the various scripts

Additional scripts for Big Fish will include:

- screen.js: handles logic for creating and updating the necessary DOM elements
- equipment.js: handles logic for player's selection of rod, hook, and bait elements
- fish.js: handles logic for type of fish caught
- bar.js: handles logic for player's accuracy when fishing with the spacebar

### Implementation Timeline

#### Over the weekend:
- [ ] Review curriculum portion Javascript projects and become familiar with basic game building
- [ ] Research how to implement accuracy bar

**Day 1**: Setup webpack, create webpack.config and package.json files. Write basic entry file and rough out skeleton for scripts described above.

**Day 2**: Build functional accuracy bar

**Day 3**: Create logic backend. Build out functions to handle relationships between equipment selected and fish that can be caught based on equipment choice.

**Day 4**: Install controls for user to play the game. Style frontend and add artwork to make the game visually appealing and polished.

### Bonus Features

Big Fish can be added to and improved upon in many different ways:

- [ ] Expanded equipment selection and fish species
- [ ] Depth gauge to add another level of difficulty
- [ ] Animations, storyline, and plot to make the game more immersive
