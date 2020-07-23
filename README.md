# AprilEditor
javascript을 기반으로 구현된 웹 에디터입니다.


## 1. Include

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="./AprilEditor/assets/js/jquery.ui.touch-punch.js"></script>
<script type="text/javascript" src="./AprilEditor/assets/js/hammer.min.js"></script>
<script type="text/javascript" src="./AprilEditor/assets/js/config.js"></script>
<script type="text/javascript" src="./AprilEditor/assets/js/AprilEditor.js"></script>
<link rel="stylesheet" href="./AprilEditor/assets/css/jquery.mobile-1.4.5.min.css" />
<link rel="stylesheet" href="./AprilEditor/assets/css/AprilEditor.css" />
```

## 2. Target Element

``` <div id="AprilEditor"></div>```


## 3. Create

```
$("#editor").init();
```

## 4. Use how

```
// 아이템이 추가될 때 event 발생
document.addEventListener('insertEditing', function (e) {	
		event property
		{	detail: Array(2)
			0: {type: "image", width: 101, height: 90, data: local File}
			1: {type: "image", width: 101, height: 90, data: local File}
		}		
		your code...	 
    var JsonArray = [];
    
    var imgOne = {
        'type': 'image',
        'width': '101',  // image width
        'height': '90', // image height
        'data': 'server file'
    };
		var imgTwo = {
        'type': 'image',
        'width': '101',  // image width
        'height': '90', // image height
        'data': 'server file'
    };
    
    var linkOne = {
    	"type": "link",
    	"data": string, // url
    	"metadata": {
    		"title": string,
    		"site_name": string,
    		"description": string,
    		"thumbnail": string,
    		"url": string
    	}
    }
    
    var textOne = {
    	"type": "text",
    	"data": [
    		{ "text": "..." },
    		{ "text": "...", "attrs": { "bold": true } },
    		{ "text": "...", "attrs": { "color": "#cccccc" } },
    		{ "text": "...", "attrs": { "size": 0~2 } },
    		{ "text": "...", "attrs": { "link": "https://..." } },
    	]
    }
    
    JsonArray.push(imgOne);
    JsonArray.push(imgTwo);
    JsonArray.push(linkOne);
    JsonArray.push(textOne);

    e.callback.success(JsonArray);
});

const editor = require('../../../../static/AprilEditor/AprilEditor');
editor.init();
editor.setPath('cdn 주소');
```

## 5. Funtions

```
const editor = require('../../../../static/AprilEditor/AprilEditor');

// 에디터 생성
editor.init();

// 이미지 경로 앞에 붙을 cdn
editor.setPath('서버 경로');

// 전체 아이템 JSON Array를 반환한다
editor.getItems();

// 아이템 추가
/* param
	 JSON Array(text, img, link)
*/
editor.setItems(param);

// 모든 아이템 삭제
editor.removeAll();

// 아이템 마우스 이벤트 추가
// 기본 값 false
editor.setItemsAnimation(true)

```
