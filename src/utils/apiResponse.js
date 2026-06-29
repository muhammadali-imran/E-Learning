export function successResponse(res, data, message = 'Success', statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

export function errorResponse(res, message = 'An error occurred', statusCode = 400, details = null) {
  return res.status(statusCode).json({
    success: false,
    detail: message,
    ...(details && { details }),
  });
}