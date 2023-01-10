export enum paymentMethod {
  CASH = "CASH",

  CREDIT_CARD = "CREDIT_CARD",

  TRANSACTION = "TRANSACTION",
}

export enum transactionStatus {
  RELEASED = "RELEASED",

  PENDING = "PENDING",

  REJECTED = "TREJECTED",
}

export enum HttpStatus {
  OK = 200,

  NOT_FOUND = 404,

  UNAUTHORIZED = 401,

  FORBIDDEN = 403,

  INTERNAL_SERVER_ERROR = 500,
}

export enum RoleType {
  USER = "USER",

  CUSTOMER = "CUSTOMER",

  ADMIN = "ADMIN",
}
