import React from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';

let objSocket;

const web_socket = () => {
  function connectSocket(mode, ip, port) {
    try {
      objSocket = null;
      updateConnectionStatus(
        'Conmection[' + ip + '] on port[' + port + '],mode[' + mode + ']'
      );
    } catch (err) {}
  }
  function updateConnectionStatus(msg) {
    let obj = new Date();
    let hr, min, sec;
  }
  return <></>;
};
export default web_socket;
