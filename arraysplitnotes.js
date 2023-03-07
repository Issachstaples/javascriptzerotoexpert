///Each function is an example of spliting messages, arrays how to filter and sanitize arrays and how to map new arrays with the results.

function processInlinerolls(msg) {
    if (_.has(msg, 'inlinerolls')) {
        return _.chain(msg.inlinerolls)
                .reduce(function(previous, current, index) {
                    previous['$[[' + index + ']]'] = current.results.total || 0;
                    return previous;
                },{})
                .reduce(function(previous, current, index) {
                    return previous.replace(index, current);
                }, msg.content)
                .value();
    } else {
        return msg.content;
    }
}

if (!(msg.inlinerolls && msg.inlinerolls.length)) {
    // handle bad message syntax here... sending a notification to the user...
    return;
  }
  let args = msg.content.split(/\s+/).slice(1);
  let args = msg.content
             .split(/\s+/)
             .slice(1)
             .filter(a => /^\$\[\[\d+]]$/.test(a));
             .map(a => msg.inlinerolls[/^\$\[\[(\d+)]]$/.exec(a)[1]]);
             
             args.forEach((a,i) => log(`Roll ${i}: ${JSON.stringify(a, undefined, 2)}`));  
