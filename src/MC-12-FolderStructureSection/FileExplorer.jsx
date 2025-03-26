import { useState } from 'react';

export const FileExplorer = ({ data }) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div>
      <div  className="ml-2 p-2">
        <div className="cursor-pointer flex p-1 gap-2 border-l-4" onClick={() => setShowChildren(!showChildren)}>
          <span>{data.type === 'folder' ? (showChildren ? '📂' : '📁') : '📃'}</span>
          {data.name}
        </div>

        {showChildren &&
          data?.children?.map((data) => (
            <div>
              <FileExplorer data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};
