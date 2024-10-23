## Test Specification

### How the tests are performed

The tests are performed manually and recorded by hand in a table

#### Test Environment

The tests are performed on a Asus VivoBook 14/15 laptop with the following specifications:

- Processor: AMD Ryzen 5 4500U
- RAM: 8GB DDR4
- Storage: 512GB SSD
- OS: Windows 11 Home

Browser: Google Chrome

### Test Cases

#### Test Case 1: Player Movement

**1.1: The player moves left when the "a" key is pressed**

Steps:

1. Start the game
2. Press the "a" key

Expected Result: The player moves left

**1.2: The player moves right when the "d" key is pressed**

Steps:

1. Start the game
2. Press the "d" key

Expected Result: The player moves right

**1.3: The player jumps when the "space" key is pressed**

Steps:

1. Start the game
2. Press the "space" key

Expected Result: The player jumps

**1.4 The player can not jump when the player is in the air**

Steps:

1. Start the game
2. Press the "space" key
3. Before the player lands, press the "space" key again

Expected Result: The player does not jump a second time

**1.5: Pressing both "a" and "d" keys at the same time does not move the player**

Steps:

1. Start the game
2. Press the "a" and "d" keys at the same time

Expected Result: The player does not move

#### Test Case 2: End Message

**2.1: The game displays a message when the player reaches the end of the level**

Steps:

1. Start the game with the players position set to (65, -6100)
2. Make the player jump

Expected Result: control is taken from the player and the player start floating upwards. in the background a series of messages are displayed.

**2.2: Reaching the end of the message pulls the player into a black hole**

Steps:

1. repeat Test Case 2.1
2. Wait for the player to float to the top of the map.
3. The player floats over a black hole

Expected Result: The player is pulled into the black hole

**2.3: Player is navigated to the final screen after being pulled into the black hole**

Steps:

1. repeat Test Case 2.2
2. Wait for the animation to finish

Expected Result: The player is navigated to the final screen

#### Test Case 3: Dissapearing Platforms

**3.1: A platform disappears when the player touches them**

Steps:

1. Start the game with the players position set to (65, -5000)
2. Move the player to the left acrossthe bridge

Expected Result: A platform disappears when the player touches it and falls down
