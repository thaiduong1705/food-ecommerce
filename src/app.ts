import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

const app = express();

// Define middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// Init db

// Define routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Error handling

export default app;
