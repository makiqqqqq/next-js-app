'use client';

import React, { FC } from 'react';

type ErrorProps = {
  error: Error;
};

const ErrorWrapper: FC<ErrorProps> = ({ error }) => {
  return (
    <div>
      <h4 className="text-red-600">Oops!! {error.message}</h4>
    </div>
  );
};

export default Error;
