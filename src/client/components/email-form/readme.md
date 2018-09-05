# Email form

A simple form to collect email addresses.

## Features

- Automatically sends an `email` to the configured email address.
- Only `shows` the form if the required email address is configured in the CMS under `App`.
- Uses the `title` of the form as the email `subject`.
- Uses [Formspree](https://formspree.io/) for form handling. Several attributs are used for extra features: `_next`, `_subject`, `_language` and `_gotcha`.
