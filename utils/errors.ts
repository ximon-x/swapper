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
export interface SwapStatus {
  success: boolean;
}

export class SwapSuccess implements SwapStatus {
  success: boolean;

  public constructor() {
    this.success = true;
  }
}

export class SwapFailure implements SwapStatus {
  success: boolean;
  error: ISwapperError;

  public constructor(error: ISwapperError) {
    this.success = false;
    this.error = error;
  }
}
