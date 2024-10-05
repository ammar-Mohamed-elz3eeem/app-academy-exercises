#!/usr/bin/env node
const path = require("path");
const fs = require('fs');

/**
 * This function takes the command line arguments and
 * parse them to make folders according to this args.
 * 
 * @param {Array} args
 *     This is the command line arguments.
 */
function mkdir (args) {
  do {
    if (!fs.existsSync(path.resolve(__dirname, args[0]))) {
			fs.mkdirSync(path.resolve(__dirname, args[0]), { recursive: true });
      console.log(`Folder ${path.resolve(__dirname, args[0])} created successfully`);
		} else {
			console.log(`Folder ${path.resolve(__dirname, args[0]) + ".js"} already exist`);
		}
    args.splice(0, 1);
  } while (args.length != 0);
}

/**
 * This function takes the command line arguments and
 * parse them to make files according to this args.
 *
 * @param {Array} args
 *     This is the command line arguments.
 */
function mkfile (args) {
  if (!fs.existsSync(path.resolve(__dirname, args[0]) + ".js")) {
		fs.openSync(path.resolve(__dirname, args[0]) + ".js", "w");
		console.log(`File ${path.resolve(__dirname, args[0]) + ".js"} created successfully`);
	} else {
		console.log(`File ${path.resolve(__dirname, args[0]) + ".js"} already exist`);
	}
}

/**
 * This function parses the given command line arguments
 * to convert them to lowercase + any string with spaces
 * will convert it to string with dashes.
 * 
 * @param {Array} args
 *     This is the array containing the command line
 *     arguments to operate on.
 */
function convertArgsToFormalArgs (args) {
  for (let argIdx in args) {
		args.splice(argIdx, 1, args[argIdx].toLowerCase().split(" ").join("-"));
	}
}

function main () {
  const args = process.argv.slice(2);
  convertArgsToFormalArgs(args);

  if (args.length <= 1) {
    return mkfile(args);
  }

  if (args[0] == "-d" || args[0] == "--directory") {
    mkdir(args.slice(1));
  }
}

main();
