PREFIX=/usr/local
BINDIR=$(PREFIX)/bin
ETCDIR=$(PREFIX)/etc/quranbot
LIBDIR=$(PREFIX)/lib/quranbot
LIBEXECDIR=$(PREFIX)/libexec/quranbot
SHAREDIR=$(PREFIX)/share/quranbot

install:
	@find bin/ lib/ libexec/ share/ etc/ -type d -exec install -v -d $(PREFIX)/"{}" \;
	@find bin/ lib/ libexec/ -type f -exec install -v -m 0755 "{}" $(PREFIX)/"{}" \;
	@find share/ -type f -exec install -v -m 0644 "{}" $(PREFIX)/"{}" \;
	@find etc/ -type f -exec install -v -m 0640 "{}" $(PREFIX)/"{}" \;
	@find $(SHAREDIR) $(ETCDIR) -type d -exec chmod 0775 "{}" \;

deinstall:
	rm -rf $(BINDIR)/quranbot
	rm -rf $(LIBEXECDIR)
	rm -rf $(SHAREDIR)
	rm -rf $(ETCDIR)
	rm -rf $(LIBDIR)
