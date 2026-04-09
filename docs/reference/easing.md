# Easing Types

All easing functions map a normalised time value (0–1) to a progress value (0–1). Pass any `Easing.Type` as the last argument to tween methods.

```csharp
transform.Move(target, 0.5f, Easing.Type.CubicOut);
```

## Overview

| Type | Behaviour |
|------|-----------|
| `Linear` | Constant speed — no acceleration |
| `QuadraticIn` | Slow start, accelerates (t²) |
| `QuadraticOut` | Fast start, decelerates (t²) |
| `QuadraticInOut` | Slow at both ends (t²) |
| `CubicIn` | Slow start, accelerates (t³) |
| `CubicOut` | Fast start, decelerates (t³) — **good default** |
| `CubicInOut` | Slow at both ends (t³) |
| `QuaternaryIn` | Slow start, accelerates (t⁴) |
| `QuaternaryOut` | Fast start, decelerates (t⁴) |
| `QuaternaryInOut` | Slow at both ends (t⁴) |
| `ExpoIn` | Barely moves then launches |
| `ExpoOut` | Rushes then settles |
| `ExpoInOut` | Very slow start and end |
| `SineIn` | Gentle acceleration (sine wave) |
| `SineOut` | Gentle deceleration (sine wave) |
| `SineInOut` | Smooth S-curve |
| `BackIn` | Pulls back before moving forward |
| `BackOut` | Overshoots then settles — **good for pop-in UI** |
| `BackInOut` | Pulls back at start, overshoots at end |
| `ElasticIn` | Spring oscillation at start |
| `ElasticOut` | Spring oscillation at end |
| `ElasticInOut` | Spring oscillation at both ends |
| `BounceIn` | Bounces at start |
| `BounceOut` | Bounces at end — **good for dropped elements** |
| `BounceInOut` | Bounces at both ends |
| `Custom` | Reads from `Easing.CustomCurve` (global — see warning below) |

## Recommendations by use case

| Use case | Recommended easing |
|----------|--------------------|
| UI panel sliding in | `CubicOut` or `QuadraticOut` |
| UI panel sliding out | `CubicIn` |
| Button pop / scale feedback | `BackOut` |
| Character jump arc (up) | `QuadraticOut` |
| Character jump arc (down) | `QuadraticIn` |
| Dropped item landing | `BounceOut` |
| Camera shake settle | `ElasticOut` |
| Health bar drain | `Linear` or `CubicOut` |
| Cinematic fade | `SineInOut` |

## Custom AnimationCurve

For full control, use `SetCustomEasing` on the `Surfer` handle:

```csharp
[SerializeField] AnimationCurve myCurve;

void Start()
{
    transform.Move(new Vector3(3f, 0f, 0f), 1f)
             .SetCustomEasing(myCurve);
}
```

This stores the curve per-tween and is safe when multiple tweens run concurrently with different curves.

::: warning Easing.Type.Custom
`Easing.Type.Custom` reads from the global `Easing.CustomCurve` static field. Avoid it when multiple tweens with different curves run at the same time — they share the same field. Prefer `SetCustomEasing` instead.
:::
