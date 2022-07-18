const { VK } = require('vk-io');
const env = require('dotenv');
env.config()

const vk = new VK({
	token: process.env.ACCES_TOKEN
});

async function getMessages() {
	let ofst = 0;
	let arrMsg = new Array();
	for (let i = 0; i < 23; i++) {
		let msg = await vk.api.messages.getHistory({
			peer_id: 2000000121,
			count: 200,
			offset: ofst
		});
		arrMsg.push(msg);
		ofst += 200;
		console.log(i, msg);
	}

	arrMsg.forEach(element => {
		element["items"].forEach(element => console.log(element))
	});
}

getMessages();
