/**
 * name: learning-vue3
 * description: A starting learning tutorial on Vue 3.0 + TypeScript, suitable for complete Vue novices and Vue 2.0 veterans, incorporating some of my own practical experience on the basis of official documents.
 * author: chengpeiquan
 * homepage: https://vue3.chengpeiquan.com/
 */
import{_ as h,r as o,o as l,c as u,a as n,w as i,b as e,F as p,d as t,e as c}from"./app.0c7b3152.js";const g={},f=e("h1",{id:"\u524D\u8A00",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),t(" \u524D\u8A00")],-1),m=e("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5173\u4E8E Vue 3.0 + TypeScript \u7684\u8D77\u6B65\u5B66\u4E60\u6559\u7A0B\uFF0C\u9002\u5408\u5B8C\u5168\u7684 Vue \u65B0\u624B\u548C Vue 2.0 \u7684\u8001\u624B\uFF0C\u5728\u5B98\u65B9\u6587\u6863\u7684\u57FA\u7840\u4E0A\u878D\u5165\u81EA\u5DF1\u7684\u4E00\u4E9B\u5B9E\u8DF5\u7ECF\u9A8C\u3002",-1),x=e("h2",{id:"\u7F16\u5199\u539F\u56E0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7F16\u5199\u539F\u56E0","aria-hidden":"true"},"#"),t(" \u7F16\u5199\u539F\u56E0")],-1),V=e("p",null,"\u867D\u7136\u5F88\u4E45\u4E4B\u524D\u5C31\u77E5\u9053 Vue 3.0 \u7684\u5F00\u53D1\u52A8\u6001\uFF0C\u4F46\u53EA\u57FA\u4E8E Beta \u7248\u672C\u5199\u4E86\u51E0\u4E2A demo \u4F53\u9A8C\u4E86\u4E00\u4E0B Composition API \uFF0C\u4F46\u7531\u4E8E\u5F53\u65F6\u8D44\u6599\u592A\u5C11\uFF08\u82F1\u6587\u8D44\u6599\u4E5F\u5F88\u5C11\uFF09\uFF0C\u8FD8\u662F\u61F5\u61F5\u61C2\u61C2\uFF0C\u6240\u4EE5\u5F88\u957F\u65F6\u95F4\u90FD\u5904\u4E8E\u4FDD\u5B88\u89C2\u671B\u7684\u72B6\u6001\u3002",-1),b=t("\u76F4\u5230 2020 \u5E74 9 \u6708\u4EFD\u4E2D\u65EC\uFF0C\u968F\u7740\u6D77\u8D3C\u738B\u7248\u672C\uFF08"),k={href:"https://github.com/vuejs/vue-next/releases/tag/v3.0.0",target:"_blank",rel:"noopener noreferrer"},v=t("v3.0.0 One Piece"),E=t("\uFF09\u7684\u6B63\u5F0F\u53D1\u5E03\uFF0C\u4E5F\u6709\u4E86\u76F8\u5173\u751F\u6001\uFF08Vue / Router / Vuex \u7B49\u7B49\uFF09\u7684\u82F1\u6587\u5B98\u7F51\uFF0C\u89C9\u5F97\u662F\u65F6\u5019\u6B63\u5F0F\u7528\u4E00\u4E0B 3.0 \u4E86\uFF0C\u521A\u597D\u624B\u91CC\u6709\u4E00\u4E2A\u5DE5\u671F\u4E0D\u662F\u5F88\u7D27\u7684\u9879\u76EE\uFF0C\u5C31\u5F00\u59CB\u5C1D\u8BD5\u6B63\u5F0F\u7528 Vue 3.0 + TypeScript \u6765\u5199\u4E1A\u52A1\u3002"),y=e("p",null,"\u6BD5\u7ADF\uFF0C\u4E0A\u624B\u4E00\u4E2A\u65B0\u6280\u672F\u6808\u6700\u5FEB\u7684\u65B9\u6CD5\uFF0C\u5C31\u662F\u4E00\u8FB9 Reading \u4E00\u8FB9 Coding \u3002",-1),S=e("p",null,"\u5728\u5F00\u8352\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u73B0\u4ECE\u6D4B\u8BD5\u5230\u6B63\u5F0F\u7248\u672C\u53D8\u5316\u8FD8\u662F\u5F88\u5927\uFF0C\u5F88\u591A\u8FC7\u5F80\u7684\u535A\u6587\u5DF2\u7ECF\u5BF9\u4E0D\u4E0A\u4E86\uFF0C\u8FD8\u662F\u8E29\u4E86\u4E0D\u5C11\u5751\uFF0C\u6240\u4EE5\u5728\u5F00\u8352\u8FC7\u7A0B\u4E2D\u81EA\u5DF1\u4E5F\u6253\u4E86\u4E0D\u5C11\u7B14\u8BB0\uFF0C\u514D\u5F97\u4EE5\u540E\u81EA\u5DF1\u9047\u5230\u95EE\u9898\u5FD8\u8BB0\u600E\u4E48\u5904\u7406\uFF0C\u6162\u6162\u7684\u5C31\u6574\u7406\u6210\u4E86\u8FD9\u672C\u6559\u7A0B\uFF0C\u4E5F\u53EF\u4EE5\u4F9B\u9700\u8981\u7684\u670B\u53CB\u67E5\u9605\u3002",-1),T=e("p",null,"\u5230\u73B0\u5728\uFF0C\u81EA\u5DF1\u56E2\u961F\u91CC\u7684\u65B0\u9879\u76EE\u4E5F\u90FD\u9ED8\u8BA4\u4F7F\u7528 Vue 3 + TypeScript \u6765\u5F00\u53D1\u4E86\uFF0C\u4E0D\u8BBA\u662F\u5355\u4EBA\u8D1F\u8D23\u7684\u5C0F\u9879\u76EE\u8FD8\u662F\u591A\u4EBA\u534F\u4F5C\uFF0C\u5F00\u53D1\u8FC7\u7A0B\u90FD\u611F\u89C9\u5F88\u8212\u670D\uFF01",-1),A=e("h2",{id:"\u5B98\u65B9\u8D44\u6599",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B98\u65B9\u8D44\u6599","aria-hidden":"true"},"#"),t(" \u5B98\u65B9\u8D44\u6599")],-1),B=e("p",null,"\u5F00\u59CB\u51C6\u5907\u5199\u8FD9\u4E2A\u680F\u76EE\u7684\u65F6\u5019\uFF0C\u5927\u6982\u662F 2020 \u5E74 10 \u6708\u5E95\uFF0C\u5F53\u65F6 Vue 3.0 \u548C\u65B0\u7248 Router \u3001\u65B0\u7248 Vuex \u7684\u5B98\u7F51\u90FD\u6CA1\u6709\u4E2D\u6587\u7248\uFF0C\u4E00\u8FB9\u770B\u82F1\u6587\u6587\u6863\u4E00\u8FB9\u5BF9\u7740\u7FFB\u8BD1\u8E29\u5751\uFF0C\u5F88\u591A\u95EE\u9898\u4E5F\u53EA\u80FD\u5728 GitHub Issue \u6216\u8005 StackOverflow \u67E5\u9605\u82F1\u6587\u95EE\u7B54\uFF0C\u8BF4\u5B9E\u8BDD\u633A\u7D2F\u7684\uFF0C\u4E0D\u8FC7\u8FD8\u597D\u540E\u6765\u4E2D\u6587\u7248\u5B98\u7F51\u4E5F\u9646\u7EED\u51FA\u6765\u4E86\uFF0C\u540E\u9762\u90A3\u9636\u6BB5\u5C31\u8212\u670D\u4E86\u4E0D\u5C11\uFF0C\u4F46\u5F88\u591A\u5B9E\u6218\u4E2D\u9047\u5230\u7684\u95EE\u9898\u8FD8\u662F\u9700\u8981\u53BB Google \u3002",-1),I=e("p",null,"\u672C\u6587\u6863\u6709\u6C47\u603B\u4E86 Vue 3.0 \u76F8\u5173\u7684\u5B98\u65B9\u6587\u6863\u7684\u5165\u53E3\uFF0C\u53EF\u968F\u65F6\u6253\u5F00\u5B98\u7F51\u67E5\u9605\u3002",-1),C=t("\u70B9\u51FB\u67E5\u770B\uFF1A"),w=t("Vue 3.0\u7CFB\u5217\u76F8\u5173\u5B98\u65B9\u6587\u6863"),O=c('<h2 id="\u6559\u7A0B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6559\u7A0B\u8BF4\u660E" aria-hidden="true">#</a> \u6559\u7A0B\u8BF4\u660E</h2><p>\u5F00\u59CB\u6267\u7B14\u7684\u65F6\u5019\u5C31\u6CA1\u6709\u6253\u7B97\u76F4\u8BD1\u6216\u8005\u7167\u642C\u5B98\u65B9\u7684\u5404\u79CD\u8D44\u6599\uFF08\u5C3D\u7BA1\u5F53\u65F6\u786E\u5B9E\u5F88\u7A00\u7F3A\uFF09\uFF0C\u4E5F\u6CA1\u6709\u6253\u7B97\u7528\u4E00\u4E2A\u6C47\u603B\u7684\u7BC7\u5E45\u6765\u603B\u7ED3\u7248\u672C\u5347\u7EA7\u5E26\u6765\u7684\u5404\u79CD\u53D8\u5316\uFF0C\u56E0\u4E3A\u5F88\u591A\u4EBA\u5199\u4E86\u6C47\u603B\u6587\u7AE0\u4E86\uFF0C\u800C\u4E14\u6211\u89C9\u5F97\u90A3\u6837\u4E00\u6B21\u6027\u770B\u5B8C\u5B9E\u9645\u4E0A\u4E5F\u8BB0\u4E0D\u592A\u4F4F\u3002</p><p>\u6211\u4E3B\u8981\u662F<strong>\u8BB0\u5F55\u4E00\u4E9B\u5728\u6784\u5EFA\u9879\u76EE\u8FC7\u7A0B\u4E2D\u7684\u95EE\u9898\u70B9\u548C\u89E3\u51B3\u65B9\u6848\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u8E29\u5751\u7684\u5730\u65B9</strong>\uFF0C\u867D\u7136\u5B98\u65B9\u8BF4\u80FD\u591F\u5E73\u6ED1\u5347\u7EA7\uFF0C\u4F46\u5728 Coding \u7684\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u95EE\u9898\u8FD8\u662F\u4E0D\u5C11\uFF0C\u671F\u95F4\u9646\u9646\u7EED\u7EED\u6253\u4E86\u4E00\u5806\u7B14\u8BB0\u548C\u4EE3\u7801\u7247\u6BB5\uFF0C\u4F46\u96F6\u96F6\u6563\u6563\u7684\uFF0C\u501F\u6B64\u673A\u4F1A\u6574\u7406\u8D77\u6765\uFF0C<strong>\u7136\u540E\u5728\u5408\u9002\u7684\u5730\u65B9\u548C 2.x \u7248\u672C\u505A\u4E00\u4E0B\u5BF9\u6BD4</strong>\uFF0C\u8FD9\u6837\u7684\u5B66\u4E60\u6548\u679C\u6211\u611F\u89C9\u4F1A\u66F4\u597D\uFF0C\u8BB0\u5FC6\u66F4\u6DF1\u523B\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5BF9\u4E8E\u90A3\u4E9B\u4ECE 2.x \u5347\u7EA7\u5230 3.x \u7136\u540E\u6539\u53D8\u5F88\u5927\u7684\u7AE0\u8282\uFF0C\u6211\u4F1A\u5728\u4FA7\u8FB9\u680F\u6DFB\u52A0<i class="sidebar__icon--default sidebar__icon--new"></i>\u56FE\u6807\uFF0C\u5982\u679C\u5BF9 2.x \u7248\u672C\u5DF2\u7ECF\u5F88\u719F\u6089\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u9488\u5BF9\u5E26\u6709<i class="sidebar__icon--default sidebar__icon--new"></i>\u56FE\u6807\u7684\u5730\u65B9\u5355\u72EC\u67E5\u9605\u3002</p><p>\u6CE8\uFF1A\u5F53<i class="sidebar__icon--default sidebar__icon--new"></i>\u51FA\u73B0\u5728\u4E8C\u7EA7\u6807\u9898\u65F6\uFF0C\u8BF4\u660E\u8FD9\u4E00\u8282\u90FD\u662F\u65B0\u7684\uFF0C\u5982\u679C\u53EA\u51FA\u73B0\u5728\u4E09\u7EA7\u6807\u9898\uFF0C\u8BF4\u660E\u53EA\u6709\u90A3\u4E00\u5C0F\u90E8\u5206\u53D8\u5316\u6BD4\u8F83\u5927\u3002</p></div><p>\u53E6\u5916\uFF0C 3.x \u7684\u4F18\u52BF\u5176\u5B9E\u662F\u5BF9 TypeScript \u66F4\u5B8C\u5584\u7684\u652F\u6301\uFF0C\u6240\u4EE5\u4ECE 3.x \u5F00\u59CB\u6211\u5C31\u76F4\u63A5\u5199 TS \u4E86\uFF0C\u867D\u7136\u8BF4\u4E5F\u662F\u5728\u5165\u95E8\uFF0C\u4F46\u4EE3\u7801\u8FD9\u4E1C\u897F\uFF0C\u5149\u770B\u6587\u6863\u4E5F\u662F\u618B\u5F97\u614C\uFF0C\u8FD8\u662F\u5F97\u591A\u5199\u591A\u7EC3\u624D\u80FD\u719F\u6089\u7684\u5FEB\uFF01</p>',5),R=t("\u63A8\u8350\u4E00\u672C\u6211\u81EA\u5DF1\u6709\u5728\u770B\u7684\u4E66\uFF1A"),q={href:"https://jkchao.github.io/typescript-book-chinese/",target:"_blank",rel:"noopener noreferrer"},L=t("\u300A\u6DF1\u5165\u7406\u89E3TypeScript\u300B"),j=t(" \uFF0C\u6211\u81EA\u5DF1\u662F\u5728\u4EAC\u4E1C\u6253\u6298\u7684\u65F6\u5019\u4E70\u7684\u7EB8\u8D28\u4E66\uFF0C\u4E0D\u8FC7\u4E5F\u6709\u4E2A\u5728\u7EBF\u7248\uFF0C\u53EF\u4EE5\u8FDB\u884C\u5728\u7EBF\u67E5\u9605\u3002"),G=t("\u5728\u62D3\u5C55\u9605\u8BFB\u7684 "),M=t("\u6559\u7A0B\u5DE5\u5177"),N=t(" \u4E00\u8282\u91CC\uFF0C\u6211\u4E5F\u653E\u4E86\u4E00\u4E9B\u76F8\u5173\u7684\u62D3\u5C55\u8D44\u6E90\u6587\u6863\uFF0C\u6709\u9700\u8981\u7684\u8BDD\u4E5F\u53EF\u4EE5\u67E5\u9605\u3002"),P=c('<h2 id="\u5B66\u4E60\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60\u987A\u5E8F" aria-hidden="true">#</a> \u5B66\u4E60\u987A\u5E8F</h2><p>Vue \u672C\u8EAB\u662F\u4E2A \u201C\u6E10\u8FDB\u5F0F\u201D \u7684\u6846\u67B6\uFF0C\u5B83\u53EF\u4EE5\u53EA\u7528\u6700\u57FA\u7840\u7684\u7EC4\u4EF6\u6765\u5F00\u53D1\u4E00\u4E2A\u5C0F\u9879\u76EE\uFF0C\u4E5F\u53EF\u4EE5\u628A\u76F8\u5173\u751F\u6001\u5F15\u5165\u8FDB\u6765\u7EC4\u5408\u6210\u4E00\u4E2A\u5927\u9879\u76EE\uFF08 e.g. Router \u3001 Vuex \u3001 Pinia \u2026 \uFF09\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u6559\u7A0B\u4E5F\u662F\u4E00\u4E2A \u201C\u6E10\u8FDB\u5F0F\u201D \u7684\u6559\u7A0B\uFF0C\u4F60\u53EF\u4EE5\u4ECE\u5934\u4E00\u6B65\u6B65\u7684\u770B\u8D77\uFF0C\u4E5F\u53EF\u4EE5\u5728\u9047\u5230\u5177\u4F53\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u53EA\u770B\u5BF9\u5E94\u7684\u90E8\u5206\u5185\u5BB9\u3002</p><p>\u5982\u679C\u662F\u4ECE\u5934\u770B\u7684\u8BDD\uFF0C\u63A8\u8350\u6309\u7167\u4FA7\u8FB9\u680F\u7684\u987A\u5E8F\u6765\u5B66\uFF0C\u57FA\u672C\u4E0A\u5C31\u662F\u4E00\u4E2A\u9879\u76EE\u5728\u642D\u5EFA\u8FC7\u7A0B\u4E2D\u7684\u4E00\u4E2A\u5F00\u53D1\u987A\u5E8F\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u54EA\u91CC\uFF0C\u5C31\u5728 demo \u91CC\u628A\u90A3\u90E8\u5206\u7684\u4EE3\u7801\u6572\u4E00\u904D\uFF0C\u770B\u770B\u662F\u5426\u80FD\u591F\u6210\u529F\u5B9E\u73B0\uFF0C\u5982\u679C OK \u4E86\uFF0C\u5C31\u53EF\u4EE5\u7EE7\u7EED\u4E0B\u4E00\u5C0F\u8282\u3002</p><p>\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u672C\u8EAB\u5DF2\u7ECF\u6709 Vue 2 \u7684\u57FA\u7840\uFF0C\u66F4\u597D\u7684\u5B66\u4E60\u65B9\u6CD5\u5C31\u662F\u62FF\u4E00\u4E2A\u7B80\u5355\u70B9\u7684\u57FA\u4E8E Vue 2 \u7684\u8001\u9879\u76EE\uFF0C\u6BD4\u5982\u4E00\u4E2A\u6D3B\u52A8\u9875\u9762\uFF0C\u6216\u8005\u4E00\u4E2A\u5C0F\u5DE5\u5177\uFF0C\u7B80\u7B80\u5355\u5355\u7684\u5C0F\u9879\u76EE\u5C31\u53EF\u4EE5\uFF0C\u7528 Vue 3 \u7684\u65B9\u6CD5\u5B9E\u73B0\u4E00\u904D\uFF0C\u770B\u770B\u80FD\u5426\u8FD8\u539F\u51FA\u539F\u6765\u7684\u529F\u80FD\u3002</p><p>\u5C31\u50CF\u6211\u4E4B\u524D\u521A\u5B66 Vue \u7684\u65F6\u5019\uFF0C\u521A\u4ECE jQuery \u8FD9\u79CD\u64CD\u4F5C DOM \u7684\u5F00\u53D1\u6A21\u5F0F\uFF0C\u7A81\u7136\u53D8\u6210\u4E86 MVVM \uFF0C\u4E0D\u4E60\u60EF\uFF0C\u4E0D\u77E5\u9053\u600E\u4E48\u5165\u624B\uFF0C\u4E5F\u662F\u62FF\u4E86\u4E00\u4E2A\u4EE5\u524D\u7684 jQuery \u9879\u76EE\uFF0C\u7528 Vue \u5B9E\u73B0\uFF0C\u5148\u628A <code>data</code> \u3001 <code>method</code> \u3001 <code>router</code> \uFF0C\u8FD8\u6709\u751F\u547D\u5468\u671F\u641E\u6E05\u695A\uFF0C\u57FA\u672C\u4E0A\u505A\u505A\u666E\u901A\u7684\u9879\u76EE\u5C31\u6CA1\u5565\u95EE\u9898\u4E86\u3002</p><h2 id="\u7591\u60D1\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u7591\u60D1\u89E3\u7B54" aria-hidden="true">#</a> \u7591\u60D1\u89E3\u7B54</h2><p>\u8FD9\u662F\u6211\u7B2C\u4E00\u6B21\u5199\u6B64\u7C7B\u6587\u7AE0\uFF0C\u5982\u679C\u6709\u4EC0\u4E48\u6211\u6CA1\u8BF4\u6E05\u695A\uFF0C\u6216\u8005\u6709\u8BEF\u7684\uFF0C\u8F9B\u82E6\u5E2E\u5FD9\u63D0\u51FA\u6765\uFF0C\u6587\u7AE0\u6700\u540E\u90FD\u6DFB\u52A0\u4E86\u8BC4\u8BBA\u529F\u80FD\uFF0C\u5173\u8054\u5230\u4ED3\u5E93\u7684 issue\uFF0C\u76F4\u63A5\u63D0\u4EA4\u8BC4\u8BBA\u6216\u8005\u5230\u4ED3\u5E93\u91CC\u63D0 issue / discussions \u90FD\u53EF\u4EE5\u3002</p><p>\u4E5F\u53EF\u4EE5\u7ED9\u6211\u53D1\u9001\u90AE\u4EF6 chengpeiquan@chengpeiquan.com</p>',8),F=t("\u5982\u679C\u89C9\u5F97\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C"),Q={href:"https://github.com/chengpeiquan/learning-vue3",target:"_blank",rel:"noopener noreferrer"},W=t("\u6B22\u8FCE\u5230\u4ED3\u5E93\u7ED9\u4E2A Star \u9F13\u52B1"),D=t("\u3002"),H=e("h2",{id:"\u7248\u6743\u8BB8\u53EF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7248\u6743\u8BB8\u53EF","aria-hidden":"true"},"#"),t(" \u7248\u6743\u8BB8\u53EF")],-1),K=t("MIT License \xA9 2020 "),z={href:"https://github.com/chengpeiquan",target:"_blank",rel:"noopener noreferrer"},J=t("chengpeiquan");function U(X,Y){const d=o("ImgWrap"),a=o("ClientOnly"),s=o("ExternalLinkIcon"),r=o("RouterLink"),_=o("GoogleAdsense");return l(),u(p,null,[f,m,n(a,null,{default:i(()=>[n(d,{src:"/assets/img/vue3.png"})]),_:1}),x,V,e("p",null,[b,e("a",k,[v,n(s)]),E]),y,S,T,A,B,I,e("p",null,[C,n(r,{to:"/links.html#%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3"},{default:i(()=>[w]),_:1})]),O,e("p",null,[R,e("a",q,[L,n(s)]),j]),e("p",null,[G,n(r,{to:"/links.html#%E6%95%99%E7%A8%8B%E5%B7%A5%E5%85%B7"},{default:i(()=>[M]),_:1}),N]),P,e("p",null,[F,e("a",Q,[W,n(s)]),D]),H,e("p",null,[K,e("a",z,[J,n(s)])]),n(a,null,{default:i(()=>[n(_)]),_:1})],64)}var $=h(g,[["render",U],["__file","index.html.vue"]]);export{$ as default};