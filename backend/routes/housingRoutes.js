import express from 'express'
import {
  getHousings,
  getHousingById,
  createHousingReview,
} from '../controllers/housingController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getHousings) // Retrieve all housing listings
router.route('/:id/reviews').post(protect, createHousingReview) // Create a review for a specific housing
router.route('/:id').get(getHousingById) // Retrieve details for a specific housing

export default router
