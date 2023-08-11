export enum ErrorType {
  ValidationError = "ValidationError",
  FatalError = "FatalError",
  NotFoundError = "NotFoundError",
}

// Custom Error Class for Swapper based errors.
export interface ISwapperError extends Error {
  name: ErrorType;
}

export class ValidationError extends Error implements ISwapperError {
  public name: ErrorType = ErrorType.ValidationError;
  constructor(message: string) {
    super(message);
  }
}

export class FatalError extends Error implements ISwapperError {
  public name: ErrorType = ErrorType.ValidationError;
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends Error implements ISwapperError {
  public name: ErrorType = ErrorType.NotFoundError;
  constructor(message: string) {
    super(message);
  }
}

export function isErrorType(s: string): s is ErrorType {
  return Object.values(ErrorType).includes(s as ErrorType);
}

// Errors related to swapping tokens.
export interface SwapStatus<T, U> {
  offer: T;
  consideration: U;
}

export class SwapSuccess<T, U> implements SwapStatus<T, U> {
  offer: T;
  consideration: U;
  success: boolean;

  public constructor(offer: T, consideration: U) {
    this.offer = offer;
    this.consideration = consideration;
    this.success = true;
  }
}

export class SwapFailure<T, U> implements SwapStatus<T, U> {
  offer: T;
  consideration: U;
  error: ISwapperError;

  public constructor(offer: T, consideration: U, error: ISwapperError) {
    this.offer = offer;
    this.consideration = consideration;
    this.error = error;
  }
}
