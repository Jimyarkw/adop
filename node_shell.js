const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'d22ff222-cef6-4335-b3f9-54dad125679b'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
