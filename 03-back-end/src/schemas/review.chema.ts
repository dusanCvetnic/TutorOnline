import { body } from 'express-validator';

const reviewSchema = [
    body('rating')
        .exists({checkFalsy: true})
        .isInt({min: 0, max: 5})
        .withMessage('Ocena mora biti ceo broj od 0 do 5'),
    body('ratedUserId')
        .isNumeric()
        .optional()
        .withMessage('Review mora sadrzati informacije ko je ocenjen'),
    body('userWhoRatedId')
        .isNumeric()
        .optional()
        .withMessage('Review mora sadrzati informacije ko je ocenio')
]

export { reviewSchema }