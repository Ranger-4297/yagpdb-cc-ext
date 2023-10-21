# Change Log

All notable changes to the "yagpdb-cc" extension will be documented in this file.

## [1.0.0] - 24-02-2021

- Initial release

## [1.0.1] - 05-03-2021
- Support for numbers
- PNG instead of JPG extension icon
- Same colouring as `nil` for `true` and `false`
- Fix for indenting on else statement with space after it `{{else }}`
- Missing `.` for supported extension
- Recognition for trim for comment blocks `{{- /* */ -}}`

## [1.1.0] - 16-03-2021
- Float as well as integer recognition
- Full support for trims
- Fixed a folding issue
- Better regex and now all non-capturing groups

## [1.1.1] - 28-04-2021
- Rebuilt the `support.class` regex to account for missing `addReactions` recognition

## [1.1.2] - 24-05-2021
- Explanation in the README on how to add custom file extension support

## [1.1.3] - 05-08-2021
- Added `reSplit`, `dbDelMultiple`, `dbRank`, `sort`, `hasPrefix` & `hasSuffix`

## [1.1.4] - 19-08-2022
- Added all methods and functions that were missing, following the previous update

## [1.7.0] - 02-04-2023
> Oudated as hell
- Added `sanitizeText` function

## [1.7.1] - 20-07-2023
- Rolledback package.json
- Trimmed trailing lines

## [1.7.2] - 20-07-2023
- Language selection has an icon now

## [1.7.3] - 20-07-2023
- Missed class

## [1.8.1] - 21-07-2023
- Maintainer update
- Readme rehaul
- License

## [1.8.2] - 22-07-2023
- Additional e's in broken control regex

## [1.9.0] - 22-07-2023
- Add highlighting to `.cc.go` and `.cc` file extensions

# [1.10.0] - 09-10-2023
- Updated logo

# [1.11.0] - 21-10-2023
- Adds `continue` to control class
- Adds `sanitizeText`, `min`, `max`, `hasPermissions`, `jsonToSdict`, `pinMessage`, `publishResponse`, `publishMessage`, `trimSpace` & `verb` to function class

# [1.11.1] - 21-10-2023
- Remove `.cc` file extension [013d4c9](https://github.com/Ranger-4297/yagpdb-cc-ext/commit/013d4c9d28fbefc62e923fca57077c80af15ca87)

# [1.11.2] - 21-10-2023
- Adds `break` to control class
- Fixes additional character in function class