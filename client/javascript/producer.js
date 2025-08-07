import { Kafka, Partitioners } from 'kafkajs';

const kafka = new Kafka({
    brokers: ['localhost:9092']
});

const producer = kafka.producer({
    createPartitioner: Partitioners.DefaultPartitioner
});

await producer.connect();

for (let i = 0; i < 10; i++) {
    const key = `key-${i}`;
    const value = `value-${i}`;
    await producer.send({
        topic: 'belajarkafka',
        messages: [
            { key, value }
        ]
    });
    console.log(`Sent message with key: ${key}, value: ${value}`);
}

await producer.disconnect();