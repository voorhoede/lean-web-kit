# Lazy load

Uses the [Intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect when an image enters or exists the browser's viewport. Images only load just before they come into view, reducing initial page weight and load time.

### Props:

| Name       |   Type   |  Required  |
|:----------:|:--------:|:----------:|
| rootMargin |  string  |   false    |
| threshold   |  number  |   false    |
