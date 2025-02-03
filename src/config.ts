import http from 'http';
import { window } from 'vscode';

function onConnect(res: http.IncomingMessage) {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const fmt = JSON.stringify(JSON.parse(data), null, 2);
    window.showInformationMessage(fmt);
  });
}

export function getConfig() {
  const socketPath = '/Users/seanny/Library/Application Support/railyard/run/railyard.sock';
  
  const options: http.RequestOptions = {
    socketPath,
    path: '/railyard.json',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const req = http.request(options, onConnect);

  req.on('error', (e) => {
    if (e instanceof Error) {
      window.showErrorMessage(`~~ ${e.message} ~~`);
    }     
  });

  req.end();
}