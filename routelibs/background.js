// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copyright (c) 2020 molihub@github.com. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

console.log("extension started");

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("Cat intercepted: " + info.url);

	var keys = Object.keys(siteMap);
	for(var i=0; i<keys.length; i++)
	{
		if(info.url.startsWith(keys[i]))
		{
			 return {redirectUrl: info.url.replace(keys[i], siteMap[keys[i]])};
		}
	}
	
	return {cancel: false};
  },
  // filters
  {
    urls: [
      "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    ],
  },
  // extraInfoSpec
  ["blocking"]);
