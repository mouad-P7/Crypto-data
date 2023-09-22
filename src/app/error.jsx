'use client'; 

import Alert from '@mui/material/Alert';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-[60vh]">
      <Alert severity="error">
        <p>{error}</p>
        <button onClick={() => reset()}>
          <strong>Try again</strong>
        </button>
      </Alert>
    </div>
  );
};
