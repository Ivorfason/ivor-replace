# ivor-replace
Transform text-files with custom values...

## Introduction
A simple util due to help developers to transform files to create template files within custom values which is similar to wonderful [yeoman](http://yeoman.io/) :)

Supported develop environment with this better:

* [Nodejs 6.x+](http://nodejs.cn/)
* [ES6](http://es6.ruanyifeng.com/)

## Getting Started

### • npm install ivor-replace;
### • import transformer from 'ivor-replace';
### • transformer(sourcePath, transArr, newName, newPath)；

* [sourcePath]

	The Absolute path of your template files.

* [transArr]

	The Array to transfrom files within your custom values which is like this:

        [
        	{ 
				key: 'a',
				value: 'aaa'
			},
			{ 
				key: 'b',
				value: 'bbb'
			},
			{ 
				key: 'c',
				value: 'ccc'
			}
		]

* [newName]

	The name of the new files that you are gonna create.
 
* [newPath]

	The path of the new files that you are gonna create.
	
### • Define values in template files
* Define values in positions which should to replaced by '<##' and '##>' just like this:

	import React, { Component } from 'react';<br>
	<## a ##><br>
	<## b ##><br>
	const styles = StyleSheet.create(<## c ##>);
