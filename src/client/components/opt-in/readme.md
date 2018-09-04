# Opt-in

Opt-in shows a dialog to ask a user to accept certain conditions. When accepted, it saves it in localStorage.

## Resources

* [How to make dialog accessible (video)](https://egghead.io/lessons/html-5-accessible-modal-dialogs)

### Props:

| Name      | Purpose          | Type   | Required |
|:---------:|:----------------:|:------:|:--------:|
| title     | ARIA label       | string | true     |
| body      | Request of user  | string | true     |
| name      | LocalStorage key | string | true     |
