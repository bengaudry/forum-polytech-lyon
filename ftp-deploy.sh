if [ $# -ne 2 ]; then
    echo "Usage: $0 <ftp_username> <ftp_password>"
    exit 1
fi

lftp "ftp://$1:$2@ftp.forum-polytech-lyon.org" < ftp-deploy-instructions.sh

if $? -ne 0; then
    echo "Error: FTP upload failed."
    exit 1
fi
echo Done!