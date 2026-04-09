# Chaining & Control

## Awaiting a single tween

Any `Surfer` can be `await`ed in an async method:

```csharp
async void Intro()
{
    await transform.Move(new Vector3(0f, 3f, 0f), 0.5f, Easing.Type.CubicOut);
    await canvasGroup.Opacity(1f, 0.2f);
    Debug.Log("sequence complete");
}
```

## Running tweens in parallel

`Surfer.WhenAll` waits for multiple tweens to finish:

```csharp
async void Animate()
{
    await Surfer.WhenAll(
        transform.Move(new Vector3(5f, 0f, 0f), 0.6f),
        canvasGroup.Opacity(0f, 0.4f),
        transform.Scale(Vector3.zero, 0.6f, Easing.Type.CubicIn)
    );

    gameObject.SetActive(false);
}
```

## Delay

Add a delay before a tween starts with `SetDelay`:

```csharp
transform.Move(new Vector3(0f, 2f, 0f), 0.4f).SetDelay(0.5f);
```

You can combine delay with await:

```csharp
await transform.Move(new Vector3(0f, 2f, 0f), 0.4f).SetDelay(0.5f);
```

## OnComplete callback

If you prefer callbacks over async, assign `OnComplete` on the returned `Surfer`:

```csharp
transform.Move(new Vector3(5f, 0f, 0f), 0.5f).OnComplete += () =>
{
    Debug.Log("arrived");
};
```

## Easing

Pass any `Easing.Type` as the last argument to most tween methods:

```csharp
transform.Scale(Vector3.one * 2f, 0.3f, Easing.Type.BackOut);
```

Or apply a custom `AnimationCurve` after creation:

```csharp
Surfer tween = transform.Move(new Vector3(3f, 0f, 0f), 1f);
tween.SetCustomEasing(myAnimationCurve);
```

::: warning Custom curve and Easing.Type.Custom
`Surfer.SetCustomEasing()` stores the curve per-tween and is safe for concurrent use.
`Easing.Type.Custom` reads from a global `Easing.CustomCurve` field — avoid using it when multiple tweens with different curves run simultaneously.
:::

## Override — stopping competing tweens

Register a tween against a target and call `Override()` to stop any other tweens on that same target:

```csharp
// Only the most recent Move survives
transform.Move(new Vector3(5f, 0f, 0f), 1f)
    .WithTarget(transform)
    .Override();
```

::: tip RectTransform and CanvasGroup register automatically
UI tweens on `RectTransform` and `CanvasGroup` call `.WithTarget()` internally. For world-space `Transform` tweens you must call `.WithTarget(transform)` yourself.
:::

## KillAll — cancel all tweens on a target

```csharp
// Stop every tween registered against this transform
Surfer.KillAll(transform);
```

## Cancellation token

Integrate with .NET cancellation:

```csharp
var cts = new CancellationTokenSource();

await transform.Move(new Vector3(10f, 0f, 0f), 3f)
    .WithCancellation(cts.Token);

// Elsewhere — stops the tween and cancels the await
cts.Cancel();
```

## Checking and stopping manually

```csharp
Surfer tween = transform.Move(new Vector3(5f, 0f, 0f), 2f);

if (tween.Running())
    tween.Stop();
```
