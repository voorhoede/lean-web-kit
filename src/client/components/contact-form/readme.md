# Contact form

A simple contact form to send a message to the recipient and to the person's email who filled in the form.

## Features

* A required `title`.
* An optional `description`.
* An optional label for `name`.
* A required `name` field.
* An optional label for the `email address`.
* A required `email` field.
* An optional label for `message`.
* A required `message` field.
* A required label for the `submit button`.
* A required `submit button`.
* An optional `confirmation page` to redirect the form to after it's submitted.
* An optional `confirmation message` on the same page if `confirmation page` is not set.
* Sends an `email` to the required email address configured in the CMS under `App` and to the email filled in the `email` field.
* Only `shows` the form if the required email address is configured in the CMS under `App`.
* Uses the `title` of the form as the email `subject`.
* Uses [Formspree](https://formspree.io/) for form handling. Several attributs are used for extra features: `_next`, `_subject`, `_language` and `_gotcha`.
