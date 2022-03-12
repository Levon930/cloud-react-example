import { UserRole } from '@api';

export const findRole = (str: string, arr: UserRole[]): boolean => {
  return !!arr.filter((item) => item === str).length;
};

// export const checkUnauthorizedError = (error: any): boolean => {
//   if (!error.graphQLErrors) {
//     return false;
//   }

//   console.log(error);

//   // return error.graphQLErrors.some((err: any) => err.code === ErrorCode.UnauthorizedError);
// };
