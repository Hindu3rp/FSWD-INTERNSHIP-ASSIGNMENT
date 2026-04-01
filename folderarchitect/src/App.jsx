import { useState } from "react";


export default function App() {
  const [folders, setFolders] = useState({
    Documents: [],
    Images: [],
  });

  const [fileName, setFileName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("Documents");
  const [clipboard, setClipboard] = useState(null);
  const [mode, setMode] = useState(""); // copy or cut
  const [loading, setLoading] = useState(false);

  const addFile = () => {
    if (!fileName) return;

    setFolders({
      ...folders,
      [selectedFolder]: [...folders[selectedFolder], fileName],
    });

    setFileName("");
  };

  const copyFile = (file) => {
    setClipboard(file);
    setMode("copy");
  };

  const cutFile = (file, folder) => {
    setClipboard(file);
    setMode("cut");

    setFolders({
      ...folders,
      [folder]: folders[folder].filter((f) => f !== file),
    });
  };

  const pasteFile = () => {
    if (!clipboard) return;

    setLoading(true);

    setTimeout(() => {
      setFolders({
        ...folders,
        [selectedFolder]: [...folders[selectedFolder], clipboard],
      });

      setClipboard(null);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>📁 Folder Architect</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Enter file name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />

        <select
          onChange={(e) => setSelectedFolder(e.target.value)}
          value={selectedFolder}
        >
          {Object.keys(folders).map((folder) => (
            <option key={folder}>{folder}</option>
          ))}
        </select>

        <button onClick={addFile}>Add File</button>
        <button onClick={pasteFile}>Paste</button>
      </div>

      {loading && (
        <p className="loading">
          Retrieving data. Wait a few seconds and try to cut or copy again...
        </p>
      )}

      <div className="folders">
        {Object.keys(folders).map((folder) => (
          <div className="folder" key={folder}>
            <h3>📂 {folder}</h3>

            {folders[folder].map((file, index) => (
              <div className="file" key={index}>
                📄 {file}

                <button onClick={() => copyFile(file)}>Copy</button>
                <button onClick={() => cutFile(file, folder)}>Cut</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}