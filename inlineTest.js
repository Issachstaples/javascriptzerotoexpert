var inlineTest = inlineTest ||{}
const registerEventHandlers = () => {
    on('chat:message', handleInput);
function handleInput(msg){
    if (msg.type !== 'api' || !/^!inlineTest\b/.test(msg.content)) return;      
    let args = msg.content
      .split(/\s+--/)
      .map(a => a.split(/=/))
      .map(a => [a[0].toLowerCase(),a[1]])
      .filter(a => ["level", "roll1", "roll2"].includes(a[0]));  
    }
    msg.content = msg.inlinerolls
        .reduce((previous, current, index) => {
            previous['$[['+index+']]']=current.results.total || 0;
            return previous;
        },{})
        .reduce((previous, current, index) => {
            return previous.replace(index, current);
        },msg.content);
    function chatLog(){
        sendChat("GM", `chat test  args array ${args} + msg.content array ${msg.content}`);
    } 
chatLog();       
}
