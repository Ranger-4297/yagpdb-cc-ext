# YAGPDB-CC README

This extensions shows syntax highlighting YAGPDB Custom Commands.
Github: https://github.com/SpecialEliteSNP/yagpdb-cc-ext

## Features

- Functions
- Variables
- Automatic indenting
- Folding recognition

**Note:** Methods are not included and will be seen as a variable. Also not included is the golang time template.

## Requirements

Recognised file extensions are `.yag`, `.yagpdb`, `yagcc` and `.yagpdbcc`.
You can also change the language of the file to `"YAGPDB-CC"`

## Extension Settings

There is an option to also recognise Discord Markup, but it's not perfect and annoying most of the time.
You can however enable it by changing `contributes.grammars[0].path` to `"./syntaxes/yagpdbcc_markup.tmLanguage.json"`.

---

## Release Notes

### 1.0.0

Initial release of the extension. Has not been tested thoroughly.