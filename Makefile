PREFIX=/usr/local
BINDIR=$(PREFIX)/bin
ETCDIR=$(PREFIX)/etc/quranbot
LIBEXECDIR=$(PREFIX)/libexec/quranbot
SHAREDIR=$(PREFIX)/share/quranbot

install:
	@find bin/ libexec/ share/ etc/ -type d -exec install -v -d $(PREFIX)/"{}" \;
	@find bin/ libexec/ -type f -exec install -v -m 0755 "{}" $(PREFIX)/"{}" \;
	@find share/ -type f -exec install -v -m 0644 "{}" $(PREFIX)/"{}" \;
	@find etc/ -type f -exec install -v -m 0640 "{}" $(PREFIX)/"{}" \;

deinstall:
	rm -rf $(BINDIR)/quranbot
	rm -rf $(LIBEXECDIR)
	rm -rf $(SHAREDIR)
	rm -rf $(ETCDIR)
