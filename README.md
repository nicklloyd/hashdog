## hashdog

Playground for sorting out decent workflow serverless graphql, apollo server, typescript, type-graphql, jest, babel, webpack

## Notes:

### Serverless-Offline

To run serverless-offline via https, cd into `/local-certs` run the following.

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

Afterwards, import cert.pem to your local keychain and enure it's 'Trust Settings' are set to "Always Trust".
Close out keychain, restart browser, profit.
