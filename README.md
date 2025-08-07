# Kafka Setup & Commands (Windows)

## 1. Download JDK
[Temurin JDK](https://adoptium.net/temurin/releases)

## 2. Download Kafka
[Kafka Downloads](https://kafka.apache.org/downloads)

## 3. Konfigurasi
Edit file:
```
config/kraft/server.properties
```
Ubah log directories:
```
log.dirs=data
```

## 4. Format Directory & Generate UUID
```sh
.\bin\windows\kafka-storage.bat random-uuid
.\bin\windows\kafka-storage.bat format --cluster-id <UUID> --config .\config\kraft\server.properties
```

## 5. Menjalankan Kafka
```sh
.\bin\windows\kafka-server-start.bat .\config\kraft\server.properties
```

## 6. Topic Management
**Buat topic:**
```sh
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --create --topic helloworld
```
**Lihat topic:**
```sh
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --list
```

## 7. Producer & Consumer
**Produce topic:**
```sh
.\bin\windows\kafka-console-producer.bat --bootstrap-server localhost:9092 --topic belajarkafka
```
**Consume topic:**
```sh
.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic belajarkafka --from-beginning
```
**Consumer group:**
```sh
.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic belajarkafka --group payment --from-beginning
```

## 8. Offset & Partition
**Lihat informasi offset:**
```sh
.\bin\windows\kafka-consumer-groups.bat --bootstrap-server localhost:9092 --all-groups --all-topics --describe
```
**Menambah partition:**
```sh
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --create --topic helloworld --partitions <number>
```
**Ubah partition:**
```sh
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --alter --topic helloworld --partitions <number>
```
**Lihat partition:**
```sh
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --describe --topic <string>
```

## 9. Key pada Producer & Consumer
**Menambahkan key pada producer:**
```sh
.\bin\windows\kafka-console-producer.bat --bootstrap-server localhost:9092 --topic belajarkafka --property "parse.key=true" --property "key.separator=:"
```
**Melihat key pada consumer:**
```sh
.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic belajarkafka --group payment --from-beginning --
```

## Kafka Client
[Javascript](https://kafka.js.org/)

[Python](https://kafka-python.readthedocs.io/en/master/)