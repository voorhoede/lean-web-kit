# App header

- Has a space reserved for project logo
- Uses menu items defined in Dato
- Marks active item based on current route
- Works with & without language selector
- Works with & without call to action button
- Renders up to 3 items if language selector or call to action button are present
- Renders up to 5 items otherwise

### Props:

| Name      |   Type   |  Required  |
|:---------:|:--------:|:----------:|
| appTitle  |  string  |    true    |
| menuI18n  |  object  |    true    |
| contentId |  string  |   false    |