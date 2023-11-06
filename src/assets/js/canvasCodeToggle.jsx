import React from 'react';
import { Canvas, Source } from '@storybook/blocks';

const CodeToggle = ({ codeTitle, blockId, code, language }) => {
  code = code.replaceAll('\t', '  ');
  return (
    <div style={{ display: 'none' }} id={blockId}>
      <h3>{codeTitle}</h3>
      <Source
        dark={true}
        type="code"
        language={language}
        code={code}
        format={true} />
    </div>
  );
};

const CanvasActions = ({ buttonTitle, blockId }) => {
  const toggleCode = () => {
    const x = document.getElementById(blockId);
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  };

  return (
    {
      title: buttonTitle,
      onClick: toggleCode,
    }
  );
};

const CanvasCodeToggle = ({ codes }) => {
  const canvasActions = codes.map((item) => CanvasActions({ buttonTitle: item.buttonTitle, blockId: item.blockId }));

  return (
    <div>
      <Canvas
        sourceState="none"
        withToolbar="true"
        additionalActions={canvasActions}
      />
      {codes.map((item) => (
        <CodeToggle
          key={item.blockId}
          codeTitle={item.codeTitle}
          blockId={item.blockId}
          code={item.code}
          language="css"
        />
      ))}
    </div>
  );
};

export default CanvasCodeToggle;