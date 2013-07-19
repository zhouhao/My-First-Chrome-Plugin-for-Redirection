  function open() {
    //chrome.tabs.create({"url":"http://weibo.com", "selected":true});
    chrome.tabs.update(null, {url:"http://sbzhouhao.net"});
  }

  chrome.browserAction.onClicked.addListener(open);