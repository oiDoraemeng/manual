// .vuepress/config.ts
import { defineConfig } from "vuepress/config";

// .vuepress/navbar.ts
var navbar_default = [
  {
    text: "NeuroVision",
    link: "/NeuroVision/"
  },
  {
    text: "BloodVision",
    link: "/BloodVision/"
  },
  {
    text: "MedVision",
    link: "/MedVision/"
  }
];

// .vuepress/sidebars/codeNavSideBar.ts
var codeNavSideBar_default = [
  "",
  {
    title: "\u661F\u7403\u8D44\u6599",
    collapsable: true,
    children: [
      "\u661F\u7403\u8D44\u6599/\u5B66\u4E60\u8D44\u6E90",
      "\u661F\u7403\u8D44\u6599/\u4E13\u5C5E\u5B66\u4E60\u8DEF\u7EBF",
      "\u661F\u7403\u8D44\u6599/\u4E13\u5C5E\u4EA4\u6D41\u7FA4",
      "\u661F\u7403\u8D44\u6599/\u9C7C\u76AE\u7684\u5B66\u4E60\u7B14\u8BB0",
      "\u661F\u7403\u8D44\u6599/\u9C7C\u76AE\u7684\u6253\u5DE5\u65E5\u8BB0"
    ]
  },
  {
    title: "\u661F\u7403\u9879\u76EE",
    collapsable: true,
    children: [
      "/\u9879\u76EE\u5B9E\u6218/\u{1F525} AI \u7B54\u9898\u5E94\u7528\u5E73\u53F0\uFF08\u6700\u65B0\u8FDB\u884C\u4E2D\uFF09",
      "/\u9879\u76EE\u5B9E\u6218/\u4EE3\u7801\u751F\u6210\u5668\u5171\u4EAB\u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/\u624B\u5199 RPC \u6846\u67B6",
      "/\u9879\u76EE\u5B9E\u6218/OJ \u5224\u9898\u7CFB\u7EDF",
      "/\u9879\u76EE\u5B9E\u6218/\u667A\u80FD BI \u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/API \u5F00\u653E\u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/\u805A\u5408\u641C\u7D22\u5E73\u53F0",
      "/\u9879\u76EE\u5B9E\u6218/\u7528\u6237\u4E2D\u5FC3\u9879\u76EE",
      "/\u9879\u76EE\u5B9E\u6218/\u4F19\u4F34\u5339\u914D\u7CFB\u7EDF",
      "/\u9879\u76EE\u5B9E\u6218/Java \u540E\u7AEF\u4E07\u7528\u9879\u76EE\u6A21\u677F",
      "/\u9879\u76EE\u5B9E\u6218/\u524D\u7AEF\u4E07\u7528\u9879\u76EE\u6A21\u677F",
      "/\u9879\u76EE\u5B9E\u6218/\u9C7C\u76AE\u9879\u76EE\u5B66\u4E60\u5EFA\u8BAE\uFF08\u5FC5\u8BFB\uFF09",
      "\u661F\u7403\u9879\u76EE/\u9879\u76EE\u8BAD\u7EC3\u8425",
      "\u661F\u7403\u9879\u76EE/Web \u7EC8\u7AEF\u9879\u76EE",
      "\u661F\u7403\u9879\u76EE/\u7F16\u7A0B\u5BFC\u822A\u5956\u52B1\u7CFB\u7EDF",
      "\u661F\u7403\u9879\u76EE/SQL \u751F\u6210\u5668\u9879\u76EE",
      "\u661F\u7403\u9879\u76EE/\u5DE5\u4F5C\u8BB0\u5F55\u5206\u6790\u5DE5\u5177"
    ]
  },
  {
    title: "\u661F\u7403\u76F4\u64AD",
    collapsable: true,
    children: ["\u661F\u7403\u76F4\u64AD/", "\u661F\u7403\u76F4\u64AD/\u5F80\u671F\u76F4\u64AD", "\u661F\u7403\u76F4\u64AD/\u5609\u5BBE\u5206\u4EAB"]
  },
  {
    title: "\u771F\u5B9E\u8BC4\u4EF7",
    collapsable: true,
    children: ["\u771F\u5B9E\u8BC4\u4EF7/"]
  },
  {
    title: "\u661F\u7403\u6545\u4E8B",
    collapsable: true,
    children: ["\u661F\u7403\u6545\u4E8B/"]
  },
  {
    title: "\u5173\u4E8E\u6211\u4EEC",
    collapsable: true,
    children: ["\u5173\u4E8E\u6211\u4EEC/", "\u5173\u4E8E\u6211\u4EEC/\u4E2A\u4EBA\u7ECF\u5386"]
  },
  "\u661F\u7403\u5E74\u5EA6\u603B\u7ED3",
  "\u52A0\u5165\u7F16\u7A0B\u5BFC\u822A"
];

// .vuepress/sidebars/knowledgeSideBar.ts
var knowledgeSideBar_default = [
  "",
  {
    title: "\u77E5\u8BC6\u788E\u7247",
    collapsable: false,
    children: [
      "4 \u79CD\u65B9\u6CD5\uFF0C\u5FEB\u901F\u521D\u59CB\u5316 Java \u9879\u76EE.md",
      "\u4F7F\u7528\u540E\u7AEF\u4EE3\u7801\u751F\u6210\u5668\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387.md",
      "\u524D\u7AEF\u5FC5\u5B66\u7684\u5F00\u53D1\u6846\u67B6\uFF0CAnt Design Pro.md",
      "\u540E\u7AEF\u5982\u4F55\u7F16\u5199\u5355\u5143\u6D4B\u8BD5\uFF1F .md",
      "\u540E\u7AEF\u9879\u76EE\u7ECF\u5178\u5206\u5C42\u67B6\u6784\u4ECB\u7ECD.md",
      "\u5982\u4F55\u9AD8\u6548\u6D4B\u8BD5\u63A5\u53E3\uFF1F\u81EA\u52A8\u751F\u6210\u63A5\u53E3\u6587\u6863.md",
      "\u5F00\u53D1\u4F01\u4E1A\u5FAE\u4FE1\u7FA4\u673A\u5668\u4EBA\uFF0C\u5B9E\u73B0\u5B9A\u65F6\u63D0\u9192.md",
      "\u3010\u8BBE\u8BA1\u6A21\u5F0F\u3011\u88C5\u9970\u8005\u6A21\u5F0F\uFF0C\u53CA\u5176\u5728JDK\u6E90\u7801\u4E2D\u7684\u5E94\u7528.md",
      "\u7528\u56DB\u79CD\u9501\u5B9E\u73B0\u52A0\u5165\u961F\u4F0D\u529F\u80FD(\u4F19\u4F34\u5339\u914D\u7CFB\u7EDF).md",
      "\u7528@Validated\u6CE8\u89E3\u5B9E\u73B0\u975E\u7A7A\u6821\u9A8C.md",
      "\u4F7F\u7528\u7B2C\u4E09\u65B9\u670D\u52A1(\u5B9D\u5854)\u5FEB\u901F\u90E8\u7F72\u9879\u76EE.md",
      "RESTful \u63A5\u53E3\u5B9E\u73B0\u4E0E\u6D4B\u8BD5( Spring Boot ).md",
      "\u5FEB\u901F\u5B66\u4F1A\u4E3A\u5F00\u6E90\u9879\u76EE\u505A\u8D21\u732E.md",
      "\u6574\u5408Spring JDBC\u64CD\u4F5C\u6570\u636E\u5E93.md",
      "Maven \u4E2D\u592E\u4ED3\u5E93\u53D1\u5305\u6D41\u7A0B.md",
      "Nacos \u914D\u7F6E\u4E2D\u5FC3\u642D\u5EFA.md",
      "Bean \u62F7\u8D1D\u4E4B MapStruct.md",
      "\u5982\u4F55\u5FEB\u901F\u5FFD\u7565 Git \u6587\u4EF6\u63D0\u4EA4\uFF1F.md",
      "EasyExcel \u5BFC\u51FA\u6587\u4EF6.md",
      "\u5982\u4F55\u5904\u7406 CompletableFuture \u4E2D\u7684\u4E24\u79CD\u5F02\u5E38(\u667A\u80FDBI\u9879\u76EE).md",
      "\u57FA\u4E8E Session \u5B9E\u73B0\u77ED\u4FE1\u767B\u5F55.md",
      "Synchronized \u5173\u952E\u5B57\u8BE6\u89E3.md",
      "Redission \u89E3\u9501\u5F02\u5E38\u89E3\u51B3\u65B9\u6848.md",
      "\u5B9E\u73B0\u4E3B\u9898\u6362\u80A4( CSS \u53D8\u91CF + \u7C7B\u540D\u5207\u6362).md",
      "SpringBoot \u6574\u5408 Minio\u5168\u6D41\u7A0B\uFF08\u4ECE\u5B89\u88C5 Minio \u5230\u5E94\u7528\uFF09.md",
      "\u3010Redis\u5E94\u7528\u3011UV\u7EDF\u8BA1.md",
      "\u300A\u8D2F\u7A7F\u8BBE\u8BA1\u6A21\u5F0F\u300B\u7B2C\u4E09\u65B9\u767B\u5F55\u5B9E\u8DF5[\u9644\u524D\u540E\u7AEF\u5B8C\u6574\u8FC7\u7A0B\u53CA\u6D4B\u8BD5].md",
      "Websocket.+ Spring-SseEmitter3 \u5B9E\u73B0\u8BAF\u98DE\u661F\u706BJava\u5BA2\u6237\u7AEF.md",
      "\u7528\u5E03\u9686\u8FC7\u6EE4\u5668\u5B9E\u73B0\u68C0\u67E5\u7528\u6237\u540D\u662F\u5426\u5B58\u5728(\u7528\u6237\u6CE8\u518C).md",
      "SpringSecurity \u6574\u5408 Oauth2.md",
      "\u524D\u7AEF\u521D\u59CB\u5316 Ant Design Pro \u7B14\u8BB0.md",
      "LiteFlow \u7F16\u6392\u5F0F\u7F16\u7A0B\u7B80\u5355\u4ECB\u7ECD.md",
      "\u57FA\u4E8E Redis \u5B9E\u73B0\u77ED\u4FE1\u767B\u5F55.md",
      "MySQL \u4E00\u68F5 B + \u6811\u53EF\u4EE5\u5B58\u591A\u5C11\u6761\u6570\u636E\uFF1F.md",
      "SpringBoot \u6574\u5408 ELK \u5B9E\u73B0\u65E5\u5FD7\u91C7\u96C6\u4E0E\u76D1\u63A7.md",
      "\u57FA\u4E8E\u81EA\u5B9A\u4E49\u6CE8\u89E3\u7684 Redisson \u5206\u5E03\u5F0F\u9501\u5B9E\u73B0.md",
      "\u73A9\u8F6C\u5F02\u6B65\u7F16\u7A0B\u5229\u5668 CompletableFuture.md",
      "\u901A\u8FC7 Windows \u811A\u672C\u6267\u884C\u6253\u5305\u64CD\u4F5C.md",
      "\u963F\u91CC\u4E91\u5BF9\u8C61\u5B58\u50A8 OSS.md",
      "\u540E\u7AEF Spring Boot \u4E07\u7528\u6A21\u677F\u4F7F\u7528.md",
      "\u4F7F\u7528 canal \u5B9E\u73B0\u589E\u91CF\u8BA2\u9605\u548C\u6D88\u8D39.md",
      "SpringBoot + Quartz \u7B80\u6613\u5B9A\u65F6\u4EFB\u52A1.md",
      "String \u7684 intern() \u65B9\u6CD5.md",
      "MySQL \u5B57\u7B26\u4E32\u65E5\u671F\u683C\u5F0F\u8F6C\u6362.md",
      "fail-fast \u673A\u5236\u662F\u4EC0\u4E48\uFF1F.md",
      "\u5341\u79CD SQL \u7684\u5199\u6CD5.md",
      "MyBatis \u6574\u5408\u591A\u6570\u636E\u6E90.md",
      "1\u79D2\u5C06\u672C\u5730SpringBoot\u9879\u76EEjar\u5305\u90E8\u7F72\u5230Linux\u73AF\u5883.md",
      "DDD \u662F\u4EC0\u4E48\uFF1F.md",
      "Oracle\u5230MySQL\u51FD\u6570\u66FF\u6362\u65B9\u6848\u6C47\u603B.md",
      "Springboot \u5F15\u5165 Nacos ( Windows \u7248).md",
      "\u5229\u7528\u5C40\u57DF\u7F51\u642D\u5EFA\u865A\u62DF\u673A\u5B9E\u73B0\u8BBF\u95EE\u9879\u76EE.md",
      "\u6D45\u8C08 cookie \u548C session.md",
      "\u7528 QQ \u90AE\u7BB1\u5B9E\u73B0\u9A8C\u8BC1\u7801\u529F\u80FD.md",
      "Redis \u5B9E\u73B0\u6587\u7AE0\u70B9\u8D5E\u529F\u80FD(\u9644\u5E26\u524D\u540E\u7AEF\u4EE3\u7801\u3001\u6570\u636E\u5E93).md",
      "\u963F\u91CC\u4E91\u77ED\u4FE1\u670D\u52A1\u5B9E\u73B0\u624B\u673A\u9A8C\u8BC1\u7801.md",
      "\u3010Ajax\u3011\u5F02\u6B65\u901A\u4FE1.md",
      "\u3010\u8BBE\u8BA1\u6A21\u5F0F\u3011\u4E03\u5927\u8BBE\u8BA1\u539F\u5219.md",
      "\u6587\u7AE0\u8BC4\u8BBA\u529F\u80FD\u524D\u540E\u7AEF\u5B9E\u73B0\u65B9\u6848\u603B\u7ED3.md",
      "\u3010\u7248\u672C\u63A7\u5236\u3011Git\u5FEB\u901F\u4E0A\u624B.md",
      "\u3010Java\u57FA\u7840\u3011\u6D88\u706D\u9B54\u6CD5\u503C-\u5E38\u91CF&\u679A\u4E3E\u8BE6\u8FF0.md",
      "MySQL \u7684 Char \u5E76\u4E0D\u4E00\u5B9A\u662F\u5B9A\u957F.md",
      "TextCNN \u6587\u672C\u5206\u7C7B\u6A21\u578B\u5728\u6587\u7AE0\u8BC4\u8BBA\u5BA1\u6838\u4E2D\u7684\u5B9E\u73B0\u4E0E\u90E8\u7F72.md",
      "\u7406\u89E3 IO \u591A\u8DEF\u590D\u7528.md",
      "ElasticSearch \u57FA\u7840\u6982\u5FF5\u4E0E\u5165\u95E8\u4F7F\u7528.md",
      "\u7406\u89E3\u8FDB\u7A0B\uFF0C\u7EBF\u7A0B\uFF0C\u534F\u7A0B.md",
      "\u7406\u89E3\u539F\u7801\u3001\u53CD\u7801\u3001\u8865\u7801.md",
      "\u5B9A\u4E49API\u5E76\u751F\u6210\u4EE3\u7801\uFF08 Go \u5FAE\u670D\u52A1\u6846\u67B6 Kratos \uFF09.md",
      "\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D.md",
      "MarkDown \u6587\u672C\u89E3\u6790\u6210 HTML \u5E76\u751F\u6210\u5927\u7EB2.md",
      "10 \u5206\u949F\u5FEB\u901F\u641E\u61C2 Lambda \u8868\u8FBE\u5F0F.md",
      "SpringBoot \u9879\u76EE\u4E2D\u5FEB\u901F\u5F15\u5165 Rabbit MQ \u901A\u7528\u505A\u6CD5.md",
      "OJ \u7ADE\u8D5B\u6392\u884C\u699C\u7EDF\u8BA1\u903B\u8F91\u8BBE\u8BA1\u4E0E\u4EE3\u7801\u5B9E\u73B0.md",
      "\u591A\u8BED\u8A00\u4EE3\u7801\u6C99\u7BB1\u7684\u8BBE\u8BA1\u4E0E\u5B9E\u73B0(OJ \u5728\u7EBF\u5224\u9898\u7CFB\u7EDF).md",
      "Java 8 \u65B0\u7279\u6027\uFF1AStream \u6D41\u5FEB\u901F\u5165\u95E8.md",
      "\u4F7F\u7528 NVM \u5FEB\u6377\u7BA1\u7406 Node \u7248\u672C\uFF08Win\u7248\uFF09.md",
      "Vue3 \u5FEB\u901F\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20 OSS.md",
      "\u5982\u4F55\u89E3\u51B3\u7F13\u5B58\u51FB\u7A7F\uFF1F.md",
      "RabbitMQ\u4E00\u6B7B\u4FE1\u961F\u5217\u4ECB\u7ECD\u548C\u5E94\u7528.md",
      "\u8BE6\u89E3 SpringBoot \u81EA\u5B9A\u4E49 Starter.md",
      "\u4ECE\u805A\u5408\u641C\u7D22\u9879\u76EE\u89C6\u89D2\u5165\u95E8 ElasticSearch.md",
      "\u5E38\u7528\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6CD5.md",
      "\u5E38\u7528\u7684\u5B58\u50A8\u4F18\u5316\u65B9\u6CD5.md",
      "Java \u5B9E\u73B0 GitHub \u7B2C\u4E09\u65B9\u767B\u5F55\u8BE6\u89E3.md",
      "\u4F19\u4F34\u5339\u914D\u5F15\u5165 GEO \u5B9E\u73B0\u641C\u7D22\u9644\u8FD1\u7528\u6237.md",
      "\u8BBE\u8BA1\u6A21\u5F0F\u5B9E\u8DF5\uFF08OJ\u5224\u9898\u548C\u805A\u5408\u641C\u7D22).md",
      "\u6A21\u677F\u5F15\u64CE-Thymeleaf\u4E0EFreemarker.md",
      "\u6D77\u91CF\u6570\u636E\u573A\u666F\u9762\u8BD5\u9898\uFF1A\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684 100 \u4E2A\u8BCD.md",
      "\u6DF1\u5165\u4E86\u89E3\u8FDB\u7A0B\u548C\u7EBF\u7A0B\uFF1A\u6982\u5FF5\u3001\u533A\u522B\u548C\u4F18\u5316.md",
      "WebSocket \u524D\u540E\u7AEF\u8054\u8C03\u4F7F\u7528.md",
      "\u5E76\u53D1\u95EE\u9898\u7684\u4E09\u5927\u6839\u6E90\u662F\u4EC0\u4E48\uFF1F.md",
      "\u57FA\u4E8E GA \u9057\u4F20\u7B97\u6CD5\u7684\u667A\u80FD\u7EC4\u9898\u6A21\u5757\u7684\u8BBE\u8BA1\u4E0E\u5E94\u7528.md",
      "\u4F7F\u7528 AOP+\u81EA\u5B9A\u4E49\u6CE8\u89E3\u5B9E\u73B0\u65E5\u5FD7\u6253\u5370.md",
      "Hexo+Github+Netlify\u535A\u5BA2\u642D\u5EFA\u6559\u7A0B.md",
      "\u4EC0\u4E48\u662F\u63A5\u53E3\u7684\u5E42\u7B49\u6027\uFF0C\u5982\u4F55\u4FDD\u8BC1\u63A5\u53E3\u7684\u5E42\u7B49\u6027\uFF1F.md",
      "DTO\u8F6CVO\u5DE5\u5177.md",
      "\u63D0\u793A\u5DE5\u7A0B\u8FDB\u9636\u6280\u5DE7\uFF08\u5927\u6A21\u578B\uFF09.md",
      "MinIO+Docker \u4ECE\u96F6\u642D\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5B58\u50A8\u670D\u52A1.md",
      "MySQL8 \u7EFF\u8272\u7248\u5B89\u88C5.md",
      "IDEA+Docker\u8FDC\u7A0B\u90E8\u7F72SpringBoot\u9879\u76EE.md",
      "\u51FD\u6570\u5F0F\u63A5\u53E3\u7684\u4F7F\u7528.md",
      "\u9762\u8BD5\u8D85\u9AD8\u9891\u8003\u70B9\uFF1AHashMap \u6E90\u7801\u9010\u884C\u89E3\u6790.md",
      "MySQL\u57FA\u7840\u77E5\u8BC6\uFF1ADDL\u3001DML\u3001DQL\u3001DCL\u53CATPL\u7684\u4F7F\u7528.md",
      "SpringBoot\u901A\u8FC7\u81EA\u5B9A\u4E49\u6CE8\u89E3\u5B9E\u73B0\u591A\u6570\u636E\u6E90.md",
      "IDEA \u540C\u65F6\u5173\u8054 GitHub \u548C Gitee \u8FDC\u7A0B\u4ED3\u5E93.md",
      "\u7F13\u5B58\u7A7F\u900F\u3001\u7F13\u5B58\u51FB\u7A7F\u3001\u7F13\u5B58\u96EA\u5D29\u7684\u573A\u666F\u4EE5\u53CA\u89E3\u51B3\u65B9\u6CD5.md",
      "\u72B6\u6001\u673A\u6982\u5FF5\u4EE5\u53CA\u4F7F\u7528.md"
    ]
  }
];

// .vuepress/sidebars/roadmapSideBar.ts
var roadmapSideBar_default = [
  "",
  {
    title: "\u5B66\u4E60\u8DEF\u7EBF",
    collapsable: false,
    children: [
      "BioimageVision.md",
      "Java\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u524D\u7AEF\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "C++\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Python\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "SQL\u514D\u8D39\u5B9E\u6218\u81EA\u5B66\u7F51\u7AD9 by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u8BA1\u7B97\u673A\u57FA\u7840\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Git&GitHub\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u8BBE\u8BA1\u6A21\u5F0F\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Linux\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md"
    ]
  }
];

// .vuepress/sidebars/projectSideBar.ts
var projectSideBar_default = [
  "",
  {
    title: "\u9879\u76EE\u5B9E\u6218",
    collapsable: false,
    children: [
      "\u9C7C\u76AE\u9879\u76EE\u5B66\u4E60\u5EFA\u8BAE\uFF08\u5FC5\u8BFB\uFF09.md",
      "\u{1F525} AI \u7B54\u9898\u5E94\u7528\u5E73\u53F0\uFF08\u6700\u65B0\u8FDB\u884C\u4E2D\uFF09.md",
      "\u4EE3\u7801\u751F\u6210\u5668\u5171\u4EAB\u5E73\u53F0.md",
      "\u624B\u5199 RPC \u6846\u67B6.md",
      "OJ \u5224\u9898\u7CFB\u7EDF.md",
      "\u667A\u80FD BI \u5E73\u53F0.md",
      "\u805A\u5408\u641C\u7D22\u5E73\u53F0.md",
      "API \u5F00\u653E\u5E73\u53F0.md",
      "\u4F19\u4F34\u5339\u914D\u7CFB\u7EDF.md",
      "\u7528\u6237\u4E2D\u5FC3\u9879\u76EE.md",
      "Java \u540E\u7AEF\u4E07\u7528\u9879\u76EE\u6A21\u677F.md",
      "\u524D\u7AEF\u4E07\u7528\u9879\u76EE\u6A21\u677F.md"
    ]
  }
];

// .vuepress/sidebars/productSideBar.ts
var productSideBar_default = [
  "",
  {
    title: "\u7F16\u7A0B\u5B66\u4E60",
    collapsable: false,
    children: [
      "\u540E\u7AEF\u7A81\u51FB - \u72C2\u98D9\u540E\u7AEF\u8BAD\u7EC3\u8425.md",
      "\u524D\u7AEF\u7A81\u51FB - \u524D\u7AEF\u9762\u8BD5\u8BAD\u7EC3\u8425.md",
      "\u8003\u7814\u966A\u8DD1 - \u7F16\u7A0B\u5BFC\u822A\u8BA1\u72D7\u4E0A\u5CB8.md"
    ]
  },
  {
    title: "\u5B9E\u7528\u5DE5\u5177",
    collapsable: false,
    children: [
      "\u6C42\u804C - \u5E2E\u4F60\u5199\u597D\u7B80\u5386\u7684\u795E\u5668.md",
      "\u4EA7\u54C1/\u9C7C\u806A\u660E/\u5DE5\u5177 - \u65E0\u95E8\u69DB AI \u5BF9\u8BDD\u7ED8\u753B\u795E\u5668",
      "\u4EA7\u54C1/\u4EE3\u7801\u5C0F\u6284/\u5DE5\u5177 - \u7B80\u5355\u6613\u7528\u7684\u4EE3\u7801\u5206\u4EAB\u795E\u5668",
      "\u4EA7\u54C1/\u526A\u5207\u677F\u52A9\u624B/\u5DE5\u5177 - \u9AD8\u989C\u503C\u7684\u526A\u5207\u677F\u52A9\u624B"
    ]
  }
];

// .vuepress/sidebars/selfStudySideBar.ts
var selfStudySideBar_default = [
  "",
  {
    title: "\u5927\u5B66\u7ECF\u5386",
    collapsable: true,
    children: [
      "\u5927\u5B66\u7ECF\u5386/\u6211\u5B66\u8BA1\u7B97\u673A\u7684\u56DB\u5E74\uFF0C\u5171\u52C9\uFF01.md",
      "\u5927\u5B66\u7ECF\u5386/\u4ECE\u5927\u5B66\u5230\u79CB\u62DB\uFF0C\u6211\u5982\u4F55\u62FF\u4E0B\u817E\u8BAFoffer.md",
      "\u5927\u5B66\u7ECF\u5386/\u5927\u5B66\uFF0C\u6211\u662F\u600E\u4E48\u8FB9\u5B66\u7F16\u7A0B\u8FB9\u8D5A\u94B1\u7684\uFF1F.md",
      "\u5927\u5B66\u7ECF\u5386/\u6211\u5927\u4E09\u65F6\u505A\u7684\u7F9E\u803B\u9879\u76EE\uFF01.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u7684\u8003\u8BC1\u7ECF\u5386.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u5728\u5B9E\u9A8C\u5BA4\u51FA\u7248\u6559\u6750\u7684\u7ECF\u5386.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u7684\u6BD5\u4E1A\u8BBE\u8BA1\uFF0C\u65F6\u9694\u4E00\u5E74\uFF0C\u4ECD\u611F\u89C9\u5934\u79C3.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u7684\u6BD5\u4E1A\u611F\u53D7.md",
      "\u5927\u5B66\u7ECF\u5386/\u9C7C\u76AE\u843D\u6237\u4E0A\u6D77\u5FC3\u5F97.md"
    ]
  },
  {
    title: "\u6C42\u804C\u7ECF\u5386",
    collapsable: true,
    children: [
      "\u6C42\u804C\u7ECF\u5386/\u6211\u7684\u7B2C\u4E00\u4EFD\u5B9E\u4E60\uFF0C\u5750\u9AD8\u94C1\u4E0A\u73ED.md",
      "\u6C42\u804C\u7ECF\u5386/\u6211\u7684\u7B2C\u4E8C\u4EFD\u5B9E\u4E60\uFF0C\u5B57\u8282\u8DF3\u52A8.md",
      "\u6C42\u804C\u7ECF\u5386/\u4ED6\u4E13\u4E1A\u7B2C\u4E00\uFF0C\u5374\u627E\u4E0D\u5230\u5DE5\u4F5C.md",
      "\u6C42\u804C\u7ECF\u5386/\u9762\u8BD5\u963F\u91CC6\u6B21\uFF0C\u4ECD\u7136\u5931\u8D25\u7684\u7ECF\u5386.md"
    ]
  },
  {
    title: "\u804C\u573A\u5DE5\u4F5C",
    collapsable: true,
    children: [
      "\u804C\u573A\u5DE5\u4F5C/Java\u5F00\u53D1\u8005\u5DE5\u4F5C\u90FD\u505A\u4EC0\u4E48\uFF1F.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u4ECE\u5BFC\u5E08\u8EAB\u4E0A\u5B66\u5230\u4E86\u4EC0\u4E48\uFF1F.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u5728\u817E\u8BAF\u7684\u8BD5\u7528\u671F\u603B\u7ED3.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u5728\u817E\u8BAF\u548C\u5B57\u8282\u7684\u5DE5\u4F5C\u611F\u53D7.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u5347\u7EA7\u4E3A\u4E91\u5F00\u53D1\u9AD8\u7EA7\u5E03\u9053\u5E08\u5566.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u5165\u804C\u4E00\u5E74\u7684\u611F\u53D7.md",
      "\u804C\u573A\u5DE5\u4F5C/\u79BB\u5F00\u5B66\u6821\u540E\uFF0C\u6211\u624D\u660E\u767D.md",
      "\u804C\u573A\u5DE5\u4F5C/\u6211\u83B7\u5F97\u4E86\u817E\u8BAF\u5185\u90E8\u7ADE\u8D5B\u7B2C\u4E00\u540D\uFF01.md",
      "\u804C\u573A\u5DE5\u4F5C/\u9C7C\u76AE\u8FD9\u4E2A\u6708\u5C31\u5199\u4E86\u8FD9\u70B9\u513F\u4EE3\u7801\uFF1F.md",
      "\u804C\u573A\u5DE5\u4F5C/\u8FD9\u5468\u6CA1\u5199\u4EE3\u7801\uFF0C\u7ADF\u7136\u5728\u505A\u8FD9\u4EF6\u4E8B\uFF01.md",
      "\u804C\u573A\u5DE5\u4F5C/\u5DE5\u4F5C\u540E\uFF0C\u6211\u575A\u6301\u4E86\u591A\u5E74\u7684\u4E60\u60EF.md",
      "\u804C\u573A\u5DE5\u4F5C/\u8F6C\u884C\u5927\u6570\u636E1\u4E2A\u6708\uFF0C\u6211\u9EBB\u4E86\u3002\u3002\u3002.md",
      "\u804C\u573A\u5DE5\u4F5C/\u5927\u5382\u505A\u7A0B\u5E8F\u5458\u4E24\u5E74\u534A\uFF0C\u6211\u7EC8\u4E8E\u5B66\u4F1A\u4E86\u3002\u3002\u3002.md",
      "\u804C\u573A\u5DE5\u4F5C/\u518D\u89C1\u4E86\uFF0C\u817E\u8BAF\uFF01.md"
    ]
  },
  {
    title: "\u521B\u4F5C\u7ECF\u5386",
    collapsable: true,
    children: [
      "\u521B\u4F5C\u7ECF\u5386/\u6BD5\u4E1A\u8FD9\u5E74\uFF0C\u6211\u6210\u4E3A\u4E86\u4E00\u540DUP\u4E3B.md",
      "\u521B\u4F5C\u7ECF\u5386/\u6211\u4E5F\u62E5\u6709\u4E8610\u4E07\u7C89\u4E1D.md",
      "\u521B\u4F5C\u7ECF\u5386/10w\u7C89\u4E1D\uFF0C\u6211\u5374\u54ED\u4E86.md",
      "\u521B\u4F5C\u7ECF\u5386/\u9C7C\u76AE\u5DE5\u4F5C+\u521B\u4F5C\u7684\u65E5\u5E38\u751F\u6D3B.md",
      "\u521B\u4F5C\u7ECF\u5386/\u4E8C\u5341\u56DB.md",
      "\u521B\u4F5C\u7ECF\u5386/\u4ECA\u5929\uFF0C\u6211\u8981\u641E\u4EF6\u5927\u4E8B\uFF01.md",
      "\u521B\u4F5C\u7ECF\u5386/\u6211\u4EEC\u641E\u4E86\u4EF6\u5927\u4E8B\uFF01.md",
      "\u521B\u4F5C\u7ECF\u5386/\u4E00\u6B21\u5F88\u610F\u5916\u7684\u7F51\u7AD9\u6545\u969C\u7ECF\u5386\u3002.md",
      "\u521B\u4F5C\u7ECF\u5386/\u4E00\u6B21\u9762\u5411UP\u4E3B\u7684\u56E2\u5EFA.md",
      "\u521B\u4F5C\u7ECF\u5386/\u201C\u8001\u5E08\uFF0C\u6211\u8C22\u8C22\u4F60\uFF01\u201D.md",
      "\u521B\u4F5C\u7ECF\u5386/\u6211\u88AB\u6700\u6068\u7684\u516C\u53F8\u91C7\u8BBF\u4E86\uFF01.md",
      "\u521B\u4F5C\u7ECF\u5386/\u5E2E\u963F\u91CC\u4E91\u62C9\u65B07000\u4EBA\uFF0C\u6211\u8F93\u7684\u5F88\u5F7B\u5E95\uFF01.md",
      "\u521B\u4F5C\u7ECF\u5386/\u7F51\u7AD9\u53C8\u88AB\u653B\u51FB\uFF0C\u6211\u5FC3\u6001\u5D29\u4E86.md",
      "\u521B\u4F5C\u7ECF\u5386/\u6765\u4E86\u6765\u4E86\uFF01.md"
    ]
  },
  {
    title: "\u521B\u4E1A\u7ECF\u5386",
    collapsable: true,
    children: [
      "\u521B\u4E1A\u7ECF\u5386/\u516C\u53F8\u592A\u7A33\u5B9A\u4E86\uFF01\u6211\u597D\u614C.md",
      "\u521B\u4E1A\u7ECF\u5386/\u521B\u4E1A\u4E00\u6708\u534A\uFF0C\u4E0D\u592A\u4E60\u60EF\u3002\u3002.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6211\u4EEC\u516C\u53F8\u7684\u4F01\u4E1A\u6587\u5316\uFF01.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6211\u4EEC\u516C\u53F8\u7684\u62DB\u4EBA\u65B9\u5F0F\uFF0C\u6709\u70B9\u4E0D\u4E00\u6837\uFF01.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6211\u5728\u9C7C\u5382\u7684\u5B9E\u4E60\u751F\u6D3B.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6211\u5F00\u4E1A\u4E86\uFF01.md",
      "\u521B\u4E1A\u7ECF\u5386/\u6CA1\u4E8B\u522B\u60F3\u4E0D\u5F00\u53BB\u521B\u4E1A\uFF01.md",
      "\u521B\u4E1A\u7ECF\u5386/\u7F8E\u597D\u7684\u5468\u672B\uFF0C\u53C8\u6539\u4E86\u4E00\u5929Bug\u3002\u3002.md",
      "\u521B\u4E1A\u7ECF\u5386/\u9762\u4E86\u4E2AJava\u5B9E\u4E60\u751F\uFF0C\u5C0F\u4F19\u5F88\u4F18\u79C0\uFF01.md"
    ]
  },
  {
    title: "\u751F\u6D3B\u65E5\u5E38",
    collapsable: true,
    children: [
      "\u751F\u6D3B\u65E5\u5E38/2022\uFF0C\u5927\u5BB6\u8FC7\u5F97\u600E\u4E48\u6837\u5462\uFF1F.md",
      "\u751F\u6D3B\u65E5\u5E38/\u4F11\u5047\u7ED3\u675F\uFF0C\u5B9A\u4E2A\u65B0\u76EE\u6807\uFF01.md",
      "\u751F\u6D3B\u65E5\u5E38/\u518D\u804A\u804A\u8FD9\u5468\u7684\u72B6\u6001.md",
      "\u751F\u6D3B\u65E5\u5E38/\u5927\u5BB6\u4FDD\u91CD\u554A\u2026.md",
      "\u751F\u6D3B\u65E5\u5E38/\u5BF9\u4E0D\u8D77\uFF0C\u6211\u4E0D\u662F\u4E00\u4E2A\u81EA\u5F8B\u7684\u4EBA.md",
      "\u751F\u6D3B\u65E5\u5E38/\u5F00\u5DE5\u7B2C\u4E00\u5929\uFF0C\u6211\u5BB3\u6015\u4E86.md",
      "\u751F\u6D3B\u65E5\u5E38/\u6211\u653E\u5047\u5566\uFF01\u8FD922\u5929\u5E72\u70B9\u5565\u5462.md",
      "\u751F\u6D3B\u65E5\u5E38/\u6211\u88AB\u9694\u79BB\u4E86\uFF01.md",
      "\u751F\u6D3B\u65E5\u5E38/\u6211\u9633\u8FC7\u4E86\uFF0C\u522B\u62C5\u5FC3\uFF01.md",
      "\u751F\u6D3B\u65E5\u5E38/\u65B0\u5E74\u7B2C\u4E00\u5929\uFF0C\u6211\u5C31\u868C\u57E0\u4F4F\u4E86\uFF01.md",
      "\u751F\u6D3B\u65E5\u5E38/\u804A\u804A\u6700\u8FD1\u7684\u72B6\u6001\u5427.md",
      "\u751F\u6D3B\u65E5\u5E38/\u90FD\u8FD9\u4E2A\u70B9\u513F\u4E86\uFF0C\u8FD9\u5E2E\u4EBA\u7ADF\u7136\u5728\u3002\u3002\u3002.md",
      "\u751F\u6D3B\u65E5\u5E38/\u968F\u4FBF\u804A\u804A.md"
    ]
  }
];

// .vuepress/sidebars/programmingShareSideBar.ts
var programmingShareSideBar_default = [
  "",
  {
    title: "\u5165\u95E8\u5FC5\u770B-\u5B66\u4E60\u8DEF\u7EBF",
    collapsable: true,
    children: [
      "\u5165\u95E8\u5FC5\u770B-\u5B66\u4E60\u8DEF\u7EBF/"
    ]
  },
  {
    title: "\u5B66\u4E60\u6307\u5357",
    collapsable: true,
    children: [
      "\u5B66\u4E60\u6307\u5357/"
    ]
  },
  {
    title: "\u5F00\u53D1\u7ECF\u9A8C",
    collapsable: true,
    children: [
      "\u5F00\u53D1\u7ECF\u9A8C/"
    ]
  },
  {
    title: "\u6C42\u804C\u7ECF\u9A8C",
    collapsable: true,
    children: [
      "\u6C42\u804C\u7ECF\u9A8C/"
    ]
  },
  {
    title: "\u804C\u573A\u7ECF\u9A8C",
    collapsable: true,
    children: [
      "\u804C\u573A\u7ECF\u9A8C/"
    ]
  },
  {
    title: "\u6280\u672F\u5206\u4EAB",
    collapsable: true,
    children: [
      "\u6280\u672F\u5206\u4EAB/"
    ]
  },
  {
    title: "\u5B9E\u6218\u6559\u7A0B",
    collapsable: true,
    children: [
      "\u5B9E\u6218\u6559\u7A0B/"
    ]
  },
  {
    title: "\u9879\u76EE\u6559\u7A0B",
    collapsable: true,
    children: [
      "\u9879\u76EE\u6559\u7A0B/"
    ]
  },
  {
    title: "\u7F16\u7A0B\u8D44\u6E90",
    collapsable: true,
    children: [
      "\u7F16\u7A0B\u8D44\u6E90/"
    ]
  },
  {
    title: "\u79D1\u6280\u79D1\u666E",
    collapsable: true,
    children: [
      "\u79D1\u6280\u79D1\u666E/"
    ]
  },
  {
    title: "\u5176\u4ED6",
    collapsable: true,
    children: [
      "\u5176\u4ED6/"
    ]
  }
];

// .vuepress/sidebars/bugFixManual.ts
var bugFixManual_default = [
  "",
  {
    title: "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848",
    collapsable: true,
    children: [
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u524D\u7AEF\u65E0\u6CD5\u6B63\u786E\u8BF7\u6C42\u540E\u7AEF\u63A5\u53E3\u5E76\u5F97\u5230\u54CD\u5E94\uFF1F",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u524D\u7AEF\u6846\u67B6\u521D\u59CB\u5316\u9519\u8BEF",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u524D\u7AEF\u9879\u76EE\u65E0\u6CD5\u6B63\u786E\u5B89\u88C5\u4F9D\u8D56\uFF1F",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u524D\u7AEF\u9879\u76EE\u80FD\u8FD0\u884C\uFF0C\u4F46\u6709\u5F88\u591A\u9519\u8BEF\u63D0\u793A\u548C\u544A\u8B66\uFF1F",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u540E\u7AEF\u9879\u76EE\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8\uFF0C\u6216\u4F9D\u8D56\u670D\u52A1\u8FDE\u63A5\u5931\u8D25",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u6570\u636E\u67E5\u8BE2\u4E3A\u7A7A\u6216\u9519\u8BEF",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u65E0\u6CD5\u6B63\u5E38\u767B\u5F55\u6216\u83B7\u53D6\u4E0D\u5230\u7528\u6237\u4FE1\u606F",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u65E0\u6CD5\u8BBF\u95EE\u7EBF\u4E0A\u670D\u52A1",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u672C\u5730\u9879\u76EE\u4E0A\u7EBF\u540E\u51FA\u73B0\u9519\u8BEF",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3  \u9879\u76EE\u542F\u52A8\u5931\u8D25",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3\uFF5C\u65E0\u6CD5\u6B63\u786E\u8BBF\u95EE\u5230\u9875\u9762\u6216\u51FA\u73B0 404 \u9519\u8BEF",
      "\u7ECF\u5178 Bug \u89E3\u51B3\u65B9\u6848/Bug \u89E3\u51B3\uFF5C\u7EC4\u4EF6\u5E93\u62A5\u9519\u3001\u6216\u6837\u5F0F\u4E22\u5931\u4E0D\u751F\u6548"
    ]
  },
  {
    title: "\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF",
    collapsable: true,
    children: [
      "\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF/\u5E38\u89C1\u5199 Bug \u539F\u56E0\u6C47\u603B",
      "\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF/\u5E38\u89C1\u8BF7\u6C42\u9519\u8BEF\u7801\u89E3\u91CA\u53CA\u89E3\u51B3\u65B9\u6848",
      "\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF/\u89E3\u51B3 Bug \u7684\u6D41\u7A0B\u5957\u8DEF\u603B\u7ED3"
    ]
  }
];

// .vuepress/sidebar.ts
var sidebar_default = {
  "/\u5B66\u4E60\u8DEF\u7EBF/": roadmapSideBar_default,
  "/\u81EA\u5B66\u4E4B\u8DEF/": selfStudySideBar_default,
  "/\u7F16\u7A0B\u5206\u4EAB/": programmingShareSideBar_default,
  "/\u9879\u76EE\u5B9E\u6218/": projectSideBar_default,
  "/\u7F16\u7A0B\u5BFC\u822A/": codeNavSideBar_default,
  "/\u77E5\u8BC6\u788E\u7247/": knowledgeSideBar_default,
  "/Bug\u624B\u518C/": bugFixManual_default,
  "/\u4EA7\u54C1\u670D\u52A1/": productSideBar_default,
  "/\u5173\u4E8E\u6211\u4EEC/": ["", "\u4E2A\u4EBA\u7ECF\u5386"],
  "/": "auto"
};

// .vuepress/footer.ts
var footer_default = {
  friendLinks: [
    {
      label: "\u7AD9\u957F - \u7A0B\u5E8F\u5458\u9C7C\u76AE",
      href: "https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah"
    },
    {
      label: "\u9C7C\u9E22\u7F51\u7EDC",
      href: "https://yuyuanweb.com/"
    },
    {
      label: "\u8001\u9C7C\u7B80\u5386",
      href: "https://www.laoyujianli.com/"
    },
    {
      label: "\u9C7C\u806A\u660E AI",
      href: "https://www.yucongming.com/"
    },
    {
      label: "\u7F16\u7A0B\u5B66\u4E60\u5708",
      href: "https://yuyuanweb.feishu.cn/wiki/VC1qwmX9diCBK3kidyec74vFnde"
    }
  ],
  copyright: {
    href: "https://beian.miit.gov.cn/",
    name: "\u6CAAICP\u590719026706\u53F7-6"
  }
};

// .vuepress/extraSideBar.ts
var extraSideBar_default = [
  {
    title: "\u624B\u673A\u770B",
    icon: "/icon/mobile.png",
    popoverTitle: "\u5FAE\u4FE1\u626B\u4E00\u626B",
    popoverUrl: "/qrcode-codefather.png",
    popoverDesc: "\u53EF\u4EE5\u624B\u673A\u770B\u6216\u5206\u4EAB\u81F3\u670B\u53CB\u5708"
  },
  {
    title: "\u661F\u7403",
    icon: "/icon/xingqiu.png",
    popoverTitle: '<span style="font-size:0.8rem;font-weight:bold;"><span style="color:red;">\u4FDD\u59C6\u7EA7\u5B9E\u6218\u9879\u76EE\u6559\u7A0B</span>\u3001\u7F16\u7A0B\u5B66\u4E60\u6307\u5357\u3001\u5B66\u4E60\u8D44\u6E90\u3001\u6C42\u804C\u6307\u5357\u3001\u6280\u672F\u5206\u4EAB\u3001\u7F16\u7A0B\u4EA4\u6D41</span>',
    popoverUrl: "/qrcode-codenav.png",
    popoverDesc: "\u77E5\u8BC6\u661F\u7403\uFF1A\u7F16\u7A0B\u5BFC\u822A"
  },
  {
    title: "\u4EA4\u6D41\u7FA4",
    icon: "/icon/weixin.png",
    popoverTitle: '<span style="font-size:0.8rem;font-weight:bold;">\u626B\u7801\u6DFB\u52A0 <span style="color:red;">\u7F16\u7A0B\u5BFC\u822A\u5C0F\u52A9\u624B\u5FAE\u4FE1</span>\uFF0C\u62C9\u4F60\u8FDB\u4E13\u5C5E\u7F16\u7A0B\u5B66\u4E60\u4EA4\u6D41\u7FA4</span>',
    popoverUrl: "/qrcode-codenavhelper.png"
  },
  {
    title: "\u4E0B\u8D44\u6599",
    icon: "/icon/xiazai.png",
    popoverTitle: '<span style="font-size:0.8rem;font-weight:bold;">\u626B\u7801\u5173\u6CE8\u7AD9\u957F\u516C\u4F17\u53F7\uFF0C\u56DE\u590D <span style="color:red;">\u5B66\u4E60</span> \u83B7\u53D6\u6D77\u91CF\u7F16\u7A0B\u5B66\u4E60\u8D44\u6E90\u300C\u65E0\u4EFB\u4F55\u5957\u8DEF\u300D</span>',
    popoverUrl: "/qrcode-mpcoder_yupi.jpg",
    popoverDesc: "\u516C\u4F17\u53F7: \u7A0B\u5E8F\u5458\u9C7C\u76AE"
  },
  {
    title: "\u652F\u6301\u6211",
    icon: "/icon/dianzan.png",
    popoverTitle: ' <span style="font-size:0.8rem;font-weight:bold;">\u9F13\u52B1\u548C\u8D5E\u8D4F\u6211</span>',
    popoverUrl: "/qrcode-thumb.jpg",
    popoverDesc: "\u611F\u8C22\u60A8\u7684\u652F\u6301\uFF0C\u4F5C\u8005\u5934\u53D1++"
  }
];

// .vuepress/config.ts
var author = "\u7A0B\u5E8F\u5458\u9C7C\u76AE";
var domain = "https://sincostan.tech/";
var tags = ["\u7A0B\u5E8F\u5458", "\u7F16\u7A0B", "\u8BA1\u7B97\u673A"];
var config_default = defineConfig({
  host: "0.0.0.0",
  port: 8080,
  base: "/vuepress/",
  lang: "zh-CN",
  title: "\u9C7C\u76AE\u7684\u7F16\u7A0B\u5B9D\u5178",
  description: "\u8D34\u5FC3\u7684\u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF\uFF0C\u5168\u9762\u7684\u7F16\u7A0B\u77E5\u8BC6\u767E\u79D1",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u7A0B\u5E8F\u5458\u9C7C\u76AE, \u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF, \u7F16\u7A0B\u77E5\u8BC6\u767E\u79D1, Java, \u7F16\u7A0B\u5BFC\u822A, \u524D\u7AEF, \u5F00\u53D1, \u7F16\u7A0B\u5206\u4EAB, \u9879\u76EE, IT, \u6C42\u804C, \u9762\u7ECF"
      }
    ],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  permalink: "/:slug",
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
  },
  plugins: [
    ["@vuepress/back-to-top"],
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W"
      }
    ],
    ["@vuepress/medium-zoom"],
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) => $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) => ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) => $page.frontmatter.image && ($site.themeConfig.domain && !$page.frontmatter.image.startsWith("http") || "") + $page.frontmatter.image,
        publishedAt: ($page) => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated)
      }
    ],
    [
      "sitemap",
      {
        hostname: domain
      }
    ],
    ["vuepress-plugin-baidu-autopush"],
    ["vuepress-plugin-tags"],
    [
      "vuepress-plugin-code-copy",
      {
        successText: "\u4EE3\u7801\u5DF2\u590D\u5236"
      }
    ],
    [
      "feed",
      {
        canonical_base: domain,
        count: 1e4,
        posts_directories: []
      }
    ],
    ["img-lazy"]
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: navbar_default,
    sidebar: sidebar_default,
    lastUpdated: "\u6700\u8FD1\u66F4\u65B0",
    repo: "liyupi/codefather",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "\u5B8C\u5584\u9875\u9762",
    footer: footer_default,
    extraSideBar: extraSideBar_default
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyIsICIudnVlcHJlc3MvbmF2YmFyLnRzIiwgIi52dWVwcmVzcy9zaWRlYmFycy9jb2RlTmF2U2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMva25vd2xlZGdlU2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMvcm9hZG1hcFNpZGVCYXIudHMiLCAiLnZ1ZXByZXNzL3NpZGViYXJzL3Byb2plY3RTaWRlQmFyLnRzIiwgIi52dWVwcmVzcy9zaWRlYmFycy9wcm9kdWN0U2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMvc2VsZlN0dWR5U2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMvcHJvZ3JhbW1pbmdTaGFyZVNpZGVCYXIudHMiLCAiLnZ1ZXByZXNzL3NpZGViYXJzL2J1Z0ZpeE1hbnVhbC50cyIsICIudnVlcHJlc3Mvc2lkZWJhci50cyIsICIudnVlcHJlc3MvZm9vdGVyLnRzIiwgIi52dWVwcmVzcy9leHRyYVNpZGVCYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzcy9jb25maWdcIjtcclxuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgZXh0cmFTaWRlQmFyIGZyb20gXCIuL2V4dHJhU2lkZUJhclwiO1xyXG5cclxuY29uc3QgYXV0aG9yID0gXCJcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUVcIjtcclxuY29uc3QgZG9tYWluID0gXCJodHRwczovL3NpbmNvc3Rhbi50ZWNoL1wiO1xyXG5jb25zdCB0YWdzID0gW1wiXHU3QTBCXHU1RThGXHU1NDU4XCIsIFwiXHU3RjE2XHU3QTBCXCIsIFwiXHU4QkExXHU3Qjk3XHU2NzNBXCJdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBob3N0OiBcIjAuMC4wLjBcIixcclxuICBwb3J0OiA4MDgwLFxyXG4gIC8vIFx1N0Y1MVx1N0FEOVx1NjgzOVx1OERFRlx1NUY4NFxyXG4gIGJhc2U6IFwiL3Z1ZXByZXNzL1wiLFxyXG4gIGxhbmc6IFwiemgtQ05cIixcclxuICB0aXRsZTogXCJcdTlDN0NcdTc2QUVcdTc2ODRcdTdGMTZcdTdBMEJcdTVCOURcdTUxNzhcIixcclxuICBkZXNjcmlwdGlvbjogXCJcdThEMzRcdTVGQzNcdTc2ODRcdTdGMTZcdTdBMEJcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcdUZGMENcdTUxNjhcdTk3NjJcdTc2ODRcdTdGMTZcdTdBMEJcdTc3RTVcdThCQzZcdTc2N0VcdTc5RDFcIixcclxuICBoZWFkOiBbXHJcbiAgICAvLyBcdTdBRDlcdTcwQjlcdTU2RkVcdTY4MDdcclxuICAgIFtcImxpbmtcIiwgeyByZWw6IFwiaWNvblwiLCBocmVmOiBcIi9mYXZpY29uLmljb1wiIH1dLFxyXG4gICAgLy8gU0VPXHJcbiAgICBbXHJcbiAgICAgIFwibWV0YVwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJrZXl3b3Jkc1wiLFxyXG4gICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICBcIlx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRSwgXHU3RjE2XHU3QTBCXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGLCBcdTdGMTZcdTdBMEJcdTc3RTVcdThCQzZcdTc2N0VcdTc5RDEsIEphdmEsIFx1N0YxNlx1N0EwQlx1NUJGQ1x1ODIyQSwgXHU1MjREXHU3QUVGLCBcdTVGMDBcdTUzRDEsIFx1N0YxNlx1N0EwQlx1NTIwNlx1NEVBQiwgXHU5ODc5XHU3NkVFLCBJVCwgXHU2QzQyXHU4MDRDLCBcdTk3NjJcdTdFQ0ZcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFcclxuICAgIFtcclxuICAgICAgXCJzY3JpcHRcIixcclxuICAgICAge30sXHJcbiAgICAgIGBcclxuICAgICAgICB2YXIgX2htdCA9IF9obXQgfHwgW107XHJcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgIGhtLnNyYyA9IFwiaHR0cHM6Ly9obS5iYWlkdS5jb20vaG0uanM/MjY3NTgxOGE5ODNhMzEzMTQwNGNlZTgzNTAxOGYwMTZcIjtcclxuICAgICAgICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07IFxyXG4gICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7XHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgYCxcclxuICAgIF0sXHJcbiAgXSxcclxuICBwZXJtYWxpbms6IFwiLzpzbHVnXCIsXHJcblxyXG4gIC8vIFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NTNEOFx1NTMxNlx1RkYwQ1x1NzBFRFx1NjZGNFx1NjVCMFxyXG4gIGV4dHJhV2F0Y2hGaWxlczogW1wiLnZ1ZXByZXNzLyoudHNcIiwgXCIudnVlcHJlc3Mvc2lkZWJhcnMvKi50c1wiXSxcclxuICBtYXJrZG93bjoge1xyXG4gICAgLy8gXHU1RjAwXHU1NDJGXHU0RUUzXHU3ODAxXHU1NzU3XHU3Njg0XHU4ODRDXHU1M0Y3XHJcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgIC8vIFx1NjUyRlx1NjMwMSA0IFx1N0VBN1x1NEVFNVx1NEUwQVx1NzY4NFx1NjgwN1x1OTg5OFx1NkUzMlx1NjdEM1xyXG4gICAgZXh0cmFjdEhlYWRlcnM6IFtcImgyXCIsIFwiaDNcIiwgXCJoNFwiLCBcImg1XCIsIFwiaDZcIl0sXHJcbiAgfSxcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcGx1Z2luczogW1xyXG4gICAgW1wiQHZ1ZXByZXNzL2JhY2stdG8tdG9wXCJdLFxyXG4gICAgLy8gR29vZ2xlIFx1NTIwNlx1Njc5MFxyXG4gICAgW1xyXG4gICAgICBcIkB2dWVwcmVzcy9nb29nbGUtYW5hbHl0aWNzXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBnYTogXCJHVE0tV1ZTOUhNNldcIiwgLy8gXHU4ODY1XHU1MTQ1XHU4MUVBXHU1REYxXHU3Njg0XHU4QzM3XHU2QjRDXHU1MjA2XHU2NzkwIElEXHVGRjBDXHU2QkQ0XHU1OTgyIFVBLTAwMDAwMDAwLTBcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXCJAdnVlcHJlc3MvbWVkaXVtLXpvb21cIl0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbG9yaXNsZWl2YS92dWVwcmVzcy1wbHVnaW4tc2VvXHJcbiAgICBbXHJcbiAgICAgIFwic2VvXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBzaXRlVGl0bGU6IChfLCAkc2l0ZSkgPT4gJHNpdGUudGl0bGUsXHJcbiAgICAgICAgdGl0bGU6ICgkcGFnZSkgPT4gJHBhZ2UudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICgkcGFnZSkgPT5cclxuICAgICAgICAgICRwYWdlLmZyb250bWF0dGVyLmRlc2NyaXB0aW9uIHx8ICRwYWdlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGF1dGhvcjogKF8sICRzaXRlKSA9PiAkc2l0ZS50aGVtZUNvbmZpZy5hdXRob3IgfHwgYXV0aG9yLFxyXG4gICAgICAgIHRhZ3M6ICgkcGFnZSkgPT4gJHBhZ2UuZnJvbnRtYXR0ZXIudGFncyB8fCB0YWdzLFxyXG4gICAgICAgIHR5cGU6ICgkcGFnZSkgPT4gXCJhcnRpY2xlXCIsXHJcbiAgICAgICAgdXJsOiAoXywgJHNpdGUsIHBhdGgpID0+XHJcbiAgICAgICAgICAoJHNpdGUudGhlbWVDb25maWcuZG9tYWluIHx8IGRvbWFpbiB8fCBcIlwiKSArIHBhdGgsXHJcbiAgICAgICAgaW1hZ2U6ICgkcGFnZSwgJHNpdGUpID0+XHJcbiAgICAgICAgICAkcGFnZS5mcm9udG1hdHRlci5pbWFnZSAmJlxyXG4gICAgICAgICAgKCgkc2l0ZS50aGVtZUNvbmZpZy5kb21haW4gJiZcclxuICAgICAgICAgICAgISRwYWdlLmZyb250bWF0dGVyLmltYWdlLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB8fFxyXG4gICAgICAgICAgICBcIlwiKSArICRwYWdlLmZyb250bWF0dGVyLmltYWdlLFxyXG4gICAgICAgIHB1Ymxpc2hlZEF0OiAoJHBhZ2UpID0+XHJcbiAgICAgICAgICAkcGFnZS5mcm9udG1hdHRlci5kYXRlICYmIG5ldyBEYXRlKCRwYWdlLmZyb250bWF0dGVyLmRhdGUpLFxyXG4gICAgICAgIG1vZGlmaWVkQXQ6ICgkcGFnZSkgPT4gJHBhZ2UubGFzdFVwZGF0ZWQgJiYgbmV3IERhdGUoJHBhZ2UubGFzdFVwZGF0ZWQpLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9la29lcnlhbnRvL3Z1ZXByZXNzLXBsdWdpbi1zaXRlbWFwXHJcbiAgICBbXHJcbiAgICAgIFwic2l0ZW1hcFwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgaG9zdG5hbWU6IGRvbWFpbixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSU9yaWVucy92dWVwcmVzcy1wbHVnaW4tYmFpZHUtYXV0b3B1c2hcclxuICAgIFtcInZ1ZXByZXNzLXBsdWdpbi1iYWlkdS1hdXRvcHVzaFwiXSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96cTk5Mjk5L3Z1ZXByZXNzLXBsdWdpbi90cmVlL21hc3Rlci92dWVwcmVzcy1wbHVnaW4tdGFnc1xyXG4gICAgW1widnVlcHJlc3MtcGx1Z2luLXRhZ3NcIl0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vem5pY2hvbGFzYnJvd24vdnVlcHJlc3MtcGx1Z2luLWNvZGUtY29weVxyXG4gICAgW1xyXG4gICAgICBcInZ1ZXByZXNzLXBsdWdpbi1jb2RlLWNvcHlcIixcclxuICAgICAge1xyXG4gICAgICAgIHN1Y2Nlc3NUZXh0OiBcIlx1NEVFM1x1NzgwMVx1NURGMlx1NTkwRFx1NTIzNlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJtYXN0ZXJpc2gvdnVlcHJlc3MtcGx1Z2luLWZlZWRcclxuICAgIFtcclxuICAgICAgXCJmZWVkXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBjYW5vbmljYWxfYmFzZTogZG9tYWluLFxyXG4gICAgICAgIGNvdW50OiAxMDAwMCxcclxuICAgICAgICAvLyBcdTk3MDBcdTg5ODFcdTgxRUFcdTUyQThcdTYzQThcdTkwMDFcdTc2ODRcdTY1ODdcdTY4NjNcdTc2RUVcdTVGNTVcclxuICAgICAgICBwb3N0c19kaXJlY3RvcmllczogW10sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RvbGtpbmcvdnVlcHJlc3MtcGx1Z2luLWltZy1sYXp5XHJcbiAgICBbXCJpbWctbGF6eVwiXSxcclxuICBdLFxyXG4gIC8vIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBsb2dvOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgbmF2OiBuYXZiYXIsXHJcbiAgICBzaWRlYmFyLFxyXG4gICAgbGFzdFVwZGF0ZWQ6IFwiXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwXCIsXHJcblxyXG4gICAgLy8gR2l0SHViIFx1NEVEM1x1NUU5M1x1NEY0RFx1N0Y2RVxyXG4gICAgcmVwbzogXCJsaXl1cGkvY29kZWZhdGhlclwiLFxyXG4gICAgZG9jc0JyYW5jaDogXCJtYXN0ZXJcIixcclxuXHJcbiAgICAvLyBcdTdGMTZcdThGOTFcdTk0RkVcdTYzQTVcclxuICAgIGVkaXRMaW5rczogdHJ1ZSxcclxuICAgIGVkaXRMaW5rVGV4dDogXCJcdTVCOENcdTU1ODRcdTk4NzVcdTk3NjJcIixcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAvLyBcdTVFOTVcdTkwRThcdTcyNDhcdTY3NDNcdTRGRTFcdTYwNkZcclxuICAgIGZvb3RlcixcclxuICAgIC8vIFx1OTg5RFx1NTkxNlx1NTNGM1x1NEZBN1x1OEZCOVx1NjgwRlxyXG4gICAgZXh0cmFTaWRlQmFyLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiaW1wb3J0IHtOYXZJdGVtfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogXCJOZXVyb1Zpc2lvblwiLFxyXG4gICAgICAgIGxpbms6ICcvTmV1cm9WaXNpb24vJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkJsb29kVmlzaW9uXCIsXHJcbiAgICAgICAgbGluazogXCIvQmxvb2RWaXNpb24vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6IFwiTWVkVmlzaW9uXCIsXHJcbiAgICAgICAgbGluazogJy9NZWRWaXNpb24vJ1xyXG4gICAgfVxyXG5dIGFzIE5hdkl0ZW1bXTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICBcIlwiLFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjYxRlx1NzQwM1x1OEQ0NFx1NjU5OVwiLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBcIlx1NjYxRlx1NzQwM1x1OEQ0NFx1NjU5OS9cdTVCNjZcdTRFNjBcdThENDRcdTZFOTBcIixcclxuICAgICAgXCJcdTY2MUZcdTc0MDNcdThENDRcdTY1OTkvXHU0RTEzXHU1QzVFXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGXCIsXHJcbiAgICAgIFwiXHU2NjFGXHU3NDAzXHU4RDQ0XHU2NTk5L1x1NEUxM1x1NUM1RVx1NEVBNFx1NkQ0MVx1N0ZBNFwiLFxyXG4gICAgICBcIlx1NjYxRlx1NzQwM1x1OEQ0NFx1NjU5OS9cdTlDN0NcdTc2QUVcdTc2ODRcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjBcIixcclxuICAgICAgXCJcdTY2MUZcdTc0MDNcdThENDRcdTY1OTkvXHU5QzdDXHU3NkFFXHU3Njg0XHU2MjUzXHU1REU1XHU2NUU1XHU4QkIwXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU2NjFGXHU3NDAzXHU5ODc5XHU3NkVFXCIsXHJcbiAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1x1RDgzRFx1REQyNSBBSSBcdTdCNTRcdTk4OThcdTVFOTRcdTc1MjhcdTVFNzNcdTUzRjBcdUZGMDhcdTY3MDBcdTY1QjBcdThGREJcdTg4NENcdTRFMkRcdUZGMDlcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1x1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1NTY2OFx1NTE3MVx1NEVBQlx1NUU3M1x1NTNGMFwiLFxyXG4gICAgICBcIi9cdTk4NzlcdTc2RUVcdTVCOUVcdTYyMTgvXHU2MjRCXHU1MTk5IFJQQyBcdTY4NDZcdTY3QjZcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L09KIFx1NTIyNFx1OTg5OFx1N0NGQlx1N0VERlwiLFxyXG4gICAgICBcIi9cdTk4NzlcdTc2RUVcdTVCOUVcdTYyMTgvXHU2NjdBXHU4MEZEIEJJIFx1NUU3M1x1NTNGMFwiLFxyXG4gICAgICBcIi9cdTk4NzlcdTc2RUVcdTVCOUVcdTYyMTgvQVBJIFx1NUYwMFx1NjUzRVx1NUU3M1x1NTNGMFwiLFxyXG4gICAgICBcIi9cdTk4NzlcdTc2RUVcdTVCOUVcdTYyMTgvXHU4MDVBXHU1NDA4XHU2NDFDXHU3RDIyXHU1RTczXHU1M0YwXCIsXHJcbiAgICAgIFwiL1x1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOC9cdTc1MjhcdTYyMzdcdTRFMkRcdTVGQzNcdTk4NzlcdTc2RUVcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1x1NEYxOVx1NEYzNFx1NTMzOVx1OTE0RFx1N0NGQlx1N0VERlwiLFxyXG4gICAgICBcIi9cdTk4NzlcdTc2RUVcdTVCOUVcdTYyMTgvSmF2YSBcdTU0MEVcdTdBRUZcdTRFMDdcdTc1MjhcdTk4NzlcdTc2RUVcdTZBMjFcdTY3N0ZcIixcclxuICAgICAgXCIvXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4L1x1NTI0RFx1N0FFRlx1NEUwN1x1NzUyOFx1OTg3OVx1NzZFRVx1NkEyMVx1Njc3RlwiLFxyXG4gICAgICBcIi9cdTk4NzlcdTc2RUVcdTVCOUVcdTYyMTgvXHU5QzdDXHU3NkFFXHU5ODc5XHU3NkVFXHU1QjY2XHU0RTYwXHU1RUZBXHU4QkFFXHVGRjA4XHU1RkM1XHU4QkZCXHVGRjA5XCIsXHJcbiAgICAgIFwiXHU2NjFGXHU3NDAzXHU5ODc5XHU3NkVFL1x1OTg3OVx1NzZFRVx1OEJBRFx1N0VDM1x1ODQyNVwiLFxyXG4gICAgICBcIlx1NjYxRlx1NzQwM1x1OTg3OVx1NzZFRS9XZWIgXHU3RUM4XHU3QUVGXHU5ODc5XHU3NkVFXCIsXHJcbiAgICAgIFwiXHU2NjFGXHU3NDAzXHU5ODc5XHU3NkVFL1x1N0YxNlx1N0EwQlx1NUJGQ1x1ODIyQVx1NTk1Nlx1NTJCMVx1N0NGQlx1N0VERlwiLFxyXG4gICAgICBcIlx1NjYxRlx1NzQwM1x1OTg3OVx1NzZFRS9TUUwgXHU3NTFGXHU2MjEwXHU1NjY4XHU5ODc5XHU3NkVFXCIsXHJcbiAgICAgIFwiXHU2NjFGXHU3NDAzXHU5ODc5XHU3NkVFL1x1NURFNVx1NEY1Q1x1OEJCMFx1NUY1NVx1NTIwNlx1Njc5MFx1NURFNVx1NTE3N1wiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjYxRlx1NzQwM1x1NzZGNFx1NjRBRFwiLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW1wiXHU2NjFGXHU3NDAzXHU3NkY0XHU2NEFEL1wiLCBcIlx1NjYxRlx1NzQwM1x1NzZGNFx1NjRBRC9cdTVGODBcdTY3MUZcdTc2RjRcdTY0QURcIiwgXCJcdTY2MUZcdTc0MDNcdTc2RjRcdTY0QUQvXHU1NjA5XHU1QkJFXHU1MjA2XHU0RUFCXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU3NzFGXHU1QjlFXHU4QkM0XHU0RUY3XCIsXHJcbiAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgIGNoaWxkcmVuOiBbXCJcdTc3MUZcdTVCOUVcdThCQzRcdTRFRjcvXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU2NjFGXHU3NDAzXHU2NTQ1XHU0RThCXCIsXHJcbiAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgIGNoaWxkcmVuOiBbXCJcdTY2MUZcdTc0MDNcdTY1NDVcdTRFOEIvXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU1MTczXHU0RThFXHU2MjExXHU0RUVDXCIsXHJcbiAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgIGNoaWxkcmVuOiBbXCJcdTUxNzNcdTRFOEVcdTYyMTFcdTRFRUMvXCIsIFwiXHU1MTczXHU0RThFXHU2MjExXHU0RUVDL1x1NEUyQVx1NEVCQVx1N0VDRlx1NTM4NlwiXSxcclxuICB9LFxyXG4gIFwiXHU2NjFGXHU3NDAzXHU1RTc0XHU1RUE2XHU2MDNCXHU3RUQzXCIsXHJcbiAgXCJcdTUyQTBcdTUxNjVcdTdGMTZcdTdBMEJcdTVCRkNcdTgyMkFcIixcclxuXTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICBcIlwiLFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NzdFNVx1OEJDNlx1Nzg4RVx1NzI0N1wiLFxyXG4gICAgY29sbGFwc2FibGU6IGZhbHNlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCI0IFx1NzlDRFx1NjVCOVx1NkNENVx1RkYwQ1x1NUZFQlx1OTAxRlx1NTIxRFx1NTlDQlx1NTMxNiBKYXZhIFx1OTg3OVx1NzZFRS5tZFwiLFxyXG4gICAgICBcIlx1NEY3Rlx1NzUyOFx1NTQwRVx1N0FFRlx1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1NTY2OFx1RkYwQ1x1NjNEMFx1OUFEOFx1NUYwMFx1NTNEMVx1NjU0OFx1NzM4Ny5tZFwiLFxyXG4gICAgICBcIlx1NTI0RFx1N0FFRlx1NUZDNVx1NUI2Nlx1NzY4NFx1NUYwMFx1NTNEMVx1Njg0Nlx1NjdCNlx1RkYwQ0FudCBEZXNpZ24gUHJvLm1kXCIsXHJcbiAgICAgIFwiXHU1NDBFXHU3QUVGXHU1OTgyXHU0RjU1XHU3RjE2XHU1MTk5XHU1MzU1XHU1MTQzXHU2RDRCXHU4QkQ1XHVGRjFGIC5tZFwiLFxyXG4gICAgICBcIlx1NTQwRVx1N0FFRlx1OTg3OVx1NzZFRVx1N0VDRlx1NTE3OFx1NTIwNlx1NUM0Mlx1NjdCNlx1Njc4NFx1NEVDQlx1N0VDRC5tZFwiLFxyXG4gICAgICBcIlx1NTk4Mlx1NEY1NVx1OUFEOFx1NjU0OFx1NkQ0Qlx1OEJENVx1NjNBNVx1NTNFM1x1RkYxRlx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NjNBNVx1NTNFM1x1NjU4N1x1Njg2My5tZFwiLFxyXG4gICAgICBcIlx1NUYwMFx1NTNEMVx1NEYwMVx1NEUxQVx1NUZBRVx1NEZFMVx1N0ZBNFx1NjczQVx1NTY2OFx1NEVCQVx1RkYwQ1x1NUI5RVx1NzNCMFx1NUI5QVx1NjVGNlx1NjNEMFx1OTE5Mi5tZFwiLFxyXG4gICAgICBcIlx1MzAxMFx1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1MzAxMVx1ODhDNVx1OTk3MFx1ODAwNVx1NkEyMVx1NUYwRlx1RkYwQ1x1NTNDQVx1NTE3Nlx1NTcyOEpES1x1NkU5MFx1NzgwMVx1NEUyRFx1NzY4NFx1NUU5NFx1NzUyOC5tZFwiLFxyXG4gICAgICBcIlx1NzUyOFx1NTZEQlx1NzlDRFx1OTUwMVx1NUI5RVx1NzNCMFx1NTJBMFx1NTE2NVx1OTYxRlx1NEYwRFx1NTI5Rlx1ODBGRChcdTRGMTlcdTRGMzRcdTUzMzlcdTkxNERcdTdDRkJcdTdFREYpLm1kXCIsXHJcbiAgICAgIFwiXHU3NTI4QFZhbGlkYXRlZFx1NkNFOFx1ODlFM1x1NUI5RVx1NzNCMFx1OTc1RVx1N0E3QVx1NjgyMVx1OUE4Qy5tZFwiLFxyXG4gICAgICBcIlx1NEY3Rlx1NzUyOFx1N0IyQ1x1NEUwOVx1NjVCOVx1NjcwRFx1NTJBMShcdTVCOURcdTU4NTQpXHU1RkVCXHU5MDFGXHU5MEU4XHU3RjcyXHU5ODc5XHU3NkVFLm1kXCIsXHJcbiAgICAgIFwiUkVTVGZ1bCBcdTYzQTVcdTUzRTNcdTVCOUVcdTczQjBcdTRFMEVcdTZENEJcdThCRDUoIFNwcmluZyBCb290ICkubWRcIixcclxuICAgICAgXCJcdTVGRUJcdTkwMUZcdTVCNjZcdTRGMUFcdTRFM0FcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcdTUwNUFcdThEMjFcdTczMkUubWRcIixcclxuICAgICAgXCJcdTY1NzRcdTU0MDhTcHJpbmcgSkRCQ1x1NjRDRFx1NEY1Q1x1NjU3MFx1NjM2RVx1NUU5My5tZFwiLFxyXG4gICAgICBcIk1hdmVuIFx1NEUyRFx1NTkyRVx1NEVEM1x1NUU5M1x1NTNEMVx1NTMwNVx1NkQ0MVx1N0EwQi5tZFwiLFxyXG4gICAgICBcIk5hY29zIFx1OTE0RFx1N0Y2RVx1NEUyRFx1NUZDM1x1NjQyRFx1NUVGQS5tZFwiLFxyXG4gICAgICBcIkJlYW4gXHU2MkY3XHU4RDFEXHU0RTRCIE1hcFN0cnVjdC5tZFwiLFxyXG4gICAgICBcIlx1NTk4Mlx1NEY1NVx1NUZFQlx1OTAxRlx1NUZGRFx1NzU2NSBHaXQgXHU2NTg3XHU0RUY2XHU2M0QwXHU0RUE0XHVGRjFGLm1kXCIsXHJcbiAgICAgIFwiRWFzeUV4Y2VsIFx1NUJGQ1x1NTFGQVx1NjU4N1x1NEVGNi5tZFwiLFxyXG4gICAgICBcIlx1NTk4Mlx1NEY1NVx1NTkwNFx1NzQwNiBDb21wbGV0YWJsZUZ1dHVyZSBcdTRFMkRcdTc2ODRcdTRFMjRcdTc5Q0RcdTVGMDJcdTVFMzgoXHU2NjdBXHU4MEZEQklcdTk4NzlcdTc2RUUpLm1kXCIsXHJcbiAgICAgIFwiXHU1N0ZBXHU0RThFIFNlc3Npb24gXHU1QjlFXHU3M0IwXHU3N0VEXHU0RkUxXHU3NjdCXHU1RjU1Lm1kXCIsXHJcbiAgICAgIFwiU3luY2hyb25pemVkIFx1NTE3M1x1OTUyRVx1NUI1N1x1OEJFNlx1ODlFMy5tZFwiLFxyXG4gICAgICBcIlJlZGlzc2lvbiBcdTg5RTNcdTk1MDFcdTVGMDJcdTVFMzhcdTg5RTNcdTUxQjNcdTY1QjlcdTY4NDgubWRcIixcclxuICAgICAgXCJcdTVCOUVcdTczQjBcdTRFM0JcdTk4OThcdTYzNjJcdTgwQTQoIENTUyBcdTUzRDhcdTkxQ0YgKyBcdTdDN0JcdTU0MERcdTUyMDdcdTYzNjIpLm1kXCIsXHJcbiAgICAgIFwiU3ByaW5nQm9vdCBcdTY1NzRcdTU0MDggTWluaW9cdTUxNjhcdTZENDFcdTdBMEJcdUZGMDhcdTRFQ0VcdTVCODlcdTg4QzUgTWluaW8gXHU1MjMwXHU1RTk0XHU3NTI4XHVGRjA5Lm1kXCIsXHJcbiAgICAgIFwiXHUzMDEwUmVkaXNcdTVFOTRcdTc1MjhcdTMwMTFVVlx1N0VERlx1OEJBMS5tZFwiLFxyXG4gICAgICBcIlx1MzAwQVx1OEQyRlx1N0E3Rlx1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1MzAwQlx1N0IyQ1x1NEUwOVx1NjVCOVx1NzY3Qlx1NUY1NVx1NUI5RVx1OERGNVtcdTk2NDRcdTUyNERcdTU0MEVcdTdBRUZcdTVCOENcdTY1NzRcdThGQzdcdTdBMEJcdTUzQ0FcdTZENEJcdThCRDVdLm1kXCIsXHJcbiAgICAgIFwiV2Vic29ja2V0LisgU3ByaW5nLVNzZUVtaXR0ZXIzIFx1NUI5RVx1NzNCMFx1OEJBRlx1OThERVx1NjYxRlx1NzA2QkphdmFcdTVCQTJcdTYyMzdcdTdBRUYubWRcIixcclxuICAgICAgXCJcdTc1MjhcdTVFMDNcdTk2ODZcdThGQzdcdTZFRTRcdTU2NjhcdTVCOUVcdTczQjBcdTY4QzBcdTY3RTVcdTc1MjhcdTYyMzdcdTU0MERcdTY2MkZcdTU0MjZcdTVCNThcdTU3MjgoXHU3NTI4XHU2MjM3XHU2Q0U4XHU1MThDKS5tZFwiLFxyXG4gICAgICBcIlNwcmluZ1NlY3VyaXR5IFx1NjU3NFx1NTQwOCBPYXV0aDIubWRcIixcclxuICAgICAgXCJcdTUyNERcdTdBRUZcdTUyMURcdTU5Q0JcdTUzMTYgQW50IERlc2lnbiBQcm8gXHU3QjE0XHU4QkIwLm1kXCIsXHJcbiAgICAgIFwiTGl0ZUZsb3cgXHU3RjE2XHU2MzkyXHU1RjBGXHU3RjE2XHU3QTBCXHU3QjgwXHU1MzU1XHU0RUNCXHU3RUNELm1kXCIsXHJcbiAgICAgIFwiXHU1N0ZBXHU0RThFIFJlZGlzIFx1NUI5RVx1NzNCMFx1NzdFRFx1NEZFMVx1NzY3Qlx1NUY1NS5tZFwiLFxyXG4gICAgICBcIk15U1FMIFx1NEUwMFx1NjhGNSBCICsgXHU2ODExXHU1M0VGXHU0RUU1XHU1QjU4XHU1OTFBXHU1QzExXHU2NzYxXHU2NTcwXHU2MzZFXHVGRjFGLm1kXCIsXHJcbiAgICAgIFwiU3ByaW5nQm9vdCBcdTY1NzRcdTU0MDggRUxLIFx1NUI5RVx1NzNCMFx1NjVFNVx1NUZEN1x1OTFDN1x1OTZDNlx1NEUwRVx1NzZEMVx1NjNBNy5tZFwiLFxyXG4gICAgICBcIlx1NTdGQVx1NEU4RVx1ODFFQVx1NUI5QVx1NEU0OVx1NkNFOFx1ODlFM1x1NzY4NCBSZWRpc3NvbiBcdTUyMDZcdTVFMDNcdTVGMEZcdTk1MDFcdTVCOUVcdTczQjAubWRcIixcclxuICAgICAgXCJcdTczQTlcdThGNkNcdTVGMDJcdTZCNjVcdTdGMTZcdTdBMEJcdTUyMjlcdTU2NjggQ29tcGxldGFibGVGdXR1cmUubWRcIixcclxuICAgICAgXCJcdTkwMUFcdThGQzcgV2luZG93cyBcdTgxMUFcdTY3MkNcdTYyNjdcdTg4NENcdTYyNTNcdTUzMDVcdTY0Q0RcdTRGNUMubWRcIixcclxuICAgICAgXCJcdTk2M0ZcdTkxQ0NcdTRFOTFcdTVCRjlcdThDNjFcdTVCNThcdTUwQTggT1NTLm1kXCIsXHJcbiAgICAgIFwiXHU1NDBFXHU3QUVGIFNwcmluZyBCb290IFx1NEUwN1x1NzUyOFx1NkEyMVx1Njc3Rlx1NEY3Rlx1NzUyOC5tZFwiLFxyXG4gICAgICBcIlx1NEY3Rlx1NzUyOCBjYW5hbCBcdTVCOUVcdTczQjBcdTU4OUVcdTkxQ0ZcdThCQTJcdTk2MDVcdTU0OENcdTZEODhcdThEMzkubWRcIixcclxuICAgICAgXCJTcHJpbmdCb290ICsgUXVhcnR6IFx1N0I4MFx1NjYxM1x1NUI5QVx1NjVGNlx1NEVGQlx1NTJBMS5tZFwiLFxyXG4gICAgICBcIlN0cmluZyBcdTc2ODQgaW50ZXJuKCkgXHU2NUI5XHU2Q0Q1Lm1kXCIsXHJcbiAgICAgIFwiTXlTUUwgXHU1QjU3XHU3QjI2XHU0RTMyXHU2NUU1XHU2NzFGXHU2ODNDXHU1RjBGXHU4RjZDXHU2MzYyLm1kXCIsXHJcbiAgICAgIFwiZmFpbC1mYXN0IFx1NjczQVx1NTIzNlx1NjYyRlx1NEVDMFx1NEU0OFx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlx1NTM0MVx1NzlDRCBTUUwgXHU3Njg0XHU1MTk5XHU2Q0Q1Lm1kXCIsXHJcbiAgICAgIFwiTXlCYXRpcyBcdTY1NzRcdTU0MDhcdTU5MUFcdTY1NzBcdTYzNkVcdTZFOTAubWRcIixcclxuICAgICAgXCIxXHU3OUQyXHU1QzA2XHU2NzJDXHU1NzMwU3ByaW5nQm9vdFx1OTg3OVx1NzZFRWphclx1NTMwNVx1OTBFOFx1N0Y3Mlx1NTIzMExpbnV4XHU3M0FGXHU1ODgzLm1kXCIsXHJcbiAgICAgIFwiREREIFx1NjYyRlx1NEVDMFx1NEU0OFx1RkYxRi5tZFwiLFxyXG4gICAgICBcIk9yYWNsZVx1NTIzME15U1FMXHU1MUZEXHU2NTcwXHU2NkZGXHU2MzYyXHU2NUI5XHU2ODQ4XHU2QzQ3XHU2MDNCLm1kXCIsXHJcbiAgICAgIFwiU3ByaW5nYm9vdCBcdTVGMTVcdTUxNjUgTmFjb3MgKCBXaW5kb3dzIFx1NzI0OCkubWRcIixcclxuICAgICAgXCJcdTUyMjlcdTc1MjhcdTVDNDBcdTU3REZcdTdGNTFcdTY0MkRcdTVFRkFcdTg2NUFcdTYyREZcdTY3M0FcdTVCOUVcdTczQjBcdThCQkZcdTk1RUVcdTk4NzlcdTc2RUUubWRcIixcclxuICAgICAgXCJcdTZENDVcdThDMDggY29va2llIFx1NTQ4QyBzZXNzaW9uLm1kXCIsXHJcbiAgICAgIFwiXHU3NTI4IFFRIFx1OTBBRVx1N0JCMVx1NUI5RVx1NzNCMFx1OUE4Q1x1OEJDMVx1NzgwMVx1NTI5Rlx1ODBGRC5tZFwiLFxyXG4gICAgICBcIlJlZGlzIFx1NUI5RVx1NzNCMFx1NjU4N1x1N0FFMFx1NzBCOVx1OEQ1RVx1NTI5Rlx1ODBGRChcdTk2NDRcdTVFMjZcdTUyNERcdTU0MEVcdTdBRUZcdTRFRTNcdTc4MDFcdTMwMDFcdTY1NzBcdTYzNkVcdTVFOTMpLm1kXCIsXHJcbiAgICAgIFwiXHU5NjNGXHU5MUNDXHU0RTkxXHU3N0VEXHU0RkUxXHU2NzBEXHU1MkExXHU1QjlFXHU3M0IwXHU2MjRCXHU2NzNBXHU5QThDXHU4QkMxXHU3ODAxLm1kXCIsXHJcbiAgICAgIFwiXHUzMDEwQWpheFx1MzAxMVx1NUYwMlx1NkI2NVx1OTAxQVx1NEZFMS5tZFwiLFxyXG4gICAgICBcIlx1MzAxMFx1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRlx1MzAxMVx1NEUwM1x1NTkyN1x1OEJCRVx1OEJBMVx1NTM5Rlx1NTIxOS5tZFwiLFxyXG4gICAgICBcIlx1NjU4N1x1N0FFMFx1OEJDNFx1OEJCQVx1NTI5Rlx1ODBGRFx1NTI0RFx1NTQwRVx1N0FFRlx1NUI5RVx1NzNCMFx1NjVCOVx1Njg0OFx1NjAzQlx1N0VEMy5tZFwiLFxyXG4gICAgICBcIlx1MzAxMFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1MzAxMUdpdFx1NUZFQlx1OTAxRlx1NEUwQVx1NjI0Qi5tZFwiLFxyXG4gICAgICBcIlx1MzAxMEphdmFcdTU3RkFcdTc4NDBcdTMwMTFcdTZEODhcdTcwNkRcdTlCNTRcdTZDRDVcdTUwM0MtXHU1RTM4XHU5MUNGJlx1Njc5QVx1NEUzRVx1OEJFNlx1OEZGMC5tZFwiLFxyXG4gICAgICBcIk15U1FMIFx1NzY4NCBDaGFyIFx1NUU3Nlx1NEUwRFx1NEUwMFx1NUI5QVx1NjYyRlx1NUI5QVx1OTU3Ri5tZFwiLFxyXG4gICAgICBcIlRleHRDTk4gXHU2NTg3XHU2NzJDXHU1MjA2XHU3QzdCXHU2QTIxXHU1NzhCXHU1NzI4XHU2NTg3XHU3QUUwXHU4QkM0XHU4QkJBXHU1QkExXHU2ODM4XHU0RTJEXHU3Njg0XHU1QjlFXHU3M0IwXHU0RTBFXHU5MEU4XHU3RjcyLm1kXCIsXHJcbiAgICAgIFwiXHU3NDA2XHU4OUUzIElPIFx1NTkxQVx1OERFRlx1NTkwRFx1NzUyOC5tZFwiLFxyXG4gICAgICBcIkVsYXN0aWNTZWFyY2ggXHU1N0ZBXHU3ODQwXHU2OTgyXHU1RkY1XHU0RTBFXHU1MTY1XHU5NUU4XHU0RjdGXHU3NTI4Lm1kXCIsXHJcbiAgICAgIFwiXHU3NDA2XHU4OUUzXHU4RkRCXHU3QTBCXHVGRjBDXHU3RUJGXHU3QTBCXHVGRjBDXHU1MzRGXHU3QTBCLm1kXCIsXHJcbiAgICAgIFwiXHU3NDA2XHU4OUUzXHU1MzlGXHU3ODAxXHUzMDAxXHU1M0NEXHU3ODAxXHUzMDAxXHU4ODY1XHU3ODAxLm1kXCIsXHJcbiAgICAgIFwiXHU1QjlBXHU0RTQ5QVBJXHU1RTc2XHU3NTFGXHU2MjEwXHU0RUUzXHU3ODAxXHVGRjA4IEdvIFx1NUZBRVx1NjcwRFx1NTJBMVx1Njg0Nlx1NjdCNiBLcmF0b3MgXHVGRjA5Lm1kXCIsXHJcbiAgICAgIFwiXHU0RjdGXHU3NTI4XHU1QkY5XHU4QzYxXHU1QjU4XHU1MEE4XHU1QjlFXHU3M0IwXHU2NTg3XHU0RUY2XHU0RTBBXHU0RjIwXHU0RTBCXHU4RjdELm1kXCIsXHJcbiAgICAgIFwiTWFya0Rvd24gXHU2NTg3XHU2NzJDXHU4OUUzXHU2NzkwXHU2MjEwIEhUTUwgXHU1RTc2XHU3NTFGXHU2MjEwXHU1OTI3XHU3RUIyLm1kXCIsXHJcbiAgICAgIFwiMTAgXHU1MjA2XHU5NDlGXHU1RkVCXHU5MDFGXHU2NDFFXHU2MUMyIExhbWJkYSBcdTg4NjhcdThGQkVcdTVGMEYubWRcIixcclxuICAgICAgXCJTcHJpbmdCb290IFx1OTg3OVx1NzZFRVx1NEUyRFx1NUZFQlx1OTAxRlx1NUYxNVx1NTE2NSBSYWJiaXQgTVEgXHU5MDFBXHU3NTI4XHU1MDVBXHU2Q0Q1Lm1kXCIsXHJcbiAgICAgIFwiT0ogXHU3QURFXHU4RDVCXHU2MzkyXHU4ODRDXHU2OTlDXHU3RURGXHU4QkExXHU5MDNCXHU4RjkxXHU4QkJFXHU4QkExXHU0RTBFXHU0RUUzXHU3ODAxXHU1QjlFXHU3M0IwLm1kXCIsXHJcbiAgICAgIFwiXHU1OTFBXHU4QkVEXHU4QTAwXHU0RUUzXHU3ODAxXHU2Qzk5XHU3QkIxXHU3Njg0XHU4QkJFXHU4QkExXHU0RTBFXHU1QjlFXHU3M0IwKE9KIFx1NTcyOFx1N0VCRlx1NTIyNFx1OTg5OFx1N0NGQlx1N0VERikubWRcIixcclxuICAgICAgXCJKYXZhIDggXHU2NUIwXHU3Mjc5XHU2MDI3XHVGRjFBU3RyZWFtIFx1NkQ0MVx1NUZFQlx1OTAxRlx1NTE2NVx1OTVFOC5tZFwiLFxyXG4gICAgICBcIlx1NEY3Rlx1NzUyOCBOVk0gXHU1RkVCXHU2Mzc3XHU3QkExXHU3NDA2IE5vZGUgXHU3MjQ4XHU2NzJDXHVGRjA4V2luXHU3MjQ4XHVGRjA5Lm1kXCIsXHJcbiAgICAgIFwiVnVlMyBcdTVGRUJcdTkwMUZcdTVCOUVcdTczQjBcdTY1ODdcdTRFRjZcdTRFMEFcdTRGMjAgT1NTLm1kXCIsXHJcbiAgICAgIFwiXHU1OTgyXHU0RjU1XHU4OUUzXHU1MUIzXHU3RjEzXHU1QjU4XHU1MUZCXHU3QTdGXHVGRjFGLm1kXCIsXHJcbiAgICAgIFwiUmFiYml0TVFcdTRFMDBcdTZCN0JcdTRGRTFcdTk2MUZcdTUyMTdcdTRFQ0JcdTdFQ0RcdTU0OENcdTVFOTRcdTc1MjgubWRcIixcclxuICAgICAgXCJcdThCRTZcdTg5RTMgU3ByaW5nQm9vdCBcdTgxRUFcdTVCOUFcdTRFNDkgU3RhcnRlci5tZFwiLFxyXG4gICAgICBcIlx1NEVDRVx1ODA1QVx1NTQwOFx1NjQxQ1x1N0QyMlx1OTg3OVx1NzZFRVx1ODlDNlx1ODlEMlx1NTE2NVx1OTVFOCBFbGFzdGljU2VhcmNoLm1kXCIsXHJcbiAgICAgIFwiXHU1RTM4XHU3NTI4XHU3Njg0XHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2XHU2NUI5XHU2Q0Q1Lm1kXCIsXHJcbiAgICAgIFwiXHU1RTM4XHU3NTI4XHU3Njg0XHU1QjU4XHU1MEE4XHU0RjE4XHU1MzE2XHU2NUI5XHU2Q0Q1Lm1kXCIsXHJcbiAgICAgIFwiSmF2YSBcdTVCOUVcdTczQjAgR2l0SHViIFx1N0IyQ1x1NEUwOVx1NjVCOVx1NzY3Qlx1NUY1NVx1OEJFNlx1ODlFMy5tZFwiLFxyXG4gICAgICBcIlx1NEYxOVx1NEYzNFx1NTMzOVx1OTE0RFx1NUYxNVx1NTE2NSBHRU8gXHU1QjlFXHU3M0IwXHU2NDFDXHU3RDIyXHU5NjQ0XHU4RkQxXHU3NTI4XHU2MjM3Lm1kXCIsXHJcbiAgICAgIFwiXHU4QkJFXHU4QkExXHU2QTIxXHU1RjBGXHU1QjlFXHU4REY1XHVGRjA4T0pcdTUyMjRcdTk4OThcdTU0OENcdTgwNUFcdTU0MDhcdTY0MUNcdTdEMjIpLm1kXCIsXHJcbiAgICAgIFwiXHU2QTIxXHU2NzdGXHU1RjE1XHU2NENFLVRoeW1lbGVhZlx1NEUwRUZyZWVtYXJrZXIubWRcIixcclxuICAgICAgXCJcdTZENzdcdTkxQ0ZcdTY1NzBcdTYzNkVcdTU3M0FcdTY2NkZcdTk3NjJcdThCRDVcdTk4OThcdUZGMUFcdTUxRkFcdTczQjBcdTk4OTFcdTczODdcdTY3MDBcdTlBRDhcdTc2ODQgMTAwIFx1NEUyQVx1OEJDRC5tZFwiLFxyXG4gICAgICBcIlx1NkRGMVx1NTE2NVx1NEU4Nlx1ODlFM1x1OEZEQlx1N0EwQlx1NTQ4Q1x1N0VCRlx1N0EwQlx1RkYxQVx1Njk4Mlx1NUZGNVx1MzAwMVx1NTMzQVx1NTIyQlx1NTQ4Q1x1NEYxOFx1NTMxNi5tZFwiLFxyXG4gICAgICBcIldlYlNvY2tldCBcdTUyNERcdTU0MEVcdTdBRUZcdTgwNTRcdThDMDNcdTRGN0ZcdTc1MjgubWRcIixcclxuICAgICAgXCJcdTVFNzZcdTUzRDFcdTk1RUVcdTk4OThcdTc2ODRcdTRFMDlcdTU5MjdcdTY4MzlcdTZFOTBcdTY2MkZcdTRFQzBcdTRFNDhcdUZGMUYubWRcIixcclxuICAgICAgXCJcdTU3RkFcdTRFOEUgR0EgXHU5MDU3XHU0RjIwXHU3Qjk3XHU2Q0Q1XHU3Njg0XHU2NjdBXHU4MEZEXHU3RUM0XHU5ODk4XHU2QTIxXHU1NzU3XHU3Njg0XHU4QkJFXHU4QkExXHU0RTBFXHU1RTk0XHU3NTI4Lm1kXCIsXHJcbiAgICAgIFwiXHU0RjdGXHU3NTI4IEFPUCtcdTgxRUFcdTVCOUFcdTRFNDlcdTZDRThcdTg5RTNcdTVCOUVcdTczQjBcdTY1RTVcdTVGRDdcdTYyNTNcdTUzNzAubWRcIixcclxuICAgICAgXCJIZXhvK0dpdGh1YitOZXRsaWZ5XHU1MzVBXHU1QkEyXHU2NDJEXHU1RUZBXHU2NTU5XHU3QTBCLm1kXCIsXHJcbiAgICAgIFwiXHU0RUMwXHU0RTQ4XHU2NjJGXHU2M0E1XHU1M0UzXHU3Njg0XHU1RTQyXHU3QjQ5XHU2MDI3XHVGRjBDXHU1OTgyXHU0RjU1XHU0RkREXHU4QkMxXHU2M0E1XHU1M0UzXHU3Njg0XHU1RTQyXHU3QjQ5XHU2MDI3XHVGRjFGLm1kXCIsXHJcbiAgICAgIFwiRFRPXHU4RjZDVk9cdTVERTVcdTUxNzcubWRcIixcclxuICAgICAgXCJcdTYzRDBcdTc5M0FcdTVERTVcdTdBMEJcdThGREJcdTk2MzZcdTYyODBcdTVERTdcdUZGMDhcdTU5MjdcdTZBMjFcdTU3OEJcdUZGMDkubWRcIixcclxuICAgICAgXCJNaW5JTytEb2NrZXIgXHU0RUNFXHU5NkY2XHU2NDJEXHU1RUZBXHU0RTAwXHU0RTJBXHU2NTg3XHU0RUY2XHU1QjU4XHU1MEE4XHU2NzBEXHU1MkExLm1kXCIsXHJcbiAgICAgICBcIk15U1FMOCBcdTdFRkZcdTgyNzJcdTcyNDhcdTVCODlcdTg4QzUubWRcIixcclxuICAgICAgXCJJREVBK0RvY2tlclx1OEZEQ1x1N0EwQlx1OTBFOFx1N0Y3MlNwcmluZ0Jvb3RcdTk4NzlcdTc2RUUubWRcIixcclxuICAgICAgXCJcdTUxRkRcdTY1NzBcdTVGMEZcdTYzQTVcdTUzRTNcdTc2ODRcdTRGN0ZcdTc1MjgubWRcIixcclxuICAgICAgXCJcdTk3NjJcdThCRDVcdThEODVcdTlBRDhcdTk4OTFcdTgwMDNcdTcwQjlcdUZGMUFIYXNoTWFwIFx1NkU5MFx1NzgwMVx1OTAxMFx1ODg0Q1x1ODlFM1x1Njc5MC5tZFwiLFxyXG4gICAgICBcIk15U1FMXHU1N0ZBXHU3ODQwXHU3N0U1XHU4QkM2XHVGRjFBRERMXHUzMDAxRE1MXHUzMDAxRFFMXHUzMDAxRENMXHU1M0NBVFBMXHU3Njg0XHU0RjdGXHU3NTI4Lm1kXCIsXHJcbiAgICAgIFwiU3ByaW5nQm9vdFx1OTAxQVx1OEZDN1x1ODFFQVx1NUI5QVx1NEU0OVx1NkNFOFx1ODlFM1x1NUI5RVx1NzNCMFx1NTkxQVx1NjU3MFx1NjM2RVx1NkU5MC5tZFwiLFxyXG4gICAgICBcIklERUEgXHU1NDBDXHU2NUY2XHU1MTczXHU4MDU0IEdpdEh1YiBcdTU0OEMgR2l0ZWUgXHU4RkRDXHU3QTBCXHU0RUQzXHU1RTkzLm1kXCIsXHJcbiAgICAgIFwiXHU3RjEzXHU1QjU4XHU3QTdGXHU5MDBGXHUzMDAxXHU3RjEzXHU1QjU4XHU1MUZCXHU3QTdGXHUzMDAxXHU3RjEzXHU1QjU4XHU5NkVBXHU1RDI5XHU3Njg0XHU1NzNBXHU2NjZGXHU0RUU1XHU1M0NBXHU4OUUzXHU1MUIzXHU2NUI5XHU2Q0Q1Lm1kXCIsXHJcbiAgICAgIFwiXHU3MkI2XHU2MDAxXHU2NzNBXHU2OTgyXHU1RkY1XHU0RUU1XHU1M0NBXHU0RjdGXHU3NTI4Lm1kXCJcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIFwiXCIsXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGXCIsXHJcbiAgICAgICAgY29sbGFwc2FibGU6IGZhbHNlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiQmlvaW1hZ2VWaXNpb24ubWRcIixcclxuICAgICAgICAgICAgXCJKYXZhXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICAgICAgICBcIlx1NTI0RFx1N0FFRlx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgICAgICAgXCJDKytcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgICAgICAgIFwiUHl0aG9uXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICAgICAgICBcIlx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NTQ4Q1x1N0I5N1x1NkNENVx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgICAgICAgXCJTUUxcdTUxNERcdThEMzlcdTVCOUVcdTYyMThcdTgxRUFcdTVCNjZcdTdGNTFcdTdBRDkgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgICAgICAgIFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU1N0ZBXHU3ODQwXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICAgICAgICBcIkdpdCZHaXRIdWJcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgICAgICAgIFwiXHU4QkJFXHU4QkExXHU2QTIxXHU1RjBGXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICAgICAgICBcIkxpbnV4XHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5dO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIFwiXCIsXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU5ODc5XHU3NkVFXHU1QjlFXHU2MjE4XCIsXHJcbiAgICBjb2xsYXBzYWJsZTogZmFsc2UsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBcIlx1OUM3Q1x1NzZBRVx1OTg3OVx1NzZFRVx1NUI2Nlx1NEU2MFx1NUVGQVx1OEJBRVx1RkYwOFx1NUZDNVx1OEJGQlx1RkYwOS5tZFwiLFxyXG4gICAgICBcIlx1RDgzRFx1REQyNSBBSSBcdTdCNTRcdTk4OThcdTVFOTRcdTc1MjhcdTVFNzNcdTUzRjBcdUZGMDhcdTY3MDBcdTY1QjBcdThGREJcdTg4NENcdTRFMkRcdUZGMDkubWRcIixcclxuICAgICAgXCJcdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdTU2NjhcdTUxNzFcdTRFQUJcdTVFNzNcdTUzRjAubWRcIixcclxuICAgICAgXCJcdTYyNEJcdTUxOTkgUlBDIFx1Njg0Nlx1NjdCNi5tZFwiLFxyXG4gICAgICBcIk9KIFx1NTIyNFx1OTg5OFx1N0NGQlx1N0VERi5tZFwiLFxyXG4gICAgICBcIlx1NjY3QVx1ODBGRCBCSSBcdTVFNzNcdTUzRjAubWRcIixcclxuICAgICAgXCJcdTgwNUFcdTU0MDhcdTY0MUNcdTdEMjJcdTVFNzNcdTUzRjAubWRcIixcclxuICAgICAgXCJBUEkgXHU1RjAwXHU2NTNFXHU1RTczXHU1M0YwLm1kXCIsXHJcbiAgICAgIFwiXHU0RjE5XHU0RjM0XHU1MzM5XHU5MTREXHU3Q0ZCXHU3RURGLm1kXCIsXHJcbiAgICAgIFwiXHU3NTI4XHU2MjM3XHU0RTJEXHU1RkMzXHU5ODc5XHU3NkVFLm1kXCIsXHJcbiAgICAgIFwiSmF2YSBcdTU0MEVcdTdBRUZcdTRFMDdcdTc1MjhcdTk4NzlcdTc2RUVcdTZBMjFcdTY3N0YubWRcIixcclxuICAgICAgXCJcdTUyNERcdTdBRUZcdTRFMDdcdTc1MjhcdTk4NzlcdTc2RUVcdTZBMjFcdTY3N0YubWRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICBcIlwiLFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFwiLFxyXG4gICAgY29sbGFwc2FibGU6IGZhbHNlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTU0MEVcdTdBRUZcdTdBODFcdTUxRkIgLSBcdTcyQzJcdTk4RDlcdTU0MEVcdTdBRUZcdThCQURcdTdFQzNcdTg0MjUubWRcIixcclxuICAgICAgXCJcdTUyNERcdTdBRUZcdTdBODFcdTUxRkIgLSBcdTUyNERcdTdBRUZcdTk3NjJcdThCRDVcdThCQURcdTdFQzNcdTg0MjUubWRcIixcclxuICAgICAgXCJcdTgwMDNcdTc4MTRcdTk2NkFcdThERDEgLSBcdTdGMTZcdTdBMEJcdTVCRkNcdTgyMkFcdThCQTFcdTcyRDdcdTRFMEFcdTVDQjgubWRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTVCOUVcdTc1MjhcdTVERTVcdTUxNzdcIixcclxuICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiXHU2QzQyXHU4MDRDIC0gXHU1RTJFXHU0RjYwXHU1MTk5XHU1OTdEXHU3QjgwXHU1Mzg2XHU3Njg0XHU3OTVFXHU1NjY4Lm1kXCIsXHJcbiAgICAgIFwiXHU0RUE3XHU1NEMxL1x1OUM3Q1x1ODA2QVx1NjYwRS9cdTVERTVcdTUxNzcgLSBcdTY1RTBcdTk1RThcdTY5REIgQUkgXHU1QkY5XHU4QkREXHU3RUQ4XHU3NTNCXHU3OTVFXHU1NjY4XCIsXHJcbiAgICAgIFwiXHU0RUE3XHU1NEMxL1x1NEVFM1x1NzgwMVx1NUMwRlx1NjI4NC9cdTVERTVcdTUxNzcgLSBcdTdCODBcdTUzNTVcdTY2MTNcdTc1MjhcdTc2ODRcdTRFRTNcdTc4MDFcdTUyMDZcdTRFQUJcdTc5NUVcdTU2NjhcIixcclxuICAgICAgXCJcdTRFQTdcdTU0QzEvXHU1MjZBXHU1MjA3XHU2NzdGXHU1MkE5XHU2MjRCL1x1NURFNVx1NTE3NyAtIFx1OUFEOFx1OTg5Q1x1NTAzQ1x1NzY4NFx1NTI2QVx1NTIwN1x1Njc3Rlx1NTJBOVx1NjI0QlwiXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsICJleHBvcnQgZGVmYXVsdCBbXHJcbiAgXCJcIixcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTU5MjdcdTVCNjZcdTdFQ0ZcdTUzODZcIixcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTU5MjdcdTVCNjZcdTdFQ0ZcdTUzODYvXHU2MjExXHU1QjY2XHU4QkExXHU3Qjk3XHU2NzNBXHU3Njg0XHU1NkRCXHU1RTc0XHVGRjBDXHU1MTcxXHU1MkM5XHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU1OTI3XHU1QjY2XHU3RUNGXHU1Mzg2L1x1NEVDRVx1NTkyN1x1NUI2Nlx1NTIzMFx1NzlDQlx1NjJEQlx1RkYwQ1x1NjIxMVx1NTk4Mlx1NEY1NVx1NjJGRlx1NEUwQlx1ODE3RVx1OEJBRm9mZmVyLm1kXCIsXHJcbiAgICAgIFwiXHU1OTI3XHU1QjY2XHU3RUNGXHU1Mzg2L1x1NTkyN1x1NUI2Nlx1RkYwQ1x1NjIxMVx1NjYyRlx1NjAwRVx1NEU0OFx1OEZCOVx1NUI2Nlx1N0YxNlx1N0EwQlx1OEZCOVx1OEQ1QVx1OTRCMVx1NzY4NFx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlx1NTkyN1x1NUI2Nlx1N0VDRlx1NTM4Ni9cdTYyMTFcdTU5MjdcdTRFMDlcdTY1RjZcdTUwNUFcdTc2ODRcdTdGOUVcdTgwM0JcdTk4NzlcdTc2RUVcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTU5MjdcdTVCNjZcdTdFQ0ZcdTUzODYvXHU5QzdDXHU3NkFFXHU3Njg0XHU4MDAzXHU4QkMxXHU3RUNGXHU1Mzg2Lm1kXCIsXHJcbiAgICAgIFwiXHU1OTI3XHU1QjY2XHU3RUNGXHU1Mzg2L1x1OUM3Q1x1NzZBRVx1NTcyOFx1NUI5RVx1OUE4Q1x1NUJBNFx1NTFGQVx1NzI0OFx1NjU1OVx1Njc1MFx1NzY4NFx1N0VDRlx1NTM4Ni5tZFwiLFxyXG4gICAgICBcIlx1NTkyN1x1NUI2Nlx1N0VDRlx1NTM4Ni9cdTlDN0NcdTc2QUVcdTc2ODRcdTZCRDVcdTRFMUFcdThCQkVcdThCQTFcdUZGMENcdTY1RjZcdTk2OTRcdTRFMDBcdTVFNzRcdUZGMENcdTRFQ0RcdTYxMUZcdTg5QzlcdTU5MzRcdTc5QzMubWRcIixcclxuICAgICAgXCJcdTU5MjdcdTVCNjZcdTdFQ0ZcdTUzODYvXHU5QzdDXHU3NkFFXHU3Njg0XHU2QkQ1XHU0RTFBXHU2MTFGXHU1M0Q3Lm1kXCIsXHJcbiAgICAgIFwiXHU1OTI3XHU1QjY2XHU3RUNGXHU1Mzg2L1x1OUM3Q1x1NzZBRVx1ODQzRFx1NjIzN1x1NEUwQVx1NkQ3N1x1NUZDM1x1NUY5Ny5tZFwiXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU2QzQyXHU4MDRDXHU3RUNGXHU1Mzg2XCIsXHJcbiAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiXHU2QzQyXHU4MDRDXHU3RUNGXHU1Mzg2L1x1NjIxMVx1NzY4NFx1N0IyQ1x1NEUwMFx1NEVGRFx1NUI5RVx1NEU2MFx1RkYwQ1x1NTc1MFx1OUFEOFx1OTRDMVx1NEUwQVx1NzNFRC5tZFwiLFxyXG4gICAgICBcIlx1NkM0Mlx1ODA0Q1x1N0VDRlx1NTM4Ni9cdTYyMTFcdTc2ODRcdTdCMkNcdTRFOENcdTRFRkRcdTVCOUVcdTRFNjBcdUZGMENcdTVCNTdcdTgyODJcdThERjNcdTUyQTgubWRcIixcclxuICAgICAgXCJcdTZDNDJcdTgwNENcdTdFQ0ZcdTUzODYvXHU0RUQ2XHU0RTEzXHU0RTFBXHU3QjJDXHU0RTAwXHVGRjBDXHU1Mzc0XHU2MjdFXHU0RTBEXHU1MjMwXHU1REU1XHU0RjVDLm1kXCIsXHJcbiAgICAgIFwiXHU2QzQyXHU4MDRDXHU3RUNGXHU1Mzg2L1x1OTc2Mlx1OEJENVx1OTYzRlx1OTFDQzZcdTZCMjFcdUZGMENcdTRFQ0RcdTcxMzZcdTU5MzFcdThEMjVcdTc2ODRcdTdFQ0ZcdTUzODYubWRcIlxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Q1wiLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9KYXZhXHU1RjAwXHU1M0QxXHU4MDA1XHU1REU1XHU0RjVDXHU5MEZEXHU1MDVBXHU0RUMwXHU0RTQ4XHVGRjFGLm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NjIxMVx1NEVDRVx1NUJGQ1x1NUUwOFx1OEVBQlx1NEUwQVx1NUI2Nlx1NTIzMFx1NEU4Nlx1NEVDMFx1NEU0OFx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdTYyMTFcdTU3MjhcdTgxN0VcdThCQUZcdTc2ODRcdThCRDVcdTc1MjhcdTY3MUZcdTYwM0JcdTdFRDMubWRcIixcclxuICAgICAgXCJcdTgwNENcdTU3M0FcdTVERTVcdTRGNUMvXHU2MjExXHU1NzI4XHU4MTdFXHU4QkFGXHU1NDhDXHU1QjU3XHU4MjgyXHU3Njg0XHU1REU1XHU0RjVDXHU2MTFGXHU1M0Q3Lm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NjIxMVx1NTM0N1x1N0VBN1x1NEUzQVx1NEU5MVx1NUYwMFx1NTNEMVx1OUFEOFx1N0VBN1x1NUUwM1x1OTA1M1x1NUUwOFx1NTU2Ni5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdTYyMTFcdTUxNjVcdTgwNENcdTRFMDBcdTVFNzRcdTc2ODRcdTYxMUZcdTUzRDcubWRcIixcclxuICAgICAgXCJcdTgwNENcdTU3M0FcdTVERTVcdTRGNUMvXHU3OUJCXHU1RjAwXHU1QjY2XHU2ODIxXHU1NDBFXHVGRjBDXHU2MjExXHU2MjREXHU2NjBFXHU3NjdELm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NjIxMVx1ODNCN1x1NUY5N1x1NEU4Nlx1ODE3RVx1OEJBRlx1NTE4NVx1OTBFOFx1N0FERVx1OEQ1Qlx1N0IyQ1x1NEUwMFx1NTQwRFx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdTlDN0NcdTc2QUVcdThGRDlcdTRFMkFcdTY3MDhcdTVDMzFcdTUxOTlcdTRFODZcdThGRDlcdTcwQjlcdTUxM0ZcdTRFRTNcdTc4MDFcdUZGMUYubWRcIixcclxuICAgICAgXCJcdTgwNENcdTU3M0FcdTVERTVcdTRGNUMvXHU4RkQ5XHU1NDY4XHU2Q0ExXHU1MTk5XHU0RUUzXHU3ODAxXHVGRjBDXHU3QURGXHU3MTM2XHU1NzI4XHU1MDVBXHU4RkQ5XHU0RUY2XHU0RThCXHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NURFNVx1NEY1Q1x1NTQwRVx1RkYwQ1x1NjIxMVx1NTc1QVx1NjMwMVx1NEU4Nlx1NTkxQVx1NUU3NFx1NzY4NFx1NEU2MFx1NjBFRi5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdThGNkNcdTg4NENcdTU5MjdcdTY1NzBcdTYzNkUxXHU0RTJBXHU2NzA4XHVGRjBDXHU2MjExXHU5RUJCXHU0RTg2XHUzMDAyXHUzMDAyXHUzMDAyLm1kXCIsXHJcbiAgICAgIFwiXHU4MDRDXHU1NzNBXHU1REU1XHU0RjVDL1x1NTkyN1x1NTM4Mlx1NTA1QVx1N0EwQlx1NUU4Rlx1NTQ1OFx1NEUyNFx1NUU3NFx1NTM0QVx1RkYwQ1x1NjIxMVx1N0VDOFx1NEU4RVx1NUI2Nlx1NEYxQVx1NEU4Nlx1MzAwMlx1MzAwMlx1MzAwMi5tZFwiLFxyXG4gICAgICBcIlx1ODA0Q1x1NTczQVx1NURFNVx1NEY1Qy9cdTUxOERcdTg5QzFcdTRFODZcdUZGMENcdTgxN0VcdThCQUZcdUZGMDEubWRcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODZcIixcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU2QkQ1XHU0RTFBXHU4RkQ5XHU1RTc0XHVGRjBDXHU2MjExXHU2MjEwXHU0RTNBXHU0RTg2XHU0RTAwXHU1NDBEVVBcdTRFM0IubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU2MjExXHU0RTVGXHU2MkU1XHU2NzA5XHU0RTg2MTBcdTRFMDdcdTdDODlcdTRFMUQubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvMTB3XHU3Qzg5XHU0RTFEXHVGRjBDXHU2MjExXHU1Mzc0XHU1NEVEXHU0RTg2Lm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RjVDXHU3RUNGXHU1Mzg2L1x1OUM3Q1x1NzZBRVx1NURFNVx1NEY1QytcdTUyMUJcdTRGNUNcdTc2ODRcdTY1RTVcdTVFMzhcdTc1MUZcdTZEM0IubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU0RThDXHU1MzQxXHU1NkRCLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RjVDXHU3RUNGXHU1Mzg2L1x1NEVDQVx1NTkyOVx1RkYwQ1x1NjIxMVx1ODk4MVx1NjQxRVx1NEVGNlx1NTkyN1x1NEU4Qlx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEY1Q1x1N0VDRlx1NTM4Ni9cdTYyMTFcdTRFRUNcdTY0MUVcdTRFODZcdTRFRjZcdTU5MjdcdTRFOEJcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU0RTAwXHU2QjIxXHU1Rjg4XHU2MTBGXHU1OTE2XHU3Njg0XHU3RjUxXHU3QUQ5XHU2NTQ1XHU5NjlDXHU3RUNGXHU1Mzg2XHUzMDAyLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RjVDXHU3RUNGXHU1Mzg2L1x1NEUwMFx1NkIyMVx1OTc2Mlx1NTQxMVVQXHU0RTNCXHU3Njg0XHU1NkUyXHU1RUZBLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RjVDXHU3RUNGXHU1Mzg2L1x1MjAxQ1x1ODAwMVx1NUUwOFx1RkYwQ1x1NjIxMVx1OEMyMlx1OEMyMlx1NEY2MFx1RkYwMVx1MjAxRC5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEY1Q1x1N0VDRlx1NTM4Ni9cdTYyMTFcdTg4QUJcdTY3MDBcdTYwNjhcdTc2ODRcdTUxNkNcdTUzRjhcdTkxQzdcdThCQkZcdTRFODZcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU1RTJFXHU5NjNGXHU5MUNDXHU0RTkxXHU2MkM5XHU2NUIwNzAwMFx1NEVCQVx1RkYwQ1x1NjIxMVx1OEY5M1x1NzY4NFx1NUY4OFx1NUY3Qlx1NUU5NVx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEY1Q1x1N0VDRlx1NTM4Ni9cdTdGNTFcdTdBRDlcdTUzQzhcdTg4QUJcdTY1M0JcdTUxRkJcdUZGMENcdTYyMTFcdTVGQzNcdTYwMDFcdTVEMjlcdTRFODYubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRGNUNcdTdFQ0ZcdTUzODYvXHU2NzY1XHU0RTg2XHU2NzY1XHU0RTg2XHVGRjAxLm1kXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU1MjFCXHU0RTFBXHU3RUNGXHU1Mzg2XCIsXHJcbiAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIFwiXHU1MjFCXHU0RTFBXHU3RUNGXHU1Mzg2L1x1NTE2Q1x1NTNGOFx1NTkyQVx1N0EzM1x1NUI5QVx1NEU4Nlx1RkYwMVx1NjIxMVx1NTk3RFx1NjE0Qy5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEUxQVx1N0VDRlx1NTM4Ni9cdTUyMUJcdTRFMUFcdTRFMDBcdTY3MDhcdTUzNEFcdUZGMENcdTRFMERcdTU5MkFcdTRFNjBcdTYwRUZcdTMwMDJcdTMwMDIubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRFMUFcdTdFQ0ZcdTUzODYvXHU2MjExXHU0RUVDXHU1MTZDXHU1M0Y4XHU3Njg0XHU0RjAxXHU0RTFBXHU2NTg3XHU1MzE2XHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RTFBXHU3RUNGXHU1Mzg2L1x1NjIxMVx1NEVFQ1x1NTE2Q1x1NTNGOFx1NzY4NFx1NjJEQlx1NEVCQVx1NjVCOVx1NUYwRlx1RkYwQ1x1NjcwOVx1NzBCOVx1NEUwRFx1NEUwMFx1NjgzN1x1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEUxQVx1N0VDRlx1NTM4Ni9cdTYyMTFcdTU3MjhcdTlDN0NcdTUzODJcdTc2ODRcdTVCOUVcdTRFNjBcdTc1MUZcdTZEM0IubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRFMUFcdTdFQ0ZcdTUzODYvXHU2MjExXHU1RjAwXHU0RTFBXHU0RTg2XHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU1MjFCXHU0RTFBXHU3RUNGXHU1Mzg2L1x1NkNBMVx1NEU4Qlx1NTIyQlx1NjBGM1x1NEUwRFx1NUYwMFx1NTNCQlx1NTIxQlx1NEUxQVx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NTIxQlx1NEUxQVx1N0VDRlx1NTM4Ni9cdTdGOEVcdTU5N0RcdTc2ODRcdTU0NjhcdTY3MkJcdUZGMENcdTUzQzhcdTY1MzlcdTRFODZcdTRFMDBcdTU5MjlCdWdcdTMwMDJcdTMwMDIubWRcIixcclxuICAgICAgXCJcdTUyMUJcdTRFMUFcdTdFQ0ZcdTUzODYvXHU5NzYyXHU0RTg2XHU0RTJBSmF2YVx1NUI5RVx1NEU2MFx1NzUxRlx1RkYwQ1x1NUMwRlx1NEYxOVx1NUY4OFx1NEYxOFx1NzlDMFx1RkYwMS5tZFwiLFxyXG5cclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzhcIixcclxuICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvMjAyMlx1RkYwQ1x1NTkyN1x1NUJCNlx1OEZDN1x1NUY5N1x1NjAwRVx1NEU0OFx1NjgzN1x1NTQ2Mlx1RkYxRi5tZFwiLFxyXG4gICAgICBcIlx1NzUxRlx1NkQzQlx1NjVFNVx1NUUzOC9cdTRGMTFcdTUwNDdcdTdFRDNcdTY3NUZcdUZGMENcdTVCOUFcdTRFMkFcdTY1QjBcdTc2RUVcdTY4MDdcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvXHU1MThEXHU4MDRBXHU4MDRBXHU4RkQ5XHU1NDY4XHU3Njg0XHU3MkI2XHU2MDAxLm1kXCIsXHJcbiAgICAgIFwiXHU3NTFGXHU2RDNCXHU2NUU1XHU1RTM4L1x1NTkyN1x1NUJCNlx1NEZERFx1OTFDRFx1NTU0QVx1MjAyNi5tZFwiLFxyXG4gICAgICBcIlx1NzUxRlx1NkQzQlx1NjVFNVx1NUUzOC9cdTVCRjlcdTRFMERcdThENzdcdUZGMENcdTYyMTFcdTRFMERcdTY2MkZcdTRFMDBcdTRFMkFcdTgxRUFcdTVGOEJcdTc2ODRcdTRFQkEubWRcIixcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvXHU1RjAwXHU1REU1XHU3QjJDXHU0RTAwXHU1OTI5XHVGRjBDXHU2MjExXHU1QkIzXHU2MDE1XHU0RTg2Lm1kXCIsXHJcbiAgICAgIFwiXHU3NTFGXHU2RDNCXHU2NUU1XHU1RTM4L1x1NjIxMVx1NjUzRVx1NTA0N1x1NTU2Nlx1RkYwMVx1OEZEOTIyXHU1OTI5XHU1RTcyXHU3MEI5XHU1NTY1XHU1NDYyLm1kXCIsXHJcbiAgICAgIFwiXHU3NTFGXHU2RDNCXHU2NUU1XHU1RTM4L1x1NjIxMVx1ODhBQlx1OTY5NFx1NzlCQlx1NEU4Nlx1RkYwMS5tZFwiLFxyXG4gICAgICBcIlx1NzUxRlx1NkQzQlx1NjVFNVx1NUUzOC9cdTYyMTFcdTk2MzNcdThGQzdcdTRFODZcdUZGMENcdTUyMkJcdTYyQzVcdTVGQzNcdUZGMDEubWRcIixcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvXHU2NUIwXHU1RTc0XHU3QjJDXHU0RTAwXHU1OTI5XHVGRjBDXHU2MjExXHU1QzMxXHU4NjhDXHU1N0UwXHU0RjRGXHU0RTg2XHVGRjAxLm1kXCIsXHJcbiAgICAgIFwiXHU3NTFGXHU2RDNCXHU2NUU1XHU1RTM4L1x1ODA0QVx1ODA0QVx1NjcwMFx1OEZEMVx1NzY4NFx1NzJCNlx1NjAwMVx1NTQyNy5tZFwiLFxyXG4gICAgICBcIlx1NzUxRlx1NkQzQlx1NjVFNVx1NUUzOC9cdTkwRkRcdThGRDlcdTRFMkFcdTcwQjlcdTUxM0ZcdTRFODZcdUZGMENcdThGRDlcdTVFMkVcdTRFQkFcdTdBREZcdTcxMzZcdTU3MjhcdTMwMDJcdTMwMDJcdTMwMDIubWRcIixcclxuICAgICAgXCJcdTc1MUZcdTZEM0JcdTY1RTVcdTVFMzgvXHU5NjhGXHU0RkJGXHU4MDRBXHU4MDRBLm1kXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsICJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBcIlwiLFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlx1NTE2NVx1OTVFOFx1NUZDNVx1NzcwQi1cdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NTE2NVx1OTVFOFx1NUZDNVx1NzcwQi1cdTVCNjZcdTRFNjBcdThERUZcdTdFQkYvXCJcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTVCNjZcdTRFNjBcdTYzMDdcdTUzNTdcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NUI2Nlx1NEU2MFx1NjMwN1x1NTM1Ny9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTVGMDBcdTUzRDFcdTdFQ0ZcdTlBOENcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NUYwMFx1NTNEMVx1N0VDRlx1OUE4Qy9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTZDNDJcdTgwNENcdTdFQ0ZcdTlBOENcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NkM0Mlx1ODA0Q1x1N0VDRlx1OUE4Qy9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTgwNENcdTU3M0FcdTdFQ0ZcdTlBOENcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1ODA0Q1x1NTczQVx1N0VDRlx1OUE4Qy9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUJcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQi9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTVCOUVcdTYyMThcdTY1NTlcdTdBMEJcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NUI5RVx1NjIxOFx1NjU1OVx1N0EwQi9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTk4NzlcdTc2RUVcdTY1NTlcdTdBMEJcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1OTg3OVx1NzZFRVx1NjU1OVx1N0EwQi9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTdGMTZcdTdBMEJcdThENDRcdTZFOTBcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1N0YxNlx1N0EwQlx1OEQ0NFx1NkU5MC9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTc5RDFcdTYyODBcdTc5RDFcdTY2NkVcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NzlEMVx1NjI4MFx1NzlEMVx1NjY2RS9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTUxNzZcdTRFRDZcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1NTE3Nlx1NEVENi9cIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIFwiXCIsXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiXHU3RUNGXHU1MTc4IEJ1ZyBcdTg5RTNcdTUxQjNcdTY1QjlcdTY4NDhcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTI0RFx1N0FFRlx1NjVFMFx1NkNENVx1NkI2M1x1Nzg2RVx1OEJGN1x1NkM0Mlx1NTQwRVx1N0FFRlx1NjNBNVx1NTNFM1x1NUU3Nlx1NUY5N1x1NTIzMFx1NTRDRFx1NUU5NFx1RkYxRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTI0RFx1N0FFRlx1Njg0Nlx1NjdCNlx1NTIxRFx1NTlDQlx1NTMxNlx1OTUxOVx1OEJFRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVx1NjVFMFx1NkNENVx1NkI2M1x1Nzg2RVx1NUI4OVx1ODhDNVx1NEY5RFx1OEQ1Nlx1RkYxRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVx1ODBGRFx1OEZEMFx1ODg0Q1x1RkYwQ1x1NEY0Nlx1NjcwOVx1NUY4OFx1NTkxQVx1OTUxOVx1OEJFRlx1NjNEMFx1NzkzQVx1NTQ4Q1x1NTQ0QVx1OEI2Nlx1RkYxRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NTQwRVx1N0FFRlx1OTg3OVx1NzZFRVx1NjVFMFx1NkNENVx1NkI2M1x1NUUzOFx1NTQyRlx1NTJBOFx1RkYwQ1x1NjIxNlx1NEY5RFx1OEQ1Nlx1NjcwRFx1NTJBMVx1OEZERVx1NjNBNVx1NTkzMVx1OEQyNVwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NjU3MFx1NjM2RVx1NjdFNVx1OEJFMlx1NEUzQVx1N0E3QVx1NjIxNlx1OTUxOVx1OEJFRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NjVFMFx1NkNENVx1NkI2M1x1NUUzOFx1NzY3Qlx1NUY1NVx1NjIxNlx1ODNCN1x1NTNENlx1NEUwRFx1NTIzMFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NjVFMFx1NkNENVx1OEJCRlx1OTVFRVx1N0VCRlx1NEUwQVx1NjcwRFx1NTJBMVwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1NjcyQ1x1NTczMFx1OTg3OVx1NzZFRVx1NEUwQVx1N0VCRlx1NTQwRVx1NTFGQVx1NzNCMFx1OTUxOVx1OEJFRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjMgIFx1OTg3OVx1NzZFRVx1NTQyRlx1NTJBOFx1NTkzMVx1OEQyNVwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjNcdUZGNUNcdTY1RTBcdTZDRDVcdTZCNjNcdTc4NkVcdThCQkZcdTk1RUVcdTUyMzBcdTk4NzVcdTk3NjJcdTYyMTZcdTUxRkFcdTczQjAgNDA0IFx1OTUxOVx1OEJFRlwiLFxyXG4gICAgICAgICAgICBcIlx1N0VDRlx1NTE3OCBCdWcgXHU4OUUzXHU1MUIzXHU2NUI5XHU2ODQ4L0J1ZyBcdTg5RTNcdTUxQjNcdUZGNUNcdTdFQzRcdTRFRjZcdTVFOTNcdTYyQTVcdTk1MTlcdTMwMDFcdTYyMTZcdTY4MzdcdTVGMEZcdTRFMjJcdTU5MzFcdTRFMERcdTc1MUZcdTY1NDhcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTg5RTNcdTUxQjMgQnVnIFx1NzY4NFx1NkQ0MVx1N0EwQlx1NTk1N1x1OERFRlwiLFxyXG4gICAgICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiXHU4OUUzXHU1MUIzIEJ1ZyBcdTc2ODRcdTZENDFcdTdBMEJcdTU5NTdcdThERUYvXHU1RTM4XHU4OUMxXHU1MTk5IEJ1ZyBcdTUzOUZcdTU2RTBcdTZDNDdcdTYwM0JcIixcclxuICAgICAgICAgICAgXCJcdTg5RTNcdTUxQjMgQnVnIFx1NzY4NFx1NkQ0MVx1N0EwQlx1NTk1N1x1OERFRi9cdTVFMzhcdTg5QzFcdThCRjdcdTZDNDJcdTk1MTlcdThCRUZcdTc4MDFcdTg5RTNcdTkxQ0FcdTUzQ0FcdTg5RTNcdTUxQjNcdTY1QjlcdTY4NDhcIixcclxuICAgICAgICAgICAgXCJcdTg5RTNcdTUxQjMgQnVnIFx1NzY4NFx1NkQ0MVx1N0EwQlx1NTk1N1x1OERFRi9cdTg5RTNcdTUxQjMgQnVnIFx1NzY4NFx1NkQ0MVx1N0EwQlx1NTk1N1x1OERFRlx1NjAzQlx1N0VEM1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5dO1xyXG4iLCAiaW1wb3J0IHtTaWRlYmFyQ29uZmlnNE11bHRpcGxlfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XHJcbmltcG9ydCBjb2RlTmF2U2lkZUJhciBmcm9tIFwiLi9zaWRlYmFycy9jb2RlTmF2U2lkZUJhclwiO1xyXG5pbXBvcnQga25vd2xlZGdlU2lkZUJhciBmcm9tIFwiLi9zaWRlYmFycy9rbm93bGVkZ2VTaWRlQmFyXCI7XHJcbmltcG9ydCByb2FkbWFwU2lkZUJhciBmcm9tIFwiLi9zaWRlYmFycy9yb2FkbWFwU2lkZUJhclwiO1xyXG5pbXBvcnQgcHJvamVjdFNpZGVCYXIgZnJvbSBcIi4vc2lkZWJhcnMvcHJvamVjdFNpZGVCYXJcIjtcclxuaW1wb3J0IHByb2R1Y3RTaWRlQmFyIGZyb20gXCIuL3NpZGViYXJzL3Byb2R1Y3RTaWRlQmFyXCI7XHJcbmltcG9ydCBzZWxmU3R1ZHlTaWRlQmFyIGZyb20gXCIuL3NpZGViYXJzL3NlbGZTdHVkeVNpZGVCYXJcIjtcclxuaW1wb3J0IHByb2dyYW1taW5nU2hhcmVTaWRlQmFyIGZyb20gXCIuL3NpZGViYXJzL3Byb2dyYW1taW5nU2hhcmVTaWRlQmFyXCI7XHJcbmltcG9ydCBidWdGaXhNYW51YWwgZnJvbSBcIi4vc2lkZWJhcnMvYnVnRml4TWFudWFsXCJcclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcIi9cdTVCNjZcdTRFNjBcdThERUZcdTdFQkYvXCI6IHJvYWRtYXBTaWRlQmFyLFxyXG4gICAgXCIvXHU4MUVBXHU1QjY2XHU0RTRCXHU4REVGL1wiOiBzZWxmU3R1ZHlTaWRlQmFyLFxyXG4gICAgXCIvXHU3RjE2XHU3QTBCXHU1MjA2XHU0RUFCL1wiOiBwcm9ncmFtbWluZ1NoYXJlU2lkZUJhcixcclxuICAgIFwiL1x1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOC9cIjogcHJvamVjdFNpZGVCYXIsXHJcbiAgICBcIi9cdTdGMTZcdTdBMEJcdTVCRkNcdTgyMkEvXCI6IGNvZGVOYXZTaWRlQmFyLFxyXG4gICAgXCIvXHU3N0U1XHU4QkM2XHU3ODhFXHU3MjQ3L1wiOiBrbm93bGVkZ2VTaWRlQmFyLFxyXG4gICAgXCIvQnVnXHU2MjRCXHU1MThDL1wiOiBidWdGaXhNYW51YWwsXHJcbiAgICBcIi9cdTRFQTdcdTU0QzFcdTY3MERcdTUyQTEvXCI6IHByb2R1Y3RTaWRlQmFyLFxyXG4gICAgXCIvXHU1MTczXHU0RThFXHU2MjExXHU0RUVDL1wiOiBbXCJcIiwgXCJcdTRFMkFcdTRFQkFcdTdFQ0ZcdTUzODZcIl0sXHJcbiAgICAvLyBcdTk2NERcdTdFQTdcdUZGMENcdTlFRDhcdThCQTRcdTY4MzlcdTYzNkVcdTY1ODdcdTdBRTBcdTY4MDdcdTk4OThcdTZFMzJcdTY3RDNcdTRGQTdcdThGQjlcdTY4MEZcclxuICAgIFwiL1wiOiBcImF1dG9cIixcclxufSBhcyBTaWRlYmFyQ29uZmlnNE11bHRpcGxlO1xyXG4iLCAiLyoqXHJcbiAqIFx1NUU5NVx1OTBFOFx1NzI0OFx1Njc0M1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGZyaWVuZExpbmtzOiBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlx1N0FEOVx1OTU3RiAtIFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRVwiLFxyXG4gICAgICAvLyBpY29uOiBcIi9pY29uL3VzZXIuc3ZnXCIsXHJcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly95dXl1YW53ZWIuZmVpc2h1LmNuL3dpa2kvQWJsZHc1V2tqaWR5U3hrS3hVMmNRZEF0bmFoXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJcdTlDN0NcdTlFMjJcdTdGNTFcdTdFRENcIixcclxuICAgICAgaHJlZjogXCJodHRwczovL3l1eXVhbndlYi5jb20vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJcdTgwMDFcdTlDN0NcdTdCODBcdTUzODZcIixcclxuICAgICAgaHJlZjogXCJodHRwczovL3d3dy5sYW95dWppYW5saS5jb20vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJcdTlDN0NcdTgwNkFcdTY2MEUgQUlcIixcclxuICAgICAgaHJlZjogXCJodHRwczovL3d3dy55dWNvbmdtaW5nLmNvbS9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFx1NTcwOFwiLFxyXG4gICAgICBocmVmOiBcImh0dHBzOi8veXV5dWFud2ViLmZlaXNodS5jbi93aWtpL1ZDMXF3bVg5ZGlDQksza2lkeWVjNzR2Rm5kZVwiLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNvcHlyaWdodDoge1xyXG4gICAgaHJlZjogXCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiLFxyXG4gICAgbmFtZTogXCJcdTZDQUFJQ1BcdTU5MDcxOTAyNjcwNlx1NTNGNy02XCIsXHJcbiAgfSxcclxufTtcclxuIiwgIi8qKlxyXG4gKiBcdTk4OURcdTU5MTZcdTUzRjNcdTRGQTdcdThGQjlcdTY4MEZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTYyNEJcdTY3M0FcdTc3MEJcIixcclxuICAgIGljb246IFwiL2ljb24vbW9iaWxlLnBuZ1wiLFxyXG4gICAgcG9wb3ZlclRpdGxlOiBcIlx1NUZBRVx1NEZFMVx1NjI2Qlx1NEUwMFx1NjI2QlwiLFxyXG4gICAgcG9wb3ZlclVybDpcclxuICAgICAgXCIvcXJjb2RlLWNvZGVmYXRoZXIucG5nXCIsXHJcbiAgICBwb3BvdmVyRGVzYzogXCJcdTUzRUZcdTRFRTVcdTYyNEJcdTY3M0FcdTc3MEJcdTYyMTZcdTUyMDZcdTRFQUJcdTgxRjNcdTY3MEJcdTUzQ0JcdTU3MDhcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjYxRlx1NzQwM1wiLFxyXG4gICAgaWNvbjogXCIvaWNvbi94aW5ncWl1LnBuZ1wiLFxyXG4gICAgcG9wb3ZlclRpdGxlOlxyXG4gICAgICAnPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MC44cmVtO2ZvbnQtd2VpZ2h0OmJvbGQ7XCI+PHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+XHU0RkREXHU1OUM2XHU3RUE3XHU1QjlFXHU2MjE4XHU5ODc5XHU3NkVFXHU2NTU5XHU3QTBCPC9zcGFuPlx1MzAwMVx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFx1NjMwN1x1NTM1N1x1MzAwMVx1NUI2Nlx1NEU2MFx1OEQ0NFx1NkU5MFx1MzAwMVx1NkM0Mlx1ODA0Q1x1NjMwN1x1NTM1N1x1MzAwMVx1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQlx1MzAwMVx1N0YxNlx1N0EwQlx1NEVBNFx1NkQ0MTwvc3Bhbj4nLFxyXG4gICAgcG9wb3ZlclVybDpcclxuICAgICAgXCIvcXJjb2RlLWNvZGVuYXYucG5nXCIsXHJcbiAgICBwb3BvdmVyRGVzYzogXCJcdTc3RTVcdThCQzZcdTY2MUZcdTc0MDNcdUZGMUFcdTdGMTZcdTdBMEJcdTVCRkNcdTgyMkFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NEVBNFx1NkQ0MVx1N0ZBNFwiLFxyXG4gICAgaWNvbjogXCIvaWNvbi93ZWl4aW4ucG5nXCIsXHJcbiAgICBwb3BvdmVyVGl0bGU6XHJcbiAgICAgICc8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTowLjhyZW07Zm9udC13ZWlnaHQ6Ym9sZDtcIj5cdTYyNkJcdTc4MDFcdTZERkJcdTUyQTAgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+XHU3RjE2XHU3QTBCXHU1QkZDXHU4MjJBXHU1QzBGXHU1MkE5XHU2MjRCXHU1RkFFXHU0RkUxPC9zcGFuPlx1RkYwQ1x1NjJDOVx1NEY2MFx1OEZEQlx1NEUxM1x1NUM1RVx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFx1NEVBNFx1NkQ0MVx1N0ZBNDwvc3Bhbj4nLFxyXG4gICAgcG9wb3ZlclVybDpcclxuICAgICAgXCIvcXJjb2RlLWNvZGVuYXZoZWxwZXIucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTRFMEJcdThENDRcdTY1OTlcIixcclxuICAgIGljb246IFwiL2ljb24veGlhemFpLnBuZ1wiLFxyXG4gICAgcG9wb3ZlclRpdGxlOlxyXG4gICAgICAnPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MC44cmVtO2ZvbnQtd2VpZ2h0OmJvbGQ7XCI+XHU2MjZCXHU3ODAxXHU1MTczXHU2Q0U4XHU3QUQ5XHU5NTdGXHU1MTZDXHU0RjE3XHU1M0Y3XHVGRjBDXHU1NkRFXHU1OTBEIDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkO1wiPlx1NUI2Nlx1NEU2MDwvc3Bhbj4gXHU4M0I3XHU1M0Q2XHU2RDc3XHU5MUNGXHU3RjE2XHU3QTBCXHU1QjY2XHU0RTYwXHU4RDQ0XHU2RTkwXHUzMDBDXHU2NUUwXHU0RUZCXHU0RjU1XHU1OTU3XHU4REVGXHUzMDBEPC9zcGFuPicsXHJcbiAgICBwb3BvdmVyVXJsOlxyXG4gICAgICBcIi9xcmNvZGUtbXBjb2Rlcl95dXBpLmpwZ1wiLFxyXG4gICAgcG9wb3ZlckRlc2M6IFwiXHU1MTZDXHU0RjE3XHU1M0Y3OiBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjUyRlx1NjMwMVx1NjIxMVwiLFxyXG4gICAgaWNvbjogXCIvaWNvbi9kaWFuemFuLnBuZ1wiLFxyXG4gICAgcG9wb3ZlclRpdGxlOlxyXG4gICAgICAnIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjAuOHJlbTtmb250LXdlaWdodDpib2xkO1wiPlx1OUYxM1x1NTJCMVx1NTQ4Q1x1OEQ1RVx1OEQ0Rlx1NjIxMTwvc3Bhbj4nLFxyXG4gICAgcG9wb3ZlclVybDpcclxuICAgICAgXCIvcXJjb2RlLXRodW1iLmpwZ1wiLFxyXG4gICAgcG9wb3ZlckRlc2M6XHJcbiAgICAgIFwiXHU2MTFGXHU4QzIyXHU2MEE4XHU3Njg0XHU2NTJGXHU2MzAxXHVGRjBDXHU0RjVDXHU4MDA1XHU1OTM0XHU1M0QxKytcIixcclxuICB9LFxyXG5dO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7OztBQ0VBLElBQU8saUJBQVE7QUFBQSxFQUNYO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUVWO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUVWO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTs7O0FDYmQsSUFBTyx5QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUEsRUFHSjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ047QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0o7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVUsQ0FBQyw2QkFBUyxxREFBYTtBQUFBO0FBQUEsRUFFbkM7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVUsQ0FBQztBQUFBO0FBQUEsRUFFYjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVSxDQUFDO0FBQUE7QUFBQSxFQUViO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVLENBQUMsNkJBQVM7QUFBQTtBQUFBLEVBRXRCO0FBQUEsRUFDQTtBQUFBOzs7QUN6REYsSUFBTywyQkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNDO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUE7OztBQ2hITixJQUFPLHlCQUFRO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FDaEJaLElBQU8seUJBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FDakJOLElBQU8seUJBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQSxFQUdKO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FDbEJOLElBQU8sMkJBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQSxFQUdKO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQSxFQUdKO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUEsRUFHSjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLEVBR0o7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUEsRUFJSjtBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUE7OztBQ25HTixJQUFPLGtDQUFRO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUE7QUFBQTtBQUFBOzs7QUM1RVosSUFBTyx1QkFBUTtBQUFBLEVBQ1g7QUFBQSxFQUNBO0FBQUEsSUFDSSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLEVBR1I7QUFBQSxJQUNJLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUE7OztBQ2hCWixJQUFPLGtCQUFRO0FBQUEsRUFDWCw4QkFBVTtBQUFBLEVBQ1YsOEJBQVU7QUFBQSxFQUNWLDhCQUFVO0FBQUEsRUFDViw4QkFBVTtBQUFBLEVBQ1YsOEJBQVU7QUFBQSxFQUNWLDhCQUFVO0FBQUEsRUFDVixxQkFBVztBQUFBLEVBQ1gsOEJBQVU7QUFBQSxFQUNWLDhCQUFVLENBQUMsSUFBSTtBQUFBLEVBRWYsS0FBSztBQUFBOzs7QUNsQlQsSUFBTyxpQkFBUTtBQUFBLEVBQ2IsYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUVQLE1BQU07QUFBQTtBQUFBLElBRVI7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBLElBRVI7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBLElBRVI7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBLElBRVI7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFHVixXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTs7O0FDMUJWLElBQU8sdUJBQVE7QUFBQSxFQUNiO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxZQUNFO0FBQUEsSUFDRixhQUFhO0FBQUE7QUFBQSxFQUVmO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUNFO0FBQUEsSUFDRixZQUNFO0FBQUEsSUFDRixhQUFhO0FBQUE7QUFBQSxFQUVmO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUNFO0FBQUEsSUFDRixZQUNFO0FBQUE7QUFBQSxFQUVKO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUNFO0FBQUEsSUFDRixZQUNFO0FBQUEsSUFDRixhQUFhO0FBQUE7QUFBQSxFQUVmO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUNFO0FBQUEsSUFDRixZQUNFO0FBQUEsSUFDRixhQUNFO0FBQUE7QUFBQTs7O0FaeENOLElBQU0sU0FBUztBQUNmLElBQU0sU0FBUztBQUNmLElBQU0sT0FBTyxDQUFDLHNCQUFPLGdCQUFNO0FBRTNCLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUVOLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxJQUVKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNO0FBQUEsSUFFOUI7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FDRTtBQUFBO0FBQUE7QUFBQSxJQUlOO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVdKLFdBQVc7QUFBQSxFQUdYLGlCQUFpQixDQUFDLGtCQUFrQjtBQUFBLEVBQ3BDLFVBQVU7QUFBQSxJQUVSLGFBQWE7QUFBQSxJQUViLGdCQUFnQixDQUFDLE1BQU0sTUFBTSxNQUFNLE1BQU07QUFBQTtBQUFBLEVBRzNDLFNBQVM7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUVEO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQTtBQUFBO0FBQUEsSUFHUixDQUFDO0FBQUEsSUFFRDtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxXQUFXLENBQUMsR0FBRyxVQUFVLE1BQU07QUFBQSxRQUMvQixPQUFPLENBQUMsVUFBVSxNQUFNO0FBQUEsUUFDeEIsYUFBYSxDQUFDLFVBQ1osTUFBTSxZQUFZLGVBQWUsTUFBTTtBQUFBLFFBQ3pDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsTUFBTSxZQUFZLFVBQVU7QUFBQSxRQUNsRCxNQUFNLENBQUMsVUFBVSxNQUFNLFlBQVksUUFBUTtBQUFBLFFBQzNDLE1BQU0sQ0FBQyxVQUFVO0FBQUEsUUFDakIsS0FBSyxDQUFDLEdBQUcsT0FBTyxTQUNiLE9BQU0sWUFBWSxVQUFVLFVBQVUsTUFBTTtBQUFBLFFBQy9DLE9BQU8sQ0FBQyxPQUFPLFVBQ2IsTUFBTSxZQUFZLFNBQ2hCLE9BQU0sWUFBWSxVQUNsQixDQUFDLE1BQU0sWUFBWSxNQUFNLFdBQVcsV0FDcEMsTUFBTSxNQUFNLFlBQVk7QUFBQSxRQUM1QixhQUFhLENBQUMsVUFDWixNQUFNLFlBQVksUUFBUSxJQUFJLEtBQUssTUFBTSxZQUFZO0FBQUEsUUFDdkQsWUFBWSxDQUFDLFVBQVUsTUFBTSxlQUFlLElBQUksS0FBSyxNQUFNO0FBQUE7QUFBQTtBQUFBLElBSS9EO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLFVBQVU7QUFBQTtBQUFBO0FBQUEsSUFJZCxDQUFDO0FBQUEsSUFFRCxDQUFDO0FBQUEsSUFFRDtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxhQUFhO0FBQUE7QUFBQTtBQUFBLElBSWpCO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLGdCQUFnQjtBQUFBLFFBQ2hCLE9BQU87QUFBQSxRQUVQLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxJQUl2QixDQUFDO0FBQUE7QUFBQSxFQUdILGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFHYixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFHWixXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsSUFJZDtBQUFBLElBRUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
