import React from 'react';
import './SearchBar.scss';
import { Button } from "../Button";

export function SearchBar() {
  return (
    <div className="search-bar">
      <input type="search" placeholder="Search for products" className="search-bar__input" />
      <Button className="search-bar__button button--text">
          <svg viewBox="0 0 24 24" preserveAspectRatio="none" height="20">
            <path d="M21.668 20.108l-3.59-3.562c2.803-3.588 2.508-8.698-.713-11.917A8.948 8.948 0 0010.998 2c-2.41 0-4.671.934-6.368 2.629A8.937 8.937 0 002 10.992c0 2.408.934 4.669 2.63 6.364a8.948 8.948 0 006.368 2.628 8.893 8.893 0 005.532-1.916l3.565 3.612c.22.221.492.32.786.32.295 0 .566-.123.787-.32.443-.417.443-1.13 0-1.572zm-3.884-9.116a6.723 6.723 0 01-1.992 4.792 6.777 6.777 0 01-4.794 1.99 6.773 6.773 0 01-4.795-1.99 6.769 6.769 0 01-1.991-4.792c0-1.818.712-3.514 1.991-4.791a6.777 6.777 0 014.795-1.99c1.819 0 3.516.711 4.794 1.99a6.729 6.729 0 011.992 4.791z">
            </path>
          </svg>
      </Button>
    </div>
  );
}

