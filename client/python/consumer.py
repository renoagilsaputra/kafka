from kafka import KafkaConsumer

consumer = KafkaConsumer(
    'belajarkafka',
    bootstrap_servers='localhost:9092',
    group_id='nodejs',
    auto_offset_reset='earliest',
    enable_auto_commit=True
)

print("Listening for messages...")
for message in consumer:
    key = message.key.decode() if message.key else None
    value = message.value.decode() if message.value else None
    print(f"topic: {message.topic}, partition: {message.partition}")
    print(f"key: {key}, value: {value}")