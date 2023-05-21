docker build -t scanner_cicleo_payment:latest . --platform linux/amd64
docker tag scanner_cicleo_payment ghcr.io/polepie/scanner_cicleo_payment:latest
docker push ghcr.io/polepie/scanner_cicleo_payment