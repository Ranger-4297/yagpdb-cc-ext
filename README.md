# YAGPDB-CC README

This extensions shows syntax highlighting for YAGPDB Custom Commands.  
Github: https://github.com/ranger-4297/yagpdb-cc-ext  
VSC Marketplace: https://marketplace.visualstudio.com/items?itemName=ranger-4297.yagpdb-cc-updated

# Original maintainer and contributor
Github: https://github.com/SpecialEliteSNP/yagpdb-cc-ext  
VSC Marketplace: https://marketplace.visualstudio.com/items?itemName=SpecialEliteSNP.yagpdb-cc

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
> The default locations for this extension are:
- Windows `%USERPROFILE%\.vscode\extensions`
- macOS/Linux `~/.vscode/extensions`

There is an option to also recognise Discord Markup, but it's not perfect and annoying most of the time. 
You can however enable it by changing `contributes.grammars[0].path` to `"./syntaxes/yagpdbcc_markup.tmLanguage.json"`.

Something that is wanted is the option to add support for Go Template extensions. Unfortunately, the only way to do that as of right now is to do it manually. 
The way it's done is by going to this extension's `package.json` and adding your extension to `contributes.languages[0].extensions`. 
E.g.: `[".yag", ".yagpdb", ".yagcc", ".yagpdbcc", ".gotmpl", ".go.tmpl", ".gotemplate"]`

## Making your own changes and compiling yourself
To make your own changes, simply fork this repository, and make your changes to the files in `syntaxes/`. 

To build the extension, [install NodeJS](https://nodejs.org/en), and [NPM](https://www.npmjs.com/) 
Make sure you have the `@vscode/vsce` package installed `npm install -g @vscode/vsce` 
Build with `vsce package` and install the VSIX file. (Uninstall the marketplace extension first and reload both times)