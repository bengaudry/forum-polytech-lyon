#!/usr/bin/env bash

set -euo pipefail

# Prefer CI-provided env vars; keep positional args as fallback for local runs.
FTP_USERNAME="${FTP_USERNAME:-${1:-}}"
FTP_PASSWORD="${FTP_PASSWORD:-${2:-}}"

if [ -z "$FTP_USERNAME" ] || [ -z "$FTP_PASSWORD" ]; then
    echo "Usage: FTP_USERNAME=... FTP_PASSWORD=... $0"
    echo "   or: $0 <ftp_username> <ftp_password>"
    exit 1
fi

lftp "ftp://$FTP_USERNAME:$FTP_PASSWORD@ftp.forum-polytech-lyon.org" < ftp-deploy-instructions.sh || {
    echo "Error: FTP upload failed."
    exit 1
}
echo Done!