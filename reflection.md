## Reflection Code Quality / Clean Code

// write 4-6 sentences for each chapter reflecting over the qode quality of my code based on Clean Code and its concepts.

### Chapter 2: Naming Conventions

A large focus and thought has been put to applying the naming conventions in my code. I am using intention revealing names and not using any abbreviations for the most part. One exception is the `ctx` variable that represent the current `CanvasREnderingContext2D`, beacause while it could be renamed to `context`, using `ctx` is a common convention in the Canvas API. So in order to keep it familiar to the most users I have decided to keep it as `ctx`

```typescript
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

### Chapter 7: Error handling

### Chapter 8: Boundaries

### Chapter 9: Unit Tests

### Chapter 10: Classes

### Chapter 11: Systems

### Chapter 11: Security
