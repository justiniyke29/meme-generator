import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

export const MemeGenerated = () => {

  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();
  const naviagte = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('url');

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(prev => !prev);
  };

  return(
    <div className="container"s>
      <button onClick={() => naviagte('/')} className="home">
        Make More Memes
      </button>
      { url && <img alt='meme' src={url} /> }
      <button onClick={copyLink} className="copy">
        {copied ? 'Link copied!' : 'Copy link'}
      </button>
    </div>
  );
};
