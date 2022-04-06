'use strict';
const PLUGIN_NAME = 'gulp-jsdom';
import through from 'through2';
import PluginError from 'plugin-error';
import jsdom from 'jsdom';
import { BufferFile } from 'vinyl';
const { JSDOM } = jsdom;

/**
 * JSDOM via gulp
 * @param mutator
 * @param options
 * @param serialize dom.serialize()
 * @returns
 */
export default function gulpJSDOM(
  mutator: { call: (arg0: { file: BufferFile; filename: string }, arg1: Document, arg2: jsdom.DOMWindow) => any } & any,
  options?: jsdom.ConstructorOptions,
  serialize?: boolean
) {
  options = options || {};
  serialize = serialize || true;

  return through.obj((file, encoding, callback) => {
    if (file.isNull()) {
      return callback(null, file);
    }
    if (file.isStream()) {
      callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return;
    }

    try {
      if (file.isBuffer()) {
        const dom = new JSDOM(file.contents.toString('utf8'), options);

        const context = {
          file: file,
          filename: file.history[file.history.length - 1].substr(file.base.length),
        };
        console.log(context);
        const output = mutator.call(context, dom.window.document, dom.window);

        file.contents = Buffer.from(
          typeof output === 'string'
            ? output
            : serialize === true
            ? dom.serialize()
            : dom.window.document.documentElement.outerHTML
        );
        this.push(file);
      }
    } catch (err) {
      this.emit('error', new PluginError(PLUGIN_NAME, err));
    }

    callback();
  });
}
