const response = (res,status,payload) =>{
  return res.status(status).json({payload})
}

const successResponse = (res,status,message,data) => {
  const payload = { status,message,data }
  return response(res,status,payload)
}

const errorResponse = (res,status,error) => {
  const payload = { status,error }
  return response(res,status,payload)
}


module.exports = { successResponse,errorResponse }
