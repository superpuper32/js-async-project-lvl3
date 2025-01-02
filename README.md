# Page  loader
[![Node CI](https://github.com/superpuper32/js-async-project-lvl3/workflows/Node%20CI/badge.svg)](https://github.com/superpuper32/js-async-project-lvl3/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/82818b37d75a8caaa187/maintainability)](https://codeclimate.com/github/superpuper32/js-async-project-lvl3/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/82818b37d75a8caaa187/test_coverage)](https://codeclimate.com/github/superpuper32/js-async-project-lvl3/test_coverage)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/superpuper32/js-async-project-lvl3/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/superpuper32/js-async-project-lvl3/actions)

PageLoader is a command line utility that downloads pages from the Internet and saves them on your computer. Along with the page, it downloads all resources (pictures, styles, and js), allowing you to open the page without the Internet.

```bash
page-loader --output /var/tmp https://ru.hexlet.io/courses

✔ https://ru.hexlet.io/lessons.rss
✔ https://ru.hexlet.io/assets/application.css
✔ https://ru.hexlet.io/assets/favicon.ico
✔ https://ru.hexlet.io/assets/favicon-196x196.png
✔ https://ru.hexlet.io/assets/favicon-96x96.png
✔ https://ru.hexlet.io/assets/favicon-32x32.png
✔ https://ru.hexlet.io/assets/favicon-16x16.png
✔ https://ru.hexlet.io/assets/favicon-128.png

Page was downloaded as 'ru-hexlet-io-courses.html'
```

The utility downloads resources in parallel and shows the progress for each resource in the terminal

## Usage example

Help parameter to display utility options

```sh
page-loader --help
```
<a href="https://asciinema.org/a/dFt7NKAktjML9XeOzRscyAckt" target="_blank"><img src="https://asciinema.org/a/dFt7NKAktjML9XeOzRscyAckt.svg" width="400px" /></a>
