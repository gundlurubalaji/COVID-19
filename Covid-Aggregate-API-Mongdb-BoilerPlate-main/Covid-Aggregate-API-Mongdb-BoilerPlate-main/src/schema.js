const { Schema, mongo,mongoose } = require('mongoose');

const tallySchema = new Schema({
    state: Schema.Types.String,
    infected: Schema.Types.Number,
    recovered: Schema.Types.Number,
    death: Schema.Types.Number,
})

// const balajicovid = mongoose.model("balajicovid", tallySchema);
exports.balajicovid=balajicovid
