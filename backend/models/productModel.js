const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter your name"],
  },
  description: {
    type: String,
    required: [true, "please Enter your description"],
  },
  price: {
    type: Number,
    required: [true, "please Enter your Product price"],
    maxLength: [8, "price cannot exceed 8 character"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter your produyct category"],
  },
  stock: {
    type: Number,
    required: [true, "please enter product stock"],
    maxLength: [4, "cannot exceed 4 character"],
  },
  numOfReview: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
