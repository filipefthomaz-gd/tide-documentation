# API Reference

## Surfer

The tween handle returned by every factory method. All methods return `this` for chaining unless noted.

| Member | Type | Description |
|--------|------|-------------|
| `OnComplete` | `UnityAction` | Invoked when the tween finishes. |
| `Target` | `object` | The registered target for override/kill operations. |
| `Running()` | `bool` | Returns `true` if the tween is still playing. |
| `Stop()` | `void` | Stops the tween and unregisters it. |
| `SetDelay(float)` | `Surfer` | Pauses the tween for `delay` seconds before starting. |
| `SetEasing(Easing.Type)` | `Surfer` | Applies a built-in easing. |
| `SetCustomEasing(AnimationCurve)` | `Surfer` | Applies a custom curve (stored per-instance). |
| `SetMode(Mode)` | `Surfer` | Sets `Mode.Time` (default) or `Mode.Speed`. |
| `WithTarget(object)` | `Surfer` | Registers this tween against a target for `Override`/`KillAll`. |
| `Override()` | `Surfer` | Stops all other tweens on the same target. |
| `GetAwaiter()` | awaiter | Enables `await surfer;`. |
| `KillAll(object)` _(static)_ | `void` | Stops all tweens registered against `target`. |
| `KillAllExcept(object, Surfer)` _(static)_ | `void` | Stops all tweens on `target` except the given one. |
| `WhenAll(params Surfer[])` _(static extension)_ | `Task` | Awaitable — completes when all surfers finish. |
| `GetAwaitableTask()` _(extension)_ | `Task` | Converts a `Surfer` to a `Task`. |
| `WithCancellation(CancellationToken)` _(extension)_ | `Task` | Awaitable with cancellation support. |

---

## Animate (Tide namespace)

Extension methods on Unity types. All return a `Surfer`.

### Transform

| Method | Animates |
|--------|----------|
| `transform.Move(to, duration, easing)` | World position |
| `transform.Move(from, to, duration, easing)` | World position (explicit start) |
| `transform.MoveLocal(to, duration, easing)` | Local position |
| `transform.MoveLocal(from, to, duration, easing)` | Local position (explicit start) |
| `transform.Rotate(to, duration, easing, mode, rotateMode)` | World Euler angles |
| `transform.Rotate(from, to, duration, easing)` | World Euler angles (explicit start) |
| `transform.RotateLocal(to, duration, easing)` | Local Euler angles |
| `transform.RotateLocal(from, to, duration, easing)` | Local Euler angles (explicit start) |
| `transform.Scale(to, duration, easing)` | Local scale |
| `transform.Scale(from, to, duration, easing)` | Local scale (explicit start) |
| `transform.MoveToScreen(screenAnchor, duration, easing, cam)` | World position → normalised viewport |
| `transform.MoveAnchorToScreen(localAnchor, screenAnchor, duration, easing, cam)` | Local pivot → screen position |
| `transform.TransformOneAxis(axis, to, duration, easing)` | Single position axis |
| `transform.TransformOneAxis(axis, from, to, duration, easing)` | Single position axis (explicit start) |

### Renderer / Sprite

| Method | Animates |
|--------|----------|
| `renderer.Opacity(to, duration, easing)` | Material alpha |
| `renderer.Opacity(from, to, duration, easing)` | Material alpha (explicit start) |
| `renderer.Color(to, duration, easing)` | Material color |
| `renderer.Color(from, to, duration, easing)` | Material color (explicit start) |
| `Animate.Sprite<T>(renderer, animType, from, to, duration, easing)` | Color or alpha channel |

### SkinnedMeshRenderer

| Method | Animates |
|--------|----------|
| `skinnedRenderer.BlendShape(index, to, duration, easing)` | Blend shape weight |
| `skinnedRenderer.BlendShape(index, from, to, duration, easing)` | Blend shape weight (explicit start) |

### Material

| Method | Animates |
|--------|----------|
| `Animate.Material<T>(renderer, property, from, to, duration, easing)` | Named shader property (Color, float, or int) |

### Generic

| Method | Animates |
|--------|----------|
| `Animate.Generic(method, from, to, duration, easing, mode, callback)` | Any float value via callback |

---

## AnimateUI (Tide.UI namespace)

Extension methods on UI types. All return a `Surfer`. RectTransform and CanvasGroup tweens auto-register `.WithTarget()`.

### Image

| Method | Animates |
|--------|----------|
| `image.Opacity(to, duration, easing)` | Alpha |
| `image.Opacity(from, to, duration, easing)` | Alpha (explicit start) |
| `image.Color(to, duration, easing)` | Color |
| `image.Color(from, to, duration, easing)` | Color (explicit start) |
| `image.Fill(to, duration, easing)` | Fill amount |
| `image.Fill(from, to, duration, easing)` | Fill amount (explicit start) |

### TextMeshProUGUI

| Method | Animates |
|--------|----------|
| `text.Opacity(to, duration, easing)` | Text alpha |
| `text.Opacity(from, to, duration, easing)` | Text alpha (explicit start) |

### CanvasGroup

| Method | Animates |
|--------|----------|
| `canvasGroup.Opacity(to, duration, easing)` | Group alpha |
| `canvasGroup.Opacity(from, to, duration, easing)` | Group alpha (explicit start) |

### RectTransform

| Method | Animates |
|--------|----------|
| `rect.AnchorPos(to, duration, easing)` | `anchoredPosition` |
| `rect.AnchorPos(from, to, duration, easing)` | `anchoredPosition` (explicit start) |
| `rect.SizeDelta(to, duration, easing)` | `sizeDelta` |
| `rect.SizeDelta(from, to, duration, easing)` | `sizeDelta` (explicit start) |
| `rect.AnchorMin(to, duration, easing)` | `anchorMin` |
| `rect.AnchorMax(to, duration, easing)` | `anchorMax` |
| `rect.MoveToScreenPoint(rectPoint01, screenPoint01, duration, easing)` | Aligns rect point to screen point |
| `rect.SlideHorizontal(xPivot, xScreen, duration, easing)` | X only, preserving Y |
| `rect.MoveToLocalPoint(rectPoint01, targetParentLocal, duration, easing)` | Aligns rect point to parent-local position |

---

## AnimatePostProcessing (Tide.PostProcessing namespace)

Extension methods on `Volume` and `VolumeProfile`. Return `null` if the required override is missing.

| Method | Animates |
|--------|----------|
| `volume.Saturation(to, duration, easing)` | ColorAdjustments.saturation |
| `volume.Contrast(to, duration, easing)` | ColorAdjustments.contrast |
| `volume.HueShift(to, duration, easing)` | ColorAdjustments.hueShift |
| `volume.Exposure(to, duration, easing)` | ColorAdjustments.postExposure |
| `volume.ColorAdjustment(animType, to, duration, easing)` | Any ColorAdjustment property |
| `volume.BloomIntensity(to, duration, easing)` | Bloom.intensity |
| `volume.BloomThreshold(to, duration, easing)` | Bloom.threshold |
| `volume.Bloom(animType, to, duration, easing)` | Any Bloom property |

All methods have `VolumeProfile` overloads that accept a profile directly instead of a `Volume`.

---

## TweenAudio (Tide.Audio namespace)

| Method | Animates |
|--------|----------|
| `audioSource.Volume(to, duration, easing)` | AudioSource.volume |
| `audioSource.Volume(from, to, duration, easing)` | AudioSource.volume (explicit start) |
| `audioGroup.Volume(to, duration, easing, mode)` | HYDRA AudioGroup mixer volume |
| `audioGroup.Volume(from, to, duration, easing, callback)` | HYDRA AudioGroup mixer volume (explicit start) |

---

## TweenAnimation (Tide.Animation namespace)

| Method | Animates |
|--------|----------|
| `mixerPlayable.MixerWeight(fromAnim, toAnim, to, duration, easing)` | Cross-fades two input weights |
| `playable.Weight(fromAnim, to, value, easing, mode, callback)` | Single input weight |

---

## Easing

| Member | Description |
|--------|-------------|
| `Easing.Type` | Enum of all 26 easing variants (including `Custom`) |
| `Easing.GetEasing(Type)` | Returns the `EasingMethod` delegate for a given type |
| `Easing.CustomCurve` | Global `AnimationCurve` read by `Easing.Type.Custom` |
| `Easing.Linear` | Public — returns input unchanged |

---

## TweenData&lt;T&gt;

Serializable Inspector-friendly container for wiring tweens without code.

| Property | Type | Default |
|----------|------|---------|
| `target` | `T` | — |
| `duration` | `float` | `0.5f` |
| `easing` | `Easing.Type` | `QuadraticOut` |

Concrete subtypes: `Vector3TweenData`, `FloatTweenData`, `ColorTweenData`, `Vector2TweenData`, `TransformTweenData`.