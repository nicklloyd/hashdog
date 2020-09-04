## hashdog

Playground for sorting out decent workflow serverless graphql, apollo server, typescript, type-graphql, jest, babel, webpack

## Notes:

### Serverless-Offline

to run serverless-offline via https, you need to generate into `/local-certs` and then install/trust on your local machine.

```
openssl req \
-newkey rsa:2048 \
-x509 \
-nodes \
-keyout key.pem \
-new \
-out cert.pem \
-subj /CN=localhost \
-reqexts SAN \
-extensions SAN \
-config <(cat /System/Library/OpenSSL/openssl.cnf \
    <(printf '[SAN]\nsubjectAltName=DNS:localhost')) \
-sha256 \
-days 3650
```
