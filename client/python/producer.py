from kafka import KafkaProducer

producer = KafkaProducer(
    bootstrap_servers='localhost:9092'
)

for i in range(10):
    key = f'key-{i}'.encode()
    value = f'value-{i}'.encode()
    producer.send('belajarkafka', key=key, value=value)
    print(f"Sent message with key: {key.decode()}, value: {value.decode()}")

producer.flush()
producer.close()