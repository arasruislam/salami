import mongoose from "mongoose";

const SalamiSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [40, "Name cannot be more than 40 characters"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      enum: {
        values: [1, 2, 5, 10],
        message: "{VALUE} is not a valid winning amount",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Prevent horizontal scaling issues in development
export default mongoose.models.Salami || mongoose.model("Salami", SalamiSchema);
