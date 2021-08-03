function katexPlugin() {
    const toHTMLRenderers = {
        katex(node, context) {
            // const generator = new latexjs.HtmlGenerator({ hyphenate: false });
            // const { body } = latexjs.parse(node.literal, { generator }).htmlDocument();
            // console.log(body.innerHTML)
            // console.log(typeof node.literal)
            // console.log()
            let html = katex.renderToString(node.literal, {
                throwOnError: false
            })
            // console.log('node:', node)
            // console.log('context:', context)
            // console.log(html)
            return [
                { type: 'openTag', tagName: 'div', outerNewLine: true },
                { type: 'html', content: html },
                { type: 'closeTag', tagName: 'div', outerNewLine: true }
            ];
        },
    }

    return { toHTMLRenderers }
}

window.katexPlugin = katexPlugin