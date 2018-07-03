# Content section

### Props:

| Name      |   Type   |  Required  |
|:---------:|:--------:|:----------:|
| section   |  object  |    true    |

### Features

- Uses slugified title as permalink to item
- Uses content items from pages in Dato CMS and includes content type specific components:
    - `rich text` for content items of type `text`
    - `responsive image` for content items of type `image`
    - `responsive video` for content items of type `video`