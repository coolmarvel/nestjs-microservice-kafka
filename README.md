NESTJS MICROSERVICES WITH KAFKA

# Step-1.

1. install kafka at local or docker
2. openjdk v17 install to use kafdrop

# Step-2.

```bash
$ npm install
```

```bash
$ npm install -g loadtest
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

# Step-5.

```bash
$ loadtest -c 10 -n 100 http://localhost:3000/fibonacci
```
