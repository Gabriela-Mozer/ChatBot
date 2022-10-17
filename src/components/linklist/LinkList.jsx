import React from "react";
import "./linkList.css";

export default function LinkList(props) {
  const LinkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </a>
    </li>
  ));
  return <ul className="link-list">{LinkMarkup}</ul>;
}
