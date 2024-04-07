import React from 'react';
import ReactDOM from 'react-dom';

const portalRoot = typeof document !== 'undefined' ? document.getElementById('tooltip-portal') : null;

function TooltipPortal({ children }) {
  const portal = portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
  return portal;
}

export default TooltipPortal;
