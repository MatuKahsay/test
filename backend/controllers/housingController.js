import asyncHandler from 'express-async-handler';
import Housing from '../models/housingModel.js';

// @desc    Fetch all housing options with optional location filtering
// @route   GET /api/housing
// @access  Public
const getHousings = asyncHandler(async (req, res) => {
  const { lat, lng } = req.query;
  const housings = lat && lng 
    ? await Housing.find({
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [parseFloat(lng), parseFloat(lat)]
            },
            $maxDistance: 10000, // Finds housings within 10km radius
          },
        },
      })
    : await Housing.find({});
  res.json(housings);
});

// @desc    Fetch single housing option by ID
// @route   GET /api/housing/:id
// @access  Public
const getHousingById = asyncHandler(async (req, res) => {
  const housing = await Housing.findById(req.params.id);

  if (housing) {
    res.json(housing);
  } else {
    res.status(404);
    throw new Error('Housing not found');
  }
});

// @desc    Create new review for a housing option
// @route   POST /api/housing/:id/reviews
// @access  Private
const createHousingReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const housing = await Housing.findById(req.params.id);

  if (housing) {
    const alreadyReviewed = housing.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Housing already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    housing.reviews.push(review);

    housing.numReviews = housing.reviews.length;

    housing.rating =
      housing.reviews.reduce((acc, item) => item.rating + acc, 0) /
      housing.reviews.length;

    await housing.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Housing not found');
  }
});

export { getHousings, getHousingById, createHousingReview };
