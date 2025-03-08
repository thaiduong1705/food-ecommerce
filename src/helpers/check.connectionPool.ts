import mongoose from "mongoose";
import { cpus } from "os";
import { memoryUsage } from "process";

const SECOND = 5000;
const NUMBEROFCONNECTION = 2;

const countConnection = () => {
	console.log(`Number of connections: ${mongoose.connections.length}`);
};

const checkOverload = () => {
	setInterval(() => {
		const numConnections = mongoose.connections.length;
		const numCore = cpus().length;
		const usage = memoryUsage().rss;

		const maxConections = numCore * NUMBEROFCONNECTION;

		console.log(`Number of connections: ${numConnections}`);
		console.log(`Number of core: ${numCore}`);
		console.log(`Number of memory usage: ${usage / 1024 / 1024} MB`);

		if (numConnections > maxConections) {
			console.log("Overload");
		} else {
			console.log("Normal");
		}
	}, SECOND);
};

export { countConnection, checkOverload };
