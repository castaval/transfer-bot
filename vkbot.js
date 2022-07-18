const { VK } = require('vk-io');
const env = require('dotenv');
env.config()

const vk = new VK({
	token: process.env.ACCES_TOKEN
});

async function getMessages() {
	let ofst = 0;
	let arrMsg = new Array();

	let msg = await vk.api.messages.getHistory({
		peer_id: 2000000121,
		count: 200,
		offset: ofst
	});

	while (msg["items"].length > 0) {
		msg = await vk.api.messages.getHistory({
			peer_id: 2000000121,
			count: 200,
			offset: ofst
		});
		arrMsg.push(msg);
		ofst += 200;
		console.log(msg);
	}

	arrMsg.forEach(element => {
		element["items"].forEach(async (element) => {
			let massive = await vk.api.users.get({
				user_ids: element["from_id"],
			});
			console.log(massive);
		});
	});
}

getMessages();
