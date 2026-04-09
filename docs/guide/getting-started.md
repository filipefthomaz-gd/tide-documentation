# Getting Started

## What is TIDE?

TIDE (**Transitional Interactive Dynamic Elements**) is OCEAN's tweening system. It provides a fluent, coroutine-based API for smoothly animating any Unity property — position, rotation, scale, UI, post-processing, audio — with 25 built-in easing types and full async/await support.

No `MonoBehaviour` subclassing or Inspector setup is required. Import the namespace and call.

## Your first tween

Move a GameObject from its current position to a target over half a second:

```csharp
using Tide;

transform.Move(new Vector3(3f, 0f, 0f), duration: 0.5f);
```

Add an easing curve:

```csharp
transform.Move(new Vector3(3f, 0f, 0f), 0.5f, Easing.Type.CubicOut);
```

Every tween returns a `Surfer` — a handle you can hold, await, or chain:

```csharp
Surfer tween = transform.Move(new Vector3(3f, 0f, 0f), 0.5f, Easing.Type.CubicOut);
```

## Awaiting a tween

Tweens integrate with C# async/await out of the box:

```csharp
async void PlaySequence()
{
    await transform.Move(new Vector3(3f, 0f, 0f), 0.5f, Easing.Type.CubicOut);
    await transform.Scale(Vector3.one * 1.5f, 0.3f, Easing.Type.BackOut);
    await transform.Move(Vector3.zero, 0.5f, Easing.Type.CubicIn);
}
```

Each line waits for the previous tween to finish before starting the next.

## Stopping a tween

```csharp
Surfer tween = transform.Move(new Vector3(10f, 0f, 0f), 2f);

// later...
tween.Stop();
```

## Checking if a tween is running

```csharp
if (tween.Running())
    Debug.Log("Still going.");
```

## Namespaces

| Namespace | Contents |
|-----------|----------|
| `Tide` | `Animate`, `Surfer`, `Easing`, `TweenData` |
| `Tide.UI` | `AnimateUI` — Image, TMP, CanvasGroup, RectTransform |
| `Tide.PostProcessing` | `AnimatePostProcessing` — Volume, VolumeProfile |
| `Tide.Audio` | `TweenAudio` — AudioSource, HYDRA AudioGroup |
| `Tide.Animation` | `TweenAnimation` — Playable graph weights |

## Next steps

- [Animating Transforms](/guide/transforms) — Move, rotate, scale in world and local space
- [Animating UI](/guide/ui) — Image, TMP, CanvasGroup, RectTransform
- [Chaining & Control](/guide/chaining) — Delay, WhenAll, Override, cancellation
- [Post-Processing & Audio](/guide/post-processing) — Volume and audio volume tweens
