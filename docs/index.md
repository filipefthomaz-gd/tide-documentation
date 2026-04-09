---
layout: home

hero:
  name: Tide
  text: Unity tweening system
  tagline: Fluent, awaitable tweens for Transforms, UI, post-processing, and audio. No setup required — just call and chain.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /reference/api

features:
  - icon: 🎯
    title: Fluent API
    details: Extension methods on Unity types. Move, rotate, scale, fade — all in a single expressive call with no MonoBehaviour setup.

  - icon: ⏳
    title: Awaitable
    details: Every tween returns a Surfer handle that supports C# async/await and Task.WhenAll. Chain animations without callback pyramids.

  - icon: 🔀
    title: Override & kill
    details: Register tweens against a target object and call Override() to stop competing animations automatically. KillAll for cleanup.

  - icon: 📐
    title: 25 easing types
    details: Linear, Quadratic, Cubic, Quartic, Expo, Sine, Back, Elastic, Bounce — In, Out, and InOut variants. Plus custom AnimationCurve support.

  - icon: 🖥️
    title: Covers the full stack
    details: Transform, RectTransform, Renderer, SkinnedMesh, Image, TextMeshPro, CanvasGroup, VolumeProfile, AudioSource, and Playable graphs.

  - icon: 🧩
    title: Zero allocation design
    details: Coroutine-driven with WaitForFixedUpdate. No per-frame allocations in the hot path. Respects Unity timescale and pause automatically.
---
