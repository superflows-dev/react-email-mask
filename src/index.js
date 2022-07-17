import React from 'react'
import styles from './styles.module.css'


export const maskEmail = (stringValue) => {

  var oldStringValue = stringValue;

  const re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

  var foundEmails = [];

  var match;

  while (match = stringValue.match(re)){

    foundEmails.push(match[0]);
    stringValue = stringValue.replace(match[0],"")

  }

  var maskedEmails = [];

  for(var i = 0; i < foundEmails.length; i++) {

    const strArr = foundEmails[i].split('@');

    const left = strArr[0].length <= 1 ? '*' : strArr[0].length <= 2 ? '**' : strArr[0].slice(0,1) + '*'.repeat(strArr[0].length - 2) + strArr[0].slice(strArr[0].length - 1, strArr[0].length);

    const domain = strArr[1].split('.')[0]; 

    const right = domain.length <= 1 ? '*' : domain.length <= 2 ? '**' : domain.slice(0,1) + '*'.repeat(domain.length - 2) + domain.slice(domain.length - 1, domain.length);

    maskedEmails.push(left + '@' + right + '.' + strArr[1].split('.')[1]);

  }

  stringValue = oldStringValue;

  for(var i = 0; i < foundEmails.length; i++) {

    stringValue = replaceAll(stringValue, foundEmails[i], maskedEmails[i]);

  }

  return stringValue;

}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
}
