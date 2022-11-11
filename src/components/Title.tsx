import React from 'react';

const Title = ({ children = null }: { children?: React.ReactNode }) => {
  return (
    <h1 className="text-3xl font-bold text-center mt-8 mb-12">{children}</h1>
  );
};

export default Title;
