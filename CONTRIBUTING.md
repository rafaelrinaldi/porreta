# Contributing to `porreta`

> Simple guide on how to contribute to the project.

Hey there :wave: Thanks for taking the time to contribute! This document should provide you with all the information needed.

Please, take a moment to review this document in order to make the contribution process easy and effective.

## FAQ

> What kind of words are allowed?

Valid words must follow these simple rules:

1. Do not use bad words.
2. They must be unique (check if they're not present on the list already).
3. They must be an actual funny word in Brazilian Portuguese (pt-br).
4. They cannot contain [non-printable ASCII chars](http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters).
5. They must follow `hyphen-case` naming.

## General

### Questions

If you have a question, make sure it wasn't [already answered](https://github.com/rafaelrinaldi/porreta/issues?q=label%3Asupport). If it wasn't, please feel free to file an issue.

### Bugs

Bug reports are tricky. Please provide as much context as possible.

### Feature requests

Feature requests are always appreciated! The only thing is that they might not get implemented. The main goal is to keep things small and focused so we usually favor more abstract features and so new addons and extensions are easy to be build upon.

## Git workflow

1. Fork the repository.
2. Create a new branch following one of the patterns below (name them as you wish, just make sure to use the same prefixes):
  * `feature/my-awesome-feature`
  * `fix/fixed-that-for-you`
  * `improvement/some-great-improvement`
3. Start working your magic :sparkles:
4. Commit your changes.
5. Open a pull request. Please, detail the pull request as much as you can. Also make sure to mention people and current issues involved on the PR context.

## Development

To make the project ready for development, first install its dependencies:

```sh
$ npm install
```

### Code linting

As an effort to keep the code consistent, we rely on code linting. To lint the code, simply run:

```sh
$ npm run lint
```

Note that linting is tied to the `test` script itself. That means any pull requests where the linting breaks, CI will notify us and therefore it will be considered invalid.

### Test

To run tests, simply run the following command. This is used in CI testing.

```sh
$ npm test
```
