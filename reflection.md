## Reflection Code Quality / Clean Code

// write 4-6 sentences for each chapter reflecting over the qode quality of my code based on Clean Code and its concepts.

### Chapter 2: Naming Conventions

A large focus and thought has been put to applying the naming conventions in my code. I am using intention revealing names and not using any abbreviations for the most part. One exception is the `ctx` variable that represent the current `CanvasREnderingContext2D`, beacause while it could be renamed to `context`, using `ctx` is a common convention in the Canvas API. So in order to keep it familiar to the most users I have decided to keep it as `ctx`

```typescript
// module: GameEngine.ts

/**
 * The main game engine class.
 * Handles logic and rendering of the game. keeps track of the game objects and the camera.
 * @class
 */
export class GameEngine {
  // The canvas element in which the game runs.
  #canvas: HTMLCanvasElement;

  // The 2d rendering contect of the canvas element in which the game runs.
  #ctx: CanvasRenderingContext2D;

  // ...
}
```

Some naming that could be improved is in the `#notifyCollisions` method. Specifically the parameters `objA` and `objB` which are abbreviated and does not reveal any intentions. I could name them `firstObject` and `secondObject` or `objectA` and `objectB` to make it more clear what they represent. Or even `collisionBodyA` and `collisionBodyB` to make it even more clear that they are collision bodies.

```typescript
// module: GameEngine.ts

/**
 * Notifies the objects of the collision.
 * @param objA the first object in the collision.
 * @param objB the second object in the collision.
 * @returns void
 */
#notifyCollisions(objA: CollisionBody, objB: CollisionBody) {
  objA.onCollision(objB);
  objB.onCollision(objA);
}

```

### Chapter 3: Functions

For this chapter I have put the most attention to keeping my methods small and on the same abstraction level. I find that I like this approach since the readability and understandability when looking at a single method increases. Although the code volume explodes making the classes less readable.

```typescript
// app: Player.ts

override process(delta: number): void {
    if (this.isBeingSucked) {
      this.#handleBeingSucked(delta);
    } else if (this.hasWon) {
      this.#handleHasWon(delta);
    } else {
      this.#handleBumping(delta);
      this.#handleGravity(delta);
      this.#handleUserInitiatedMovement(delta);
      this.#handleSpeedLimits(delta);
      this.#applyVelocity(delta);
      this.#handleSpeedDecay(delta);
    }
  }
```

I sometimes struggle with keeping the function arguments low. In some places i have tried mitigate this by creating object for related information that can be passed instead. but that feels more like moving the problem elsewhere.

```typescript
// module: Panel.ts

export class Panel extends UiObject {
  #width: number;
  #height: number;
  #color: string | CanvasGradient | CanvasPattern;
  #borderOptions: BorderOptions;

  constructor(position: Vector2D, fixed: boolean, width: number, height: number, color: string | CanvasGradient | CanvasPattern, borderOptions: BorderOptions) {
    super(position, fixed);
    this.#width = width;
    this.#height = height;
    this.#color = color;
    this.#borderOptions = borderOptions;
  }
  //...
}
```

```typescript
// module: BorderOptions.ts

export class BorderOptions {
  #color: string | CanvasGradient | CanvasPattern;
  #width: number;
  #radius: number;

  constructor(color: string | CanvasGradient | CanvasPattern, width: number, radius: number) {
    this.#color = color;
    this.#width = width;
    this.#radius = radius;
  }
  //...
}
```

### Chapter 4: Comments

I have used jsdoc comments for the majority of my classes and methods in my module, but have chosen to not use them in the app since I could not use them usefully and mostly just repeated the information given by the name of the method and typescript parameter types. For example this method in the GameEngine class.

```typescript
// module: GameEngine.ts

  /**
   * Applies the camera transformation to the canvas.
   * @returns void
   */
  #applyCameraTransformation() {
    //...
  }
```

A place where I have used inline comments to offer clarification and explanation of intent is the `#handleFacingDirection` method in the Player class. The comments are used to explain what the effect of the scaling is. This could be inproved by breaking out the scaling into seperate methods such as `#flipToRight` and `#flipToLeft` to make the code more readable and understandable.

```typescript
// app: Player.ts

#handleFacingDirection(ctx: CanvasRenderingContext2D): void {
  if (this.#wantToMoveRight()) {
    // flip to the right
    ctx.scale(-1, 1);
  } else if (this.#wantToMoveLeft()) {
    // flip to the left
    ctx.scale(1, 1);
  } else if (this.#velocity.x > 0) {
    // flip to the right
    ctx.scale(-1, 1);
  }
  }
```

### Chapter 5: Formatting

Since I am using the prettier plugin in VSCode that formats my documents for me, there is not much to say about the formatting of my application. I have tried to keep good vertical distance, seperating unrelated code and keeping related code close to each other. I have also made effort to have methods declared in my classes in the same order they are called. Meaning keeping methods that are called by other methods below said methods. But I have not been consistent with this and could improve on this. For example in the Player class the `#applyVelocity` and `#handleBumping` methods is called by the `#process` method but are declared above it, breaking this rule

```typescript
// app: Player.ts
  #handleBumping(delta: number): void {
    if (this.#bumpedHead()) {
      this.#velocity = new Vector2D(this.#velocity.x, 0);
    }
    if (this.#bumbedLeft() && this.#velocity.x < 0) {
      this.#velocity = new Vector2D(0, this.#velocity.y);
    }

    if (this.#bumpedRight() && this.#velocity.x > 0) {
      this.#velocity = new Vector2D(0, this.#velocity.y);
    }
  }

  #applyVelocity(delta: number): void {
    this.position = this.position.add(this.#velocity.multiply(delta));
  }

  override process(delta: number): void {
    if (this.isBeingSucked) {
      this.#handleBeingSucked(delta);
    } else if (this.hasWon) {
      this.#handleHasWon(delta);
    } else {
      this.#handleBumping(delta);
      this.#handleGravity(delta);
      this.#handleUserInitiatedMovement(delta);
      this.#handleSpeedLimits(delta);
      this.#applyVelocity(delta);
      this.#handleSpeedDecay(delta);
    }
  }
```

### Chapter 6: Objects and Data Structures

In my code, I have not been following the law of demeter as well as I should have. When using the `GameContext` singleton, I often both get the instance and then call a method on it in the same line, creating a so called "Train Wreck". To follow the law of demeter it would have been better if I first save the instance in a variable and then call the method on that variable.

```typescript
// app: Player.ts
  #wantToMoveDown(): boolean {
    return GameContext.getInstance().isPressed('s');
  }
```

The part about the different use cases for using OOP vs using data structures/procedural programming was interesting. I have almost exclusively used OOP to create the functionality, since I think that using classes to encapsulate the functionality of the game objects makes the code easier to resason about and keep seperations of concerns. For example in the case of collision shapes, it is not often that I would need to add new functionality to the collision shapes, but I will more likely need to add more shapes, so keeping them as objects instead of data structures makes sense to me. It also simplifies the structure the classes that depend on the collision shapes, since they can just call the methods on the collision shapes instead of having to know how to handle the data structure.

```typescript
// module: CollisionBody.ts

  /**
   * Checks if this CollisionBody is colliding with another CollisionBody.
   * @param other The other CollisionBody to check against.
   * @returns True if the CollisionBodies are colliding, false otherwise.
   */
  isCollidingWith(other: CollisionBody) {
    if (this.#collisionLayers.overlaps(other.getCollisionLayers())) {
      return this.collisionShape.intersects(other.collisionShape);
    }
  }
```

### Chapter 7: Error handling

In my code, I have been really lax with error handling. i do not throw any exceptions or use any asserts to check for errors. Instead I have written the code in such a way that the user have to use the module code correctly. Using the module in the wrong way may throw low level errors or simply hide the errors by returning `undefined` or `null`. This is not a good practice and something I would like to refactor if i have time. The biggest offender for this is the GameContext class. It relies on certain attribues being set before using it to work correctly. If the user does not set these attributes, methods on the GameContext class will return null.

```typescript
// module: GameContext.ts

  getCanvasSize() {
    if (this.#gameEngine?.canvas) {
      return new Vector2D(
        this.#gameEngine.canvas.width,
        this.#gameEngine.canvas.height
      );
    } else {
      return null;
    }
  }
```

### Chapter 8: Boundaries

For my module, the interface that is provided to the user is very wide to cover many use cases, which might make the learning curve for using the module steeper. I have tried to mitigate this by keeping the interfaces as closed as possible, only exposing the methods and properties that the user should be able to use. The exception is the `draw` and `update` methods on the `GameObject` class, which are public in order for the game engine to call them. This may create confusion for the user, since they are not supposed to touch these methods, but override the `process`and `render` methods instead.

```typescript
  /**
   * a wrapper for the process method that is called on the GameObject and all of its children by the game engine. DO NOT OVERRIDE!
   * @param delta the time since the last frame.
   * @returns void
   */
  update(delta: number) {
    this.process(delta);
    this.#updateChildren(delta);
  }

  /**
   * The method to override to affect the behavior of the GameObject.
   * @param delta the time since the last frame.
   * @returns void
   */
  process(delta: number) {}
```

In the module I have not created a wrapper or adapter for the Canvas API and the respective `CanvasRenderingContext2D`. I have instead used the `CanvasRenderingContext2D` directly in the game objects `render`-methods. This is something I would like to inprove on, since it would both be easier to use, nad can limit certain features of the API that may break the module. It is also good for if the Canvas API changes, since I can just change the adapter, meaning the users won't have to change their code.

```typescript
// app: Player.ts

  override render(ctx: CanvasRenderingContext2D): void {
    ctx.save();

    ctx.translate(this.position.x, this.position.y);

    if (this.isBeingSucked) {
      this.#rotateAndShrink(ctx);
    } else if (!this.hasWon) {
      this.#handleFacingDirection(ctx);
    }

    this.#drawSprite(ctx);

    ctx.restore();
  }
```

### Chapter 9: Unit Tests

before reading Clean Code, I have had a misconception about test driven development(TDD). I believed that TDD meant writing every test case for every requirement and feature before writing the code. This made me not see the benefits of TDD, and not use it when developing. Now that I undterstand that TDD is about keeping the tests just one step ahead of the code, I have developed an interest of using it in my future projects.

For my module, I have written unit test for the public methods of the classes exclusively. I have not written tests for the private methods, since they are mostly called by the public methods and are tested indirectly. I believe the unit tests I have written for the module are clean and onlt testing one concern at a time. However, I have not been consistent with testing bad input and edge cases, which is something I would like to improve on.

```typescript
// module: GameEngine.test.ts
test("GameEngine start does not throw an error", () => {
  const canvas = document.createElement("canvas");
  const scene = new TestGameObject(new Vector2D(0, 0));
  const gameEngine = new GameEngine(canvas, scene);
  expect(() => {
    gameEngine.start();
  }).not.toThrow();
});
```

In some cases, i have not followed the rule of one assert per test. For example when testing the `onCollision` method of the `CollisionBody` class, I have used two asserts in the same test. This is because the two asserts are closely related and are testing the same concern(the position x and y coordinates). I could have split the test into two tests, but I think that would make the test harder to read and understand, and they would do the exacly same thing up until the last line. So in a way I am following the "fast" part in F.I.R.S.T rules.

```typescript
test("CollisionBody onCollision handles collision with StaticCollisionBody", () => {
  const collisionBody1 = new TestCollisionBody(new Vector2D(0, 0), new RectangleCollisionShape(new Vector2D(0, 0), 10, 10), new CollisionLayers());
  const collisionBody2 = new TestStaticCollisionBody(new Vector2D(5, 5), new RectangleCollisionShape(new Vector2D(0, 0), 10, 10), new CollisionLayers());

  collisionBody1.onCollision(collisionBody2);

  expect(collisionBody1.position.x).toEqual(0);
  expect(collisionBody1.position.y).toEqual(-5);
});
```

### Chapter 10: Classes

Most of my classes are small and have single responsibilities. Atleast i believe so. But since all the classes that extend `GameObject` and down inherit functionality from their parent, counting those responsibilities one could argue that the classes have multiple responsibilities. For example the `Player` class has the responsibility of handling the player movement(implemented by itself), collision detection(since it extends `CollisionBody`), rendering and updating(since `CollisionBody` extends `GameObject`).

```typescript
// app: Player.ts

  override process(delta: number): void {
    if (this.isBeingSucked) {
      this.#handleBeingSucked(delta);
    } else if (this.hasWon) {
      this.#handleHasWon(delta);
    } else {
      this.#handleBumping(delta);
      this.#handleGravity(delta);
      this.#handleUserInitiatedMovement(delta);
      this.#handleSpeedLimits(delta);
      this.#applyVelocity(delta);
      this.#handleSpeedDecay(delta);
    }
  }
```

```typescript
// module: CollisionBody.ts

  /**
   * Checks if this CollisionBody is colliding with another CollisionBody.
   * @param other The other CollisionBody to check against.
   * @returns True if the CollisionBodies are colliding, false otherwise.
   */
  isCollidingWith(other: CollisionBody) {
    if (this.#collisionLayers.overlaps(other.getCollisionLayers())) {
      return this.collisionShape.intersects(other.collisionShape);
    }
  }
```

```typescript
// module: GameObject.ts

  /**
   * a wrapper for the process method that is called on the GameObject and all of its children by the game engine. DO NOT OVERRIDE!
   * @param delta the time since the last frame.
   * @returns void
   */
  update(delta: number) {
    this.process(delta);
    this.#updateChildren(delta);
  }

  /**
   * The method to override to affect the behavior of the GameObject.
   * @param delta the time since the last frame.
   * @returns void
   */
  process(delta: number) {}
```

most of my classes are kept small, but the GameEngine class and the GameContext class are quite large. The GameEngine class is responsible for handling the game loop, updating and rendering the game objects and handling the camera. The GameContext class is responsible for handling the user input and giving game objects access to the canvas and game engine. I have tried to keep the classes as small as possible, but since they are the main classes in the module, they have to handle a lot of different concerns. Maybe they could be modularized into sub components, but I think that would make the code harder to understand and maintain.

### Chapter 11: Systems

I am using dependency injection in my module by providing the game engine to the GameContext class at runtime with a setter. This means the GameContext class is not responsible for creating the GameEngine class, but instead gets it provided to it. This makes the GameContext class more flexible, since me or another developer can provide a different implementation of the GameEngine class if needed.

```typescript
// module: GameContext.ts

  private constructor() {}

  // ...

  /**
   * Sets the game engine.
   * @param gameEngine The game engine to set.
   * @returns void
   */
  setGameEngine(gameEngine: GameEngine) {
    this.#gameEngine = gameEngine;
    this.#addEventListeners();
  }
```

I also use dependency injection in the module by providing the `CanvasRenderingContext2D` to the game objects `draw`-methods. This makes the game objects more flexible, since they can be rendered to different contexts.

```typescript
// app: Player.ts

  /**
   * Draws the scene and all of its children. for rendering.
   * @returns void
   */
  #draw() {
    this.#applyCameraTransformation();
    this.#scene.draw(this.#ctx);
    this.#resetCameraTransformation();
  }
```

The other parts of chapter 11 did not seem applicable to reflect about regarding my application, since I am not using Java, and the application is not large enough to have dirrefent domains.
