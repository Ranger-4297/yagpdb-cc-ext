# YAGPDB-CC README

This extensions shows syntax highlighting for YAGPDB Custom Commands.  
Github: https://github.com/ranger-4297/yagpdb-cc-ext  
VSC Marketplace: https://marketplace.visualstudio.com/items?itemName=ranger-4297.yagpdb-cc-updated

# Original extension
Github: https://github.com/SpecialEliteSNP/yagpdb-cc-ext  
VSC Marketplace: https://marketplace.visualstudio.com/items?itemName=SpecialEliteSNP.yagpdb-cc

## Features
- Functions
- Variables
- Automatic indenting
- Folding recognition

## Requirements

Recognised file extensions are `.cc.go` `.yag`, `.yagpdb`, `.yagcc` and `.yagpdbcc`.
You can also change the language of the file to `"YAGPDB-CC"`

## Extension Settings
> The default locations for this extension are:
> - Windows `%USERPROFILE%\.vscode\extensions`
> - macOS/Linux `~/.vscode/extensions`

There is an option to also recognise Discord Markup, but it's not perfect and annoying most of the time.
You can however enable it by changing `contributes.grammars[0].path` to `"./syntaxes/yagpdbcc_markup.tmLanguage.json"`.

Something that is wanted is the option to add support for Go Template extensions. Unfortunately, the only way to do that as of right now is to do it manually.
The way it's done is by going to this extension's `package.json` and adding your extension to `contributes.languages[0].extensions`.
E.g.: `[".yag", ".yagpdb", ".yagcc", ".yagpdbcc", ".gotmpl", ".go.tmpl", ".gotemplate"]`