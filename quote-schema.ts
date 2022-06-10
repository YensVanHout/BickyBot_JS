import mongoose from "mongoose";

const schema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
});

export default mongoose.model("quotes", schema);
