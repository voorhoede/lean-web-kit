# Email form

A simple form to collect email addresses.

## Supported input fields

- A required form `title`.
- An optional form `description`.
- An optional label for the `email address` field.
- A required `email` field.
- A required label for the `submit button`.
- A required `submit button`.
- An optional `confirmation page` that redirects users after a successfully submitted form.
- An optional `confirmation message` that is displayed on the same page in case a `confirmation page` is not set.

## Features

- Automatically sends an `email` to the configured email address.
- Only `shows` the form if the required email address is configured in the CMS under `App`.
- Uses the `title` of the form as the email `subject`.
- Uses [Formspree](https://formspree.io/) for form handling. Several attributs are used for extra features: `_next`, `_subject`, `_language` and `_gotcha`.
