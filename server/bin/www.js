const server = require('../index.js');
// eslint-disable-next-line no-undef
const port = (process.env.PORT || 8080);

server.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`server is listening on ${port}`);
})