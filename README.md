# Вычислитель отличий

### Hexlet tests and linter status:

[![Actions Status](https://github.com/v-semyashkina/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/v-semyashkina/frontend-project-46/actions)

### Gendiff tests and linter status:

[![gendiff](https://github.com/v-semyashkina/frontend-project-46/actions/workflows/gendiff.yml/badge.svg)](https://github.com/v-semyashkina/frontend-project-46/actions/workflows/gendiff.yml)

### Maintainability:

[![Maintainability](https://qlty.sh/badges/948160a8-41b4-4869-ba77-7bb5b14cbdf7/maintainability.svg)](https://qlty.sh/gh/v-semyashkina/projects/frontend-project-46)

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Минимальные требования:

- Node.js последней версии
- npm
- make
- Commander.js
- Lodash
- js-yaml

## Установка:

make install

## Запуск утилиты:

- gendiff -h для вывода справки
- gendiff filepath1 filepath2 для сравнения двух файлов с форматированием результата по умолчанию (stylish)
- gendiff -f plain filepath1 filepath2 либо gendiff -f plain filepath1 filepath2 для сравнения двух файлов с форматированием результата в плоском текстовом формате (plain)
- gendiff -f json filepath1 filepath2 либо gendiff -f json filepath1 filepath2 для сравнения двух файлов с форматированием результата в формате JSON


[![asciicast](https://asciinema.org/a/4UR4D8gM4y2CXVGqoJrL7y1xy.svg)](https://asciinema.org/a/4UR4D8gM4y2CXVGqoJrL7y1xy)



[![asciicast](https://asciinema.org/a/Zd6ynS9viNmLPwIr0IogMuZwm.svg)](https://asciinema.org/a/Zd6ynS9viNmLPwIr0IogMuZwm)