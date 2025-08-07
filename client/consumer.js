import { Kafka } from "kafkajs";

const kafka = new Kafka({
    brokers: ["localhost:9092"]
});

const consumer = kafka.consumer({ 
    groupId: "nodejs" 
});

await consumer.subscribe({ 
    topic: "belajarkafka", 
    fromBeginning: true 
});

await consumer.connect();

await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        const key = message.key ? message.key.toString() : null;
        const value = message.value ? message.value.toString() : null;
        console.log(`topic: ${topic}, partition: ${partition}`);
        console.log(`key: ${key}, value: ${value}`);
    }
});