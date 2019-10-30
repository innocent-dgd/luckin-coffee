import Mock from "mockjs";

  	Mock.mock("http://jx.xuzhixiang.top/ap/api/productlist.php",{

      "list|3-9":[
      	{
      		"pid|+1":0,
      		"name":"@cname()",
      		"city":"@city(true)",
      		"img":"@image()",
      		"dataimg":"@dataImage()",
      		"sfz":"@id()"
      	}
      ]

    })
