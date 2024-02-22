NESTJS MICROSERVICES WITH KAFKA

# Step-1.

1. install kafka at local or docker
2. openjdk v17 install to use kafdrop

# Step-2.

```bash
$ npm install
```

# Step-3.
```bash
$ nest start api-gateway --watch
$ nest start consumer --watch
```

# Step-4.

```bash
$ java --add-opens=java.base/sun.nio.ch=ALL-UNNAMED \
    -jar kafdrop-4.0.1.jar \
    --kafka.brokerConnect=localhost:9092
```