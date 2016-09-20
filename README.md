# dontlike.in

> a trap blog

## To get started

```sh
$ gulp [--prod]
```

## Usage

```sh
$ gulp build [--prod]
```

```sh
$ gulp deploy
```

#### Settings
In your `_config.yml` and `humans.txt` you should add your Github and Twitter
profile if you want to.

## Install
If you have cloned this repo or want to reinstall, make sure there&#39;s no
`node_modules` or `Gemfile.lock` folder/file and then run `npm install` and
`bundle install`.

#### Update
To update: `npm update generator-jekyllized -g`, then run `yo jekyllized:gulp
[--rsync|amazon|pages]` in this directory. Note that this will overwrite any
local changes, so back it up.

## Github
For more information on how to use your new project, please refer to the [README
on Github](https://github.com/sondr3/generator-jekyllized).

## Owner

> [John Rackles](https://dontlike.in)
=======
# dontlike.in :fire:

> So schreibt man Posts für dontlike.in

## Benötigte Software
- [git](https://git-scm.com/downloads)
- [ruby](https://www.ruby-lang.org/en/downloads/)
- [node](https://nodejs.org/en/download/)

## Lokal installieren
Zuerst erstellt man ein neues Verzeichnis und wechselt dann hinein (bei solchen Befehlen wird das **$** Zeichen nicht mit eingegeben).

Auf OSX / Linux geht das zB mit
```sh
$ mkdir dontlike && cd dontlike
```

Dann cloned man das Repository in dieses Verzeichnis
```sh
$ git clone https://github.com/johnrackles/dontlike.in.git
```

Der Blog funktioniert mit [Jekyll](https://jekyllrb.com/), alle zugehörigen Programme installiert man mit
```sh
$ npm install && bundle install
```

## Posts schreiben
Posts befinden sich in dem Ordner ```/src/_posts/``` und sind in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) geschrieben. Am Anfang jedes Posts stehen ein paar Informationen die für Jekyll wichtig sind. Sie werden eingerahmt von jeweils drei Bindestrichen. Dort müssen Titel, Tags und ein Headerbild angegeben werden. Außerdem fängt jeder Beitrag mit einem Zitat an, welches mit einem ">" eingeleitet wird. Danach folgt das Trennelement, das angibt ab wo der eigentliche Text losgeht: ```<!--more-->``

### Übersicht des Dateianfangs
