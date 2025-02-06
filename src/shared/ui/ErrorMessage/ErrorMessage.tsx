// shared/ui/ErrorMessage/ErrorMessage.tsx
import React from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { Text } from '@/shared/ui/Text';
import {
  isFetchBaseQueryError,
  isSerializedError,
} from '@/shared/utils/errorUtils';

interface ErrorMessageProps {
  error: FetchBaseQueryError | SerializedError | undefined;
}

const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined,
): string => {
  if (isFetchBaseQueryError(error)) {
    return (
      'Error: ' + (error.data as { message?: string })?.message ||
      'Unknown error'
    );
  } else if (isSerializedError(error)) {
    return error.message || 'Unknown error';
  }
  return 'Unknown error';
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const message = getErrorMessage(error);
  return message ? <Text variant={'error'}>{message}</Text> : null;
};
