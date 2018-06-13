import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

const app = express();
const PORT = 4040;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gql_db');

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    context: {
    	userId: 1
    }
}));

app.get('/', (req, res) => {
	res.json({
		note: 'Hello GraphQL'
	});
});

app.listen(PORT, err => {
    if (!err) {
        console.log(`Server is running on PORT ${PORT}`);
    } else {
        console.log(err);
    }
});