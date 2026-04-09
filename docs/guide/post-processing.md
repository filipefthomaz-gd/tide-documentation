# Post-Processing & Audio

## Post-processing

Post-processing tweens live in `Tide.PostProcessing`. They target URP `Volume` and `VolumeProfile` objects.

Add `using Tide.PostProcessing;` to your file.

### Color adjustments

```csharp
// Via Volume component (reads .profile internally)
volume.Saturation(to: -50f, duration: 1f);
volume.Contrast(to: 30f, duration: 0.5f);
volume.HueShift(to: 90f, duration: 2f);
volume.Exposure(to: -1f, duration: 0.5f);

// Via VolumeProfile directly
profile.Saturation(to: 0f, duration: 1f);
```

All shortcuts delegate to the generic `ColorAdjustment` method:

```csharp
volume.ColorAdjustment(AnimationType.ColorAdjustment.Saturation, to: -80f, duration: 1.5f);
```

::: warning Active override required
The `ColorAdjustments` override must be present and active on the profile. If it's missing, TIDE logs a warning and returns `null`.
:::

### Bloom

```csharp
volume.BloomIntensity(to: 5f, duration: 0.3f);
volume.BloomThreshold(to: 1.2f, duration: 0.5f);

// Generic
volume.Bloom(AnimationType.Bloom.Intensity, to: 0f, duration: 0.4f);
```

Same applies as with color adjustments — the Bloom override must be active on the profile.

---

## Audio

Audio tweens live in `Tide.Audio`. Add `using Tide.Audio;`.

### AudioSource volume

```csharp
// From current volume to target
audioSource.Volume(to: 0f, duration: 1f);

// From an explicit start
audioSource.Volume(from: 1f, to: 0f, duration: 0.5f);
```

### HYDRA AudioGroup volume

If you're using the HYDRA adaptive audio system, you can tween mixer group volume directly:

```csharp
audioGroup.Volume(to: -20f, duration: 0.8f);
audioGroup.Volume(from: 0f, to: -20f, duration: 0.8f);
```

---

## Animation Playable weights

Animation tweens live in `Tide.Animation`. They drive Playable graph input weights — useful for blending between animation clips without the Animator Controller overhead.

Add `using Tide.Animation;`.

### Cross-fade between two clips

```csharp
// Fade from input 0 to input 1 over 0.3 seconds
mixerPlayable.MixerWeight(fromAnim: 0, toAnim: 1, to: 1f, duration: 0.3f);
```

### Animate a single input weight

```csharp
// Works on AnimationMixerPlayable, AnimationClipPlayable, or any Playable
playable.Weight(fromAnim: 1, to: 0f, value: 0.2f);
```
