# kafka

- Download JDK
https://adoptium.net/temurin/releases

- Download Kafka
https://kafka.apache.org/downloads

- config
config/kraft/server.properties

- ubah log directories
log.dirs=data

- format directory
- generate uuid

.\bin\windows\kafka-storage.bat random-uuid

.\bin\windows\kafka-storage.bat format --cluster-id <UUID> --config .\config\kraft\server.properties

- menjalankan kafka
.\bin\windows\kafka-server-start.bat .\config\kraft\server.properties 

-buat topic
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --create --topic helloworld

-melihat topic
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --list

-prouduce topic
.\bin\windows\kafka-console-producer.bat --bootstrap-server localhost:9092 --topic belajarkafka

-consumer topic
.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic belajarkafka --from-beginning

-consumer group
.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic belajarkafka --group payment  --from-beginning

-lihat informasi offset
.\bin\windows\kafka-consumer-groups.bat --bootstrap-server localhost:9092 --all-groups --all-topics --describe

-partition pada topic

-menambahkan
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --create --topic helloworld --partitions <number>

-mengubah
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --alter--topic helloworld --partitions <number> 

-melihat
.\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --describe--topic <string>

-menambahkan key pada producer
.\bin\windows\kafka-console-producer.bat --bootstrap-server localhost:9092 --topic belajarkafka --property "parse.key=true" --property "key.separator=:"

-melihat key pada consumer
.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic belajarkafka --group payment  --from-beginning  --property "print.key=true"