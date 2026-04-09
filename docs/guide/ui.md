# Animating UI

UI tweens live in `Tide.UI`. Add `using Tide.UI;` alongside `using Tide;`.

## Image

### Opacity

```csharp
// From current alpha to target
image.Opacity(to: 0f, duration: 0.3f);
image.Opacity(from: 1f, to: 0f, duration: 0.3f);
```

### Color

```csharp
image.Color(Color.red, duration: 0.2f);
image.Color(Color.white, Color.red, duration: 0.2f);
```

### Fill amount

```csharp
// Health bar filling up
image.Fill(to: 0.75f, duration: 0.4f, Easing.Type.QuadraticOut);
image.Fill(from: 0f, to: 1f, duration: 1f);
```

## TextMeshPro

```csharp
using TMPro;

// Fade in text
textMeshPro.Opacity(to: 1f, duration: 0.25f);
textMeshPro.Opacity(from: 0f, to: 1f, duration: 0.25f);
```

## CanvasGroup

`CanvasGroup.Opacity` automatically registers the tween against the `CanvasGroup` as a target, so calling `Override()` works out of the box.

```csharp
// Fade a whole panel in
canvasGroup.Opacity(to: 1f, duration: 0.3f);
canvasGroup.Opacity(from: 0f, to: 1f, duration: 0.3f, Easing.Type.CubicOut);
```

## RectTransform

### Anchor position

```csharp
rectTransform.AnchorPos(new Vector2(200f, 0f), duration: 0.4f);
rectTransform.AnchorPos(new Vector2(-400f, 0f), new Vector2(0f, 0f), duration: 0.3f);
```

### Size delta

```csharp
rectTransform.SizeDelta(new Vector2(300f, 100f), duration: 0.3f);
```

### Anchor min/max

```csharp
rectTransform.AnchorMin(Vector2.zero, duration: 0.2f);
rectTransform.AnchorMax(Vector2.one, duration: 0.2f);
```

### Move to screen point

Slide a rect element so that a normalised point on the rect lands on a normalised screen position. Both axes:

```csharp
// Centre of the rect to the centre of the screen
rectTransform.MoveToScreenPoint(
    rectPoint01: new Vector2(0.5f, 0.5f),
    screenPoint01: new Vector2(0.5f, 0.5f),
    duration: 0.5f
);
```

### Slide horizontal

Move only the X axis, preserving Y. Useful for panels sliding in from the edges:

```csharp
// Slide the left edge of the panel to the left side of the screen (hidden)
rectTransform.SlideHorizontal(xPivotPoint: 0f, xScreenPoint: 0f, duration: 0.4f);

// Slide the right edge to the right side (hidden)
rectTransform.SlideHorizontal(xPivotPoint: 1f, xScreenPoint: 1f, duration: 0.4f);
```

### Move to local point

Align a normalised reference point on the rect with a position in the parent's local space:

```csharp
rectTransform.MoveToLocalPoint(
    rectPoint01: new Vector2(0f, 0.5f),    // left-middle of the rect
    targetParentLocalPos: new Vector2(0f, 0f), // parent's origin
    duration: 0.3f
);
```

::: tip RectTransform tweens auto-register
All `RectTransform` and `CanvasGroup` tweens automatically call `.WithTarget()`, so `Override()` and `KillAll()` work without any extra setup.
:::
