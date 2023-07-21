<p align="center">
  <a href="https://github.com/ranger-4297/yagpdb-ccs">
    <picture>
      <img src="https://yagpdb.xyz/static/img/logo_y.png" height="128">
    </picture>
    <h1 align="center">YAGPDB.xyz syntax highlighting</h1>
  </a>
</p>

<div align="center">
<img alt="GitHub release (with filter)" src="https://img.shields.io/github/v/release/Ranger-4297/YAGPDB-CCs">
<img alt="GitHub" src="https://img.shields.io/github/license/Ranger-4297/YAGPDB-CC-EXT">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/Ranger-4297/YAGPDB-CC-EXT">
<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/Ranger-4297/YAGPDB-CC-EXT">
</div>

<hr />
<div>
  <p align="center">
    <a href="#maintainer-notice">Maintainer notice</a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#recognized-file-types">Recognized file types</a>
    ·
    <a href="#extension-settings">Extension settings</a>
    ·
    <a href="#license">License</a>
    ·
    <a href="#making-your-own-changes-and-compiling-yourself">Compile yourself</a>
    ·
    <a href="#official-yagpdbxyz-links">Official links</a>
    ·
    <a href="#bugs-and-more">Bugs and more</a>
  </p>
</div>

## Maintainer notice
<blockquote> Currently maintained version </blockquote>

[Github](https://github.com/ranger-4297/yagpdb-cc-ext)<br />
[Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=ranger-4297.yagpdb-cc-updated)
<br />
<br />
<blockquote> Original maintainer and contributor </blockquote>

[Github](https://github.com/SpecialEliteSNP/yagpdb-cc-ext)<br />
[Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=SpecialEliteSNP.yagpdb-cc)

## Features
- Functions
- Variables
- Automatic indenting
- Folding recognition

> ℹ️ **INFO**<br />
> Methods are not included and will be seen as a variable. Also not included is the golang time template

## Recognized file-types

Default recognised file extensions are `.yag`, `.yagpdb`, `.yagcc` and `.yagpdbcc`. 
You can also change the language of the file to `"YAGPDB-CC"`.

> ℹ️ **INFO**<br />
> See below to add your own.

## Extension Settings
> The default locations for this extension are:
- Windows `%USERPROFILE%\.vscode\extensions`
- macOS/Linux `~/.vscode/extensions`

Enable recognized Discord markup by updating `contributes.grammars[0].path` to `"./syntaxes/yagpdbcc_markup.tmLanguage.json"` within `package.json`.

To add your own file extensions to automatically highlight syntax in them add the file extension to `contributes.languages[0].extensions` within `package.json`<br />
E.g: `[".yag", ".yagpdb", ".yagcc", ".yagpdbcc", ".gotmpl", ".go.tmpl", ".gotemplate"]`

## License

<p>This repository is licensed under the terms of the MIT license</p>

<a href="https://github.com/Ranger-4297/yagpdb-cc-ext/blob/main/LICENSE">Full License</a><br>

## Making your own changes and compiling yourself
To make your own changes, simply fork this repository, and make your changes. 

To compile the extension, [install NodeJS](https://nodejs.org/en), and [NPM](https://www.npmjs.com/) 
Make sure you have the `@vscode/vsce` package installed `npm install -g @vscode/vsce` 
Build with `vsce package` and install the VSIX file. (Uninstall the marketplace extension first and reload both times)

## Official YAGPDB.xyz links
<a href="https://discord.gg/4uY54rw">Official YAGPDB support server</a><br> 
<a href="https://docs.yagpdb.xyz/">Official YAGPDB documentation</a><br>
<a href="https://learn.yagpdb.xyz/">Official YAGPDB Custom-Command documentation</a>

## Bugs and more
<blockquote>If you find any bugs or issues, feel free to make a PR or raise an issue, alternatively contact me through my <a href="mailto:a.rhyker@gmail.com">email</a></blockquote>

