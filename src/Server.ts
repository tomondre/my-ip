import Express from "express";
import RequestIpAddressParser from "./RequestIpAddressParser";
import BodyAbstractApi from "./models/BodyAbstractApi";
import cors from "cors";

const app = Express();
app.use(cors())

app.get('/', async (req, res) => {
    console.log("Request received");
    try {
        let callerData: BodyAbstractApi = await RequestIpAddressParser(req);
        res.send(callerData);
    } catch (e) {
        res.status(400);
        res.send(e);
        // @ts-ignore
        console.log(e.toString())
    }
});

app.get('/health', (req, res) => {
   res.send('Alive, or am I?');
});


app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running on port 8080');
});