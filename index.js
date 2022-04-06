/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
import * as web3 from "@solana/web3.js";
export async function helloWorld(req, res) {
    const urlParams = new URLSearchParams(req._parsedUrl.search);
    let tokenMint = urlParams.get('tokenMint');

    const connection = new web3.Connection("https://api.devnet.solana.com", "finalized");
    let itemInfo = await connection.getAccountInfo(new web3.PublicKey(tokenMint));



    let message = tokenMint || req.body.name || 'Hello World!';
    //let message = 'Hello World!';
    console.log(message);
    //have to restart when u change
    //let name = request.args.get('name');
    //console.log("nnn ", name);
    //message = name;
    // console.log(req);
    console.log(req._parsedUrl);
    res.status(200).send(itemInfo);
}
//