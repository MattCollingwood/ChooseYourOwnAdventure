import React from 'react';
import { Outlet } from 'react-router-dom';


const Root =() => {
  return (
    <div>
      {/* Optional: Add shared layout elements like a header or nav */}
      <main>
        <Outlet />
      </main>
      {/* Optional: Shared footer */}
    </div>
  );
}

export default Root;