#!/bin/sh
# Renders og/*.html to public/og-*.jpg (1200x630) with headless Chrome, as
# JPEG: WhatsApp drops previews heavier than about 300 KB.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
for src in og/*.html; do
	name=$(basename "$src" .html)
	tmp="$(mktemp -d)/$name.png"
	"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
		--window-size=1200,630 --screenshot="$tmp" "file://$PWD/$src" 2>/dev/null
	sips -s format jpeg -s formatOptions 88 "$tmp" --out "public/og-$name.jpg" >/dev/null
	echo "public/og-$name.jpg"
done
