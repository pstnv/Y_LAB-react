import { app } from "./expressServer.js";

// start server

const startServer = () => {
    try {
        const PORT = process.env.PORT;
        return app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

const server = startServer();
