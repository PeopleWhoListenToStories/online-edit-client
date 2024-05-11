import React, { useRef, useState } from 'react';

import { TextArea } from '@radix-ui/themes';

import { BottomBar } from './components/bottom-bar';
import { key } from './utils';

export const Terminal: React.FC = () => {
  const draggableRef = useRef(null);

  const [content, setContent] = useState<JSX.Element[]>([
    <TextArea
      placeholder=""
      id={'0'}
      key={key()}
      onKeyDownCapture={(e: React.KeyboardEvent<HTMLTextAreaElement>) => executeCommand(e)}
    />,
    // <Row id={0} key={key()} onkeydown={(e: React.KeyboardEvent<HTMLInputElement>) => executeCommand(e, 0)} />,
  ]);

  const executeCommand = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(`%c 🎻 🚀 : executeCommand -> e `, `font-size:14px;background-color:#9111fb;color:white;`, e);
    clearCommand();
  };

  const clickToFocus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('clickToFocus...', e);
  };

  // 清空command命令
  const clearCommand = () => {
    setContent([]);
  };

  return (
    <div ref={draggableRef} className="relative flex flex-col h-full">
      <div
        className="flex flex-col p-4 pr-[5px] h-full text-white bg-[#1C1C1E]/95 rounded-lg"
        style={{ fontFamily: 'Menlo, monospace', fontSize: '14px' }}
      >
        <div className="h-6 rounded-lg"></div>
        <div className="flex flex-col flex-1 w-full mb-2 overflow-y-scroll scrollbar">
          <div>Welcome to Terminal,type `help` to get started,have fun!</div>
          <div className="flex-1 w-full" onClick={(e) => clickToFocus(e)}>
            {[...content]}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full ">
        <BottomBar />
      </div>
    </div>
  );
};
