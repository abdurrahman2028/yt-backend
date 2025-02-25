import mongoose from "mongoose";
import map from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videofile: {
      type: String,
      required: true,
    },
    thambnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    ispublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(map)

export const Video = mongoose.model("Video", videoSchema);
