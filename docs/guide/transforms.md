# Animating Transforms

All transform tween methods are extension methods on `UnityEngine.Transform`. Add `using Tide;` to use them.

## Move

```csharp
// From current position to target
transform.Move(new Vector3(5f, 0f, 0f), duration: 0.5f);

// From an explicit start to target
transform.Move(Vector3.zero, new Vector3(5f, 0f, 0f), duration: 0.5f);

// Local space
transform.MoveLocal(new Vector3(0f, 2f, 0f), duration: 0.4f);
transform.MoveLocal(Vector3.zero, new Vector3(0f, 2f, 0f), duration: 0.4f);
```

## Rotate

```csharp
// World Euler angles
transform.Rotate(new Vector3(0f, 180f, 0f), duration: 1f);

// Shortest angular path
transform.Rotate(new Vector3(0f, 270f, 0f), 1f, rotateMode: RotateMode.Shortest);

// Local space
transform.RotateLocal(new Vector3(0f, 90f, 0f), duration: 0.5f);
```

::: tip Shortest rotation
`RotateMode.Shortest` adjusts the target so that the rotation always takes the shorter arc. Useful when angles cross the 0°/360° boundary.
:::

## Scale

```csharp
// From current scale to target
transform.Scale(Vector3.one * 1.5f, duration: 0.3f);

// From explicit start
transform.Scale(Vector3.one, Vector3.one * 2f, duration: 0.5f);
```

## Single-axis move

When you only need to animate one axis, use the single-axis overloads to avoid allocating a `Vector3`:

```csharp
using Tide;

transform.TransformOneAxis(AnimationType.TransformOneAxis.MoveX, to: 5f, duration: 0.4f);
transform.TransformOneAxis(AnimationType.TransformOneAxis.MoveLocalY, from: 0f, to: 3f, duration: 0.3f);
```

Available axes: `MoveX`, `MoveY`, `MoveZ`, `MoveLocalX`, `MoveLocalY`, `MoveLocalZ`.

## Move to screen position

Animate a world-space object so that its pivot aligns with a normalised viewport point (0–1):

```csharp
// Move to the centre of the screen
transform.MoveToScreen(new Vector2(0.5f, 0.5f), duration: 0.6f);

// Move so the left edge of a local anchor aligns with the right side of the screen
transform.MoveAnchorToScreen(localAnchor: new Vector3(-1f, 0f, 0f), screenAnchor: new Vector2(1f, 0.5f), duration: 0.5f);
```

## Renderer color & opacity

```csharp
// Fade out a SpriteRenderer
renderer.Opacity(to: 0f, duration: 0.3f);
renderer.Opacity(from: 1f, to: 0f, duration: 0.3f);

// Tint
renderer.Color(Color.red, duration: 0.2f);
renderer.Color(Color.white, Color.red, duration: 0.2f);
```

## Blend shapes

```csharp
// From current weight to target
skinnedRenderer.BlendShape(blendShape: 0, to: 100f, duration: 0.5f);

// From an explicit start
skinnedRenderer.BlendShape(blendShape: 0, from: 0f, to: 100f, duration: 0.5f);
```

## Generic float tween

For any property not covered by a dedicated overload:

```csharp
Animate.Generic(
    method: v => myComponent.customValue = v,
    from: 0f,
    to: 1f,
    duration: 0.5f,
    easingType: Easing.Type.SineInOut,
    mode: Mode.Time,
    callback: () => Debug.Log("done")
);
```

## Material properties

```csharp
// Float property
Animate.Material(renderer, "_Dissolve", from: 0f, to: 1f, duration: 1f);

// Color property
Animate.Material(renderer, "_EmissionColor", Color.black, Color.white * 2f, duration: 0.5f);

// Integer property
Animate.Material(renderer, "_StencilRef", from: 0, to: 1, duration: 0f);
```
