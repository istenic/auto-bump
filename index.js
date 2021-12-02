
const Discord = require('discord.js-selfbot');
const cron = require('cron');
const server_id = 
const channel_id = 
const { Client } = require('discord.js');

const client = new Discord.Client();
require('events').EventEmitter.defaultMaxListeners = 15;

client.on('message', msg => { // Message function

	if (msg.content.startsWith('ping')) { 
		msg.reply("Pong!") 
	}
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 01 00 * * *', () => {

		const guild = client.guilds.cache.get(server_id)
		const channel = guild.channels.cache.get(channel_id)
		channel.send('!d bump');

	});


	scheduledMessage.start()
});


client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 03 02 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 07 04 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 10 06 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 12 08 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 15 10 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 17 12 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 19 14 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 22 16 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 25 18 * * *', () => {

		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.once("ready", () => {


	let scheduledMessage = new cron.CronJob('00 32 20 * * *', () => {
		const guild = client.guilds.cache.get(server_id);
		const channel = guild.channels.cache.get(channel_id);
		channel.send('!d bump');

	});


	scheduledMessage.start()
});

client.login("yourtoken");
