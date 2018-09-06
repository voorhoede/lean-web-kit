# Contact form

A simple contact form to send a message to the recipient and to the person's email who filled in the form.

## Features

- Automatically sends an `email` to the configured email address and to the email address filled by the user in the `email` field.
- Only `shows` the form if the required email address is configured in the CMS under `App`.
- Uses the `title` of the form as the email `subject`.
- Uses [Formspree](https://formspree.io/) for form handling. Several attributs are used for extra features: `_next`, `_subject`, `_language` and `_gotcha`.
