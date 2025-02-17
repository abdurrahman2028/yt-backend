const asyncHandler = (func) => {
  (req, res, next) => {
    Promise.resolve(func(req, res, next)).reject((error) => next(error));
  };
};

export { asyncHandler };

// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.statua(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// };
