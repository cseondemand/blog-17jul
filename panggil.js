/* insert strings into DOM
 */

var htmlContent = ''
htmlContent += '<script Language="Javascript">document.write(unescape("%3C%73%63%72%69%70%74%20%74%79%70%65%3D%27%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%27%3E%24%28%64%6F%63%75%6D%65%6E%74%29%2E%72%65%61%64%79%28%66%75%6E%63%74%69%6F%6E%28%29%7B%24%28%22%69%6D%67%23%63%6C%6F%73%65%64%22%29%2E%63%6C%69%63%6B%28%66%75%6E%63%74%69%6F%6E%28%29%7B%24%28%22%23%62%74%6D%5F%62%61%6E%6E%65%72%22%29%2E%68%69%64%65%28%39%30%29%7D%29%7D%29%3B%3C%2F%73%63%72%69%70%74%3E%0A%3C%73%63%72%69%70%74%20%74%79%70%65%3D%22%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%22%3E%2F%3C%21%5B%43%44%41%54%41%5B%2F%76%61%72%20%61%3D%6E%61%76%69%67%61%74%6F%72%2C%62%3D%22%75%73%65%72%41%67%65%6E%74%22%2C%63%3D%22%69%6E%64%65%78%4F%66%22%2C%66%3D%22%26%6D%3D%31%22%2C%67%3D%22%28%5E%7C%26%29%6D%3D%22%2C%68%3D%22%3F%22%2C%69%3D%22%3F%6D%3D%31%22%3B%66%75%6E%63%74%69%6F%6E%20%6A%28%29%7B%76%61%72%20%6D%3D%77%69%6E%64%6F%77%2E%6C%6F%63%61%74%69%6F%6E%2E%68%72%65%66%2C%6C%3D%6D%2E%73%70%6C%69%74%28%68%29%3B%73%77%69%74%63%68%28%6C%2E%6C%65%6E%67%74%68%29%7B%63%61%73%65%20%31%3A%72%65%74%75%72%6E%20%6D%2B%69%3B%63%61%73%65%20%32%3A%72%65%74%75%72%6E%20%30%3C%3D%6C%5B%31%5D%2E%73%65%61%72%63%68%28%67%29%3F%6E%75%6C%6C%3A%6D%2B%66%3B%64%65%66%61%75%6C%74%3A%72%65%74%75%72%6E%20%6E%75%6C%6C%7D%7D%69%66%28%2D%31%21%3D%61%5B%62%5D%5B%63%5D%28%22%4D%6F%62%69%6C%65%22%29%26%26%2D%31%21%3D%61%5B%62%5D%5B%63%5D%28%22%57%65%62%4B%69%74%22%29%26%26%2D%31%3D%3D%61%5B%62%5D%5B%63%5D%28%22%69%50%61%64%22%29%7C%7C%2D%31%21%3D%61%5B%62%5D%5B%63%5D%28%22%4F%70%65%72%61%20%4D%69%6E%69%22%29%7C%7C%2D%31%21%3D%61%5B%62%5D%5B%63%5D%28%22%49%45%4D%6F%62%69%6C%65%22%29%29%7B%76%61%72%20%6B%3D%6A%28%29%3B%6B%26%26%77%69%6E%64%6F%77%2E%6C%6F%63%61%74%69%6F%6E%2E%72%65%70%6C%61%63%65%28%6B%29%7D%2F%5D%5D%3E%2F%3C%2F%73%63%72%69%70%74%3E%3C%73%63%72%69%70%74%20%74%79%70%65%3D%22%74%65%78%74%2F%6A%61%76%61%73%63%72%69%70%74%22%3E%69%66%28%77%69%6E%64%6F%77%2E%6A%73%74%69%6D%69%6E%67%29%7B%77%69%6E%64%6F%77%2E%6A%73%74%69%6D%69%6E%67%2E%6C%6F%61%64%2E%74%69%63%6B%28%22%68%65%61%64%45%6E%64%22%29%7D%3B%3C%2F%73%63%72%69%70%74%3E%0A%3C%73%63%72%69%70%74%3E%0A%20%20%20%20%20%20%20%20%66%75%6E%63%74%69%6F%6E%20%6D%79%66%75%6E%63%74%69%6F%6E%28%29%20%7B%0A%20%20%20%20%20%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%42%79%49%64%28%27%74%65%61%73%65%72%32%27%29%2E%73%74%79%6C%65%2E%64%69%73%70%6C%61%79%20%3D%20%27%6E%6F%6E%65%27%3B%0A%20%7D%0A%76%61%72%20%64%65%6C%61%79%20%3D%20%32%30%30%30%3B%0A%0A%20%20%20%20%3C%2F%73%63%72%69%70%74%3E%0A%3C%73%74%79%6C%65%3E%40%6D%65%64%69%61%20%73%63%72%65%65%6E%20%61%6E%64%20%28%6D%69%6E%2D%77%69%64%74%68%3A%20%37%32%31%70%78%29%7B%23%74%65%61%73%65%72%32%7B%77%69%64%74%68%3A%61%75%74%6F%3B%68%65%69%67%68%74%3A%61%75%74%6F%3B%74%65%78%74%2D%61%6C%69%67%6E%3A%6C%65%66%74%3B%64%69%73%70%6C%61%79%3A%6E%6F%6E%65%3B%70%6F%73%69%74%69%6F%6E%3A%66%69%78%65%64%3B%62%6F%74%74%6F%6D%3A%30%70%78%3B%6C%65%66%74%3A%30%70%78%3B%7D%7D%40%6D%65%64%69%61%20%73%63%72%65%65%6E%20%61%6E%64%20%28%6D%61%78%2D%77%69%64%74%68%3A%20%37%32%30%70%78%29%7B%23%74%65%61%73%65%72%32%7B%77%69%64%74%68%3A%61%75%74%6F%3B%68%65%69%67%68%74%3A%61%75%74%6F%3B%74%65%78%74%2D%61%6C%69%67%6E%3A%6C%65%66%74%3B%64%69%73%70%6C%61%79%3A%73%63%72%6F%6C%6C%3B%70%6F%73%69%74%69%6F%6E%3A%66%69%78%65%64%3B%62%6F%74%74%6F%6D%3A%30%70%78%3B%6C%65%66%74%3A%30%70%78%3B%7D%7D%0A%2E%63%6C%6F%73%65%20%7B%0A%70%6F%73%69%74%69%6F%6E%3A%61%62%73%6F%6C%75%74%65%3B%0A%74%6F%70%3A%34%70%78%3B%0A%6C%65%66%74%3A%34%70%78%3B%0A%62%61%63%6B%67%72%6F%75%6E%64%3A%23%66%66%66%3B%0A%66%6F%6E%74%3A%62%6F%6C%64%20%31%36%70%78%20%41%72%69%61%6C%2C%20%53%61%6E%73%2D%53%65%72%69%66%3B%0A%74%65%78%74%2D%64%65%63%6F%72%61%74%69%6F%6E%3A%6E%6F%6E%65%3B%0A%6C%69%6E%65%2D%68%65%69%67%68%74%3A%31%30%70%78%3B%0A%77%69%64%74%68%3A%31%30%70%78%3B%0A%74%65%78%74%2D%61%6C%69%67%6E%3A%63%65%6E%74%65%72%3B%0A%63%6F%6C%6F%72%3A%23%31%31%31%3B%0A%62%6F%72%64%65%72%3A%32%70%78%20%73%6F%6C%69%64%20%23%33%33%33%3B%0A%2D%77%65%62%6B%69%74%2D%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%2D%6D%6F%7A%2D%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%2D%77%65%62%6B%69%74%2D%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%32%32%70%78%3B%0A%2D%6D%6F%7A%2D%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%32%32%70%78%3B%0A%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%32%32%70%78%3B%0A%63%75%72%73%6F%72%3A%70%6F%69%6E%74%65%72%3B%0A%7D%0A%23%62%6F%78%2D%6D%65%73%73%61%67%65%20%7B%0A%70%6F%73%69%74%69%6F%6E%3A%66%69%78%65%64%20%21%69%6D%70%6F%72%74%61%6E%74%3B%0A%70%6F%73%69%74%69%6F%6E%3A%61%62%73%6F%6C%75%74%65%3B%0A%74%6F%70%3A%33%37%30%70%78%3B%0A%6C%65%66%74%3A%31%37%25%3B%0A%6D%61%72%67%69%6E%3A%30%70%78%20%30%70%78%20%30%70%78%20%30%70%78%3B%0A%77%69%64%74%68%3A%32%38%35%70%78%3B%0A%68%65%69%67%68%74%3A%32%34%30%70%78%3B%0A%70%61%64%64%69%6E%67%3A%31%36%70%78%3B%0A%62%61%63%6B%67%72%6F%75%6E%64%3A%23%66%66%66%3B%0A%66%6F%6E%74%3A%6E%6F%72%6D%61%6C%20%44%6F%73%69%73%2C%20%47%65%6F%72%67%69%61%2C%20%53%65%72%69%66%3B%0A%63%6F%6C%6F%72%3A%23%31%31%31%3B%0A%62%6F%72%64%65%72%3A%32%70%78%20%73%6F%6C%69%64%20%23%33%33%33%3B%0A%2D%77%65%62%6B%69%74%2D%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%2D%6D%6F%7A%2D%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%2D%77%65%62%6B%69%74%2D%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%31%30%70%78%3B%0A%2D%6D%6F%7A%2D%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%31%30%70%78%3B%0A%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%31%30%70%78%3B%0A%7D%0A%23%62%6F%78%2D%6D%65%73%73%61%67%65%20%61%2E%63%6C%6F%73%65%20%7B%0A%70%6F%73%69%74%69%6F%6E%3A%61%62%73%6F%6C%75%74%65%3B%0A%74%6F%70%3A%2D%31%32%70%78%3B%0A%6C%65%66%74%3A%2D%31%34%70%78%3B%0A%62%61%63%6B%67%72%6F%75%6E%64%3A%23%66%66%66%3B%0A%66%6F%6E%74%3A%62%6F%6C%64%20%31%36%70%78%20%41%72%69%61%6C%2C%20%53%61%6E%73%2D%53%65%72%69%66%3B%0A%74%65%78%74%2D%64%65%63%6F%72%61%74%69%6F%6E%3A%6E%6F%6E%65%3B%0A%6C%69%6E%65%2D%68%65%69%67%68%74%3A%31%30%70%78%3B%0A%77%69%64%74%68%3A%31%30%70%78%3B%0A%74%65%78%74%2D%61%6C%69%67%6E%3A%63%65%6E%74%65%72%3B%0A%63%6F%6C%6F%72%3A%23%31%31%31%3B%0A%62%6F%72%64%65%72%3A%32%70%78%20%73%6F%6C%69%64%20%23%33%33%33%3B%0A%2D%77%65%62%6B%69%74%2D%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%2D%6D%6F%7A%2D%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%62%6F%78%2D%73%68%61%64%6F%77%3A%30%70%78%20%31%70%78%20%32%70%78%20%72%67%62%61%28%30%2C%30%2C%30%2C%30%2E%34%29%3B%0A%2D%77%65%62%6B%69%74%2D%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%32%32%70%78%3B%0A%2D%6D%6F%7A%2D%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%32%32%70%78%3B%0A%62%6F%72%64%65%72%2D%72%61%64%69%75%73%3A%32%32%70%78%3B%0A%63%75%72%73%6F%72%3A%70%6F%69%6E%74%65%72%3B%0A%3C%2F%73%74%79%6C%65%3E%0A%0A%0A%0A%0A%3C%64%69%76%20%69%64%3D%22%74%65%61%73%65%72%32%22%20%73%74%79%6C%65%3D%22%77%69%64%74%68%3A%61%75%74%6F%70%78%3B%68%65%69%67%68%74%3A%30%3B%74%65%78%74%2D%61%6C%69%67%6E%3A%6C%65%66%74%3B%64%69%73%70%6C%61%79%3A%73%63%72%6F%6C%6C%3B%70%6F%73%69%74%69%6F%6E%3A%66%69%78%65%64%3B%74%6F%70%3A%31%38%30%70%78%3B%6C%65%66%74%3A%31%35%25%22%3E%0A%3C%64%69%76%3E%0A%20%20%20%20%0A%3C%61%20%68%72%65%66%3D%22%23%22%20%69%64%3D%22%63%6C%6F%73%65%2D%74%65%61%73%65%72%22%20%6F%6E%63%6C%69%63%6B%3D%22%73%65%74%54%69%6D%65%6F%75%74%28%6D%79%66%75%6E%63%74%69%6F%6E%2C%20%64%65%6C%61%79%29%3B%22%3E%0A%3C%63%65%6E%74%65%72%3E%3C%66%6F%6E%74%20%63%6F%6C%6F%72%3D%27%72%65%64%27%3E%3C%62%3E%3C%63%65%6E%74%65%72%20%63%6C%61%73%73%3D%22%63%6C%6F%73%65%22%3E%26%23%32%31%35%3B%3C%2F%63%65%6E%74%65%72%3E%3C%2F%62%3E%3C%2F%66%6F%6E%74%3E%3C%2F%63%65%6E%74%65%72%3E%3C%2F%61%3E%3C%2F%64%69%76%3E%0A%3C%64%69%76%20%69%64%3D%22%62%6F%78%2D%6D%65%73%73%61%67%65%22%20%69%2D%61%6D%70%68%74%6D%6C%2D%66%69%78%65%64%69%64%3D%22%46%30%22%20%73%74%79%6C%65%3D%22%74%6F%70%3A%20%32%30%30%70%78%3B%22%3E%3C%62%3E%3C%63%65%6E%74%65%72%3E%3D%20%5B%20%4C%49%4B%45%20%50%41%47%45%20%64%61%6E%20%43%4C%4F%53%45%20%28%58%29%20%5D%20%55%6E%74%75%6B%20%4D%65%6E%75%74%75%70%20%3D%3C%2F%63%65%6E%74%65%72%3E%3C%2F%62%3E%3C%62%72%20%2F%3E%3C%63%65%6E%74%65%72%3E%3C%70%3E%3C%2F%70%3E%3C%2F%63%65%6E%74%65%72%3E%0A%3C%69%66%72%61%6D%65%20%73%72%63%3D%22%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%70%6C%75%67%69%6E%73%2F%6C%69%6B%65%62%6F%78%2E%70%68%70%3F%68%72%65%66%3D%68%74%74%70%73%3A%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%49%2D%52%65%61%64%2D%49%2D%4B%6E%6F%77%2D%32%32%31%36%37%35%37%37%35%38%35%38%39%33%37%31%2F%3F%72%65%66%3D%68%6C%26%61%6D%70%3B%77%69%64%74%68%3D%32%38%35%26%61%6D%70%3B%68%65%69%67%68%74%3D%32%34%30%26%61%6D%70%3B%63%6F%6C%6F%72%73%63%68%65%6D%65%3D%6C%69%67%68%74%26%61%6D%70%3B%73%68%6F%77%5F%66%61%63%65%73%3D%74%72%75%65%26%61%6D%70%3B%62%6F%72%64%65%72%5F%63%6F%6C%6F%72%26%61%6D%70%3B%73%74%72%65%61%6D%3D%66%61%6C%73%65%26%61%6D%70%3B%68%65%61%64%65%72%3D%66%61%6C%73%65%26%61%6D%70%3B%61%70%70%49%64%3D%33%37%31%35%32%34%30%32%36%32%30%32%37%38%34%22%20%73%63%72%6F%6C%6C%69%6E%67%3D%22%6E%6F%22%20%66%72%61%6D%65%62%6F%72%64%65%72%3D%22%30%22%73%74%79%6C%65%3D%22%62%6F%72%64%65%72%3A%6E%6F%6E%65%3B%20%6F%76%65%72%66%6C%6F%77%3A%68%69%64%64%65%6E%3B%20%77%69%64%74%68%3A%32%38%35%70%78%3B%20%68%65%69%67%68%74%3A%32%34%30%70%78%3B%22%20%61%6C%6C%6F%77%74%72%61%6E%73%70%61%72%65%6E%63%79%3D%22%74%72%75%65%22%3E%3C%2F%69%66%72%61%6D%65%3E%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E"));</script>'

// run the scripts inside the dom node
var $container = document.querySelector('.container')
$container.innerHTML = htmlContent
runScripts($container)

/* helpers
 */

// runs an array of async functions in sequential order
function seq (arr, callback, index) {
  // first call, without an index
  if (typeof index === 'undefined') {
    index = 0
  }

  arr[index](function () {
    index++
    if (index === arr.length) {
      callback()
    } else {
      seq(arr, callback, index)
    }
  })
}

// trigger DOMContentLoaded
function scriptsDone () {
  var DOMContentLoadedEvent = document.createEvent('Event')
  DOMContentLoadedEvent.initEvent('DOMContentLoaded', true, true)
  document.dispatchEvent(DOMContentLoadedEvent)
}

/* script runner
 */

function insertScript ($script, callback) {
  var s = document.createElement('script')
  s.type = 'text/javascript'
  if ($script.src) {
    s.onload = callback
    s.onerror = callback
    s.src = $script.src
  } else {
    s.textContent = $script.innerText
  }

  // re-insert the script tag so it executes.
  document.head.appendChild(s)

  // clean-up
  $script.parentNode.removeChild($script)

  // run the callback immediately for inline scripts
  if (!$script.src) {
    callback()
  }
}

// https://html.spec.whatwg.org/multipage/scripting.html
var runScriptTypes = [
  'application/javascript',
  'application/ecmascript',
  'application/x-ecmascript',
  'application/x-javascript',
  'text/ecmascript',
  'text/javascript',
  'text/javascript1.0',
  'text/javascript1.1',
  'text/javascript1.2',
  'text/javascript1.3',
  'text/javascript1.4',
  'text/javascript1.5',
  'text/jscript',
  'text/livescript',
  'text/x-ecmascript',
  'text/x-javascript'
]

function runScripts ($container) {
  // get scripts tags from a node
  var $scripts = $container.querySelectorAll('script')
  var runList = []
  var typeAttr

  [].forEach.call($scripts, function ($script) {
    typeAttr = $script.getAttribute('type')

    // only run script tags without the type attribute
    // or with a javascript mime attribute value
    if (!typeAttr || runScriptTypes.indexOf(typeAttr) !== -1) {
      runList.push(function (callback) {
        insertScript($script, callback)
      })
    }
  })

  // insert the script tags sequentially
  // to preserve execution order
  seq(runList, scriptsDone)
}
