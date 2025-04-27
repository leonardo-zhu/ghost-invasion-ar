import React from 'react';

interface Props {
  message?: string;
}

const Message: React.FC<Props> = (props) => {
  const { message } = props;

  return (
    <div>
      {message && (
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
          {message}
        </div>
      )}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
        请使用手机横屏浏览
      </div>
    </div>
  );
};

export default Message;
