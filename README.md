<p align="center">
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
</p>

## About

quranbot is a social media bot that posts reminders to read
and listen to The Noble Quran, along with other Islamic content.
The bot promotes the https://al-quran.reflectslight.io website as
the preferred method for reading and listening to The Noble Quran,
and other content (such as videos) is embedded into the bot's posts.
The bot is still in the early stages of development.

## CLI

**Commands**

* quranbot post-link <br>
Posts a link to a surah on the https://al-quran.reflectslight.io website. <br>
Posts both English and Arabic links (one after the other). <br>

## Requirements

quranbot is implemented with a mixture of TypeScript, and POSIX shell. <br>
The following dependencies are required:

* [Deno](https://deno.com/)
* [#!/bin/sh](https://man.freebsd.org/sh)

## Install

**Clone**

The first step is to clone the repository. <br>
Afterwards quranbot can be installed (and deinstalled) through make:

    git clone https://github.com/ReflectsLight/quranbot
    cd quranbot
    doas -u root -- make install
    doas -u root -- make deinstall

**Configuration**

The configuration file is normally located at '/usr/local/etc/quranbot/quranbot.json',
and a sample file is included but with dummy values. See [etc/quranbot/quranbot.json.sample](etc/quranbot/quranbot.json.sample).
The configuration file should include the url of a mastodon instance, and
an access token.

**Cron**

The
[cron(8)](https://man.freebsd.org/cron)
daemon is a simple way to schedule posts at regular intervals,
and it is easy to use with quranbot. After running `crontab -e` an
editor should open, and the following content can be added to post
a link to a surah every 12 hours, on the 7th minute of the hour:

    PATH=/bin:/usr/bin:/usr/local/bin

    7 */12 * * * quranbot post-link

## Platforms

The following platforms have been tested and are known to work:

* FreeBSD

The following platforms remain untested but might work:

* OpenBSD
* NetBSD

The following platforms are known to be **unlikely** to work:

* Linux
* Windows
* MacOS

## Sources

* [github.com/@ReflectsLight](https://github.com/ReflectsLight/quranbot)
* [gitlab.com/@ReflectsLight](https://gitlab.com/ReflectsLight/quranbot)
* [codeberg.org/@ReflectsLight](https://codeberg.org/ReflectsLight/quranbot)
* [brew.bsd.cafe/@ReflectsLight](https://brew.bsd.cafe/ReflectsLight/quranbot)

## License

The "source code" is released under the terms of the GPL <br>
See [LICENSE](./share/al-quran.reflectslight.io/LICENSE) for details
