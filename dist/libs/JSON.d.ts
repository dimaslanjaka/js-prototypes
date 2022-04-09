interface JSON {
    /**
     * @see {@link https://stackoverflow.com/a/61962964/6404439}
     */
    stringifyWithCircularRefs: (obj: any, space?: number) => string;
}
