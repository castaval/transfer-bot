const { VK } = require('vk-io');
const env = require('dotenv');
env.config()

const vk = new VK({
	token: process.env.ACCES_TOKEN
});

async function run() {
	const response = await vk.api.wall.get({
		owner_id: process.env.ID
	});

	console.log(response);
}

run().catch(console.log);