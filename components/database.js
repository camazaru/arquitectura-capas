import mongoose from 'mongoose'

    mongoose.connect(process.env.MONGODB_ATLAS, {
    useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));