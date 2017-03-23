<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
        <div class="menudiv2">
          <ul>
            <li>
              <router-link :to="{name:'detail',params:{type:type,text:title}}">
                <span class="on">
                  首页
                </span>
              </router-link>
            </li>
            <li>
          <router-link :to="{name:'record',params:{type:type,text:title}}">
                <span class="">
                  记录
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'model',params:{title:title}}">
                <span class="">
                  模式
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'helper',params:{title:title}}">
                <span class="">
                  规则
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'statics',params:{title:title}}">
                <span class="">
                  统计
                </span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'trend',params:{title:title}}">
                <span class="">
                  走势
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="moddiv">
            <div class="content">
                <div class="menu">
                    <ul>
                        <input type="hidden" id="hidTimes" value="1">
                        <li style="width: 100%">
                            <div>
                                <button class="tzms" @click="useModelEvent(2)">单</button>
                                <button class="tzms" @click="useModelEvent(1)">双</button>
                                <button class="tzms" @click="useModelEvent(4)">大</button>
                                <button class="tzms" @click="useModelEvent(3)">小</button>
                                <button class="tzms" @click="useModelEvent(5)">中</button>
                                <button class="tzms" @click="useModelEvent(6)">边</button>
                            </div>
                            <div>
                            </div>
                        </li>
                        <li style="width: 100%">
                            <div>
                                <button class="tzms" @click="chgAllRateEvent(0.5)">0.5倍</button>
                                <button class="tzms" @click="chgAllRateEvent(1.5)">1.5倍</button>
                                <button class="tzms" @click="chgAllRateEvent(2)">2倍</button>
                                <button class="tzms" @click="chgAllRateEvent(5)">5倍</button>
                                <button class="tzms" @click="chgAllRateEvent(10)">10倍</button>
                                <button class="tzms" @click="chgAllRateEvent(100)">100倍</button>
                            </div>
                        </li>
                        <li style="width: 100%">
                            <div>
                                <button class="tzms ora" @click="useModelEvent(0)">全包</button>
                                <button class="tzms ora" href="javascript:useSuoha();">梭哈</button>
                                <button class="tzms ora" href="javascript:subSelect()">反选</button>
                                <button class="tzms ora" href="javascript:init()">清除</button>
                                <button class="tzms ora" href="javascript:LastPress('1006',813909);">上期</button>
                                <button class="tzms morebtn">模式</button>
                            </div>
                        </li>
                        <li style="width: 100%">
                            <div>
                                <button class="chips" title="" href="javascript:chips(10000)">10</button>
                                <button class="chips" title="" href="javascript:chips(100000)">100</button>
                                <button class="chips" title="" href="javascript:chips(300000)">300</button>
                                <button class="chips" title="" href="javascript:chips(1000000)">1000</button>
                                <div class="self">
                                    <div class="self1">
                                        <input type="text" id="betsLeft" class="avinput">
                                    </div>
                                    <div class="self2">
                                        <button href="javascript:usefenpei()">&nbsp;定额梭哈&nbsp;</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="betscontentdiv">
            <table class="bordered">
                <tbody>
                    <tr id="ball_0">
                        <th width="17%">号码</th>
                        <th width="28%" style="color: #eaff01" colspan="2">标准赔率</th>
                        <th width="30%">投注</th>
                        <th width="25%">倍数</th>
                    </tr>
                    <tr>
                        <td align="center" style="border-left: 1px solid #ccc">
                            <span class="num_1">0</span>
                        </td>
                        <td>1000.00</td>
                        <td style="padding: 0 2% 0 2%; border-right: none" name="tdChk">
                            <input id="tbChk0" type="checkbox" name="tbChk" onclick="insert(this, 'tbNum0')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value = this.value.replace(/\D/g, '')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this, 'tbChk0')" name="tbNum[]" value="" id="tbNum0">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum0',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum0',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum0',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">1</span>
                        </td>
                        <td>333.33</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk1" type="checkbox" name="tbChk" onclick="insert(this,'tbNum1')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk1')" name="tbNum[]" value="" id="tbNum1">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum1',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum1',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum1',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">2</span>
                        </td>
                        <td>166.67</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk2" type="checkbox" name="tbChk" onclick="insert(this,'tbNum2')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk2')" name="tbNum[]" value="" id="tbNum2">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum2',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum2',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum2',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">3</span>
                        </td>
                        <td>100.00</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk3" type="checkbox" name="tbChk" onclick="insert(this,'tbNum3')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk3')" name="tbNum[]" value="" id="tbNum3">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum3',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum3',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum3',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">4</span>
                        </td>
                        <td>66.66</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk4" type="checkbox" name="tbChk" onclick="insert(this,'tbNum4')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk4')" name="tbNum[]" value="" id="tbNum4">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum4',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum4',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum4',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">5</span>
                        </td>
                        <td>47.61</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk5" type="checkbox" name="tbChk" onclick="insert(this,'tbNum5')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk5')" name="tbNum[]" value="" id="tbNum5">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum5',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum5',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum5',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">6</span>
                        </td>
                        <td>35.71</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk6" type="checkbox" name="tbChk" onclick="insert(this,'tbNum6')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk6')" name="tbNum[]" value="" id="tbNum6">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum6',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum6',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum6',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">7</span>
                        </td>
                        <td>27.77</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk7" type="checkbox" name="tbChk" onclick="insert(this,'tbNum7')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk7')" name="tbNum[]" value="" id="tbNum7">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum7',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum7',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum7',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">8</span>
                        </td>
                        <td>22.22</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk8" type="checkbox" name="tbChk" onclick="insert(this,'tbNum8')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk8')" name="tbNum[]" value="" id="tbNum8">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum8',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum8',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum8',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">9</span>
                        </td>
                        <td>18.18</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk9" type="checkbox" name="tbChk" onclick="insert(this,'tbNum9')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk9')" name="tbNum[]" value="" id="tbNum9">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum9',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum9',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum9',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">10</span>
                        </td>
                        <td>15.87</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk10" type="checkbox" name="tbChk" onclick="insert(this,'tbNum10')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk10')" name="tbNum[]" value="" id="tbNum10">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum10',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum10',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum10',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">11</span>
                        </td>
                        <td>14.49</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk11" type="checkbox" name="tbChk" onclick="insert(this,'tbNum11')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk11')" name="tbNum[]" value="" id="tbNum11">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum11',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum11',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum11',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">12</span>
                        </td>
                        <td>13.69</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk12" type="checkbox" name="tbChk" onclick="insert(this,'tbNum12')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk12')" name="tbNum[]" value="" id="tbNum12">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum12',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum12',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum12',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">13</span>
                        </td>
                        <td>13.33</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk13" type="checkbox" name="tbChk" onclick="insert(this,'tbNum13')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk13')" name="tbNum[]" value="" id="tbNum13">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum13',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum13',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum13',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">14</span>
                        </td>
                        <td>13.33</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk14" type="checkbox" name="tbChk" onclick="insert(this,'tbNum14')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk14')" name="tbNum[]" value="" id="tbNum14">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum14',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum14',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum14',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">15</span>
                        </td>
                        <td>13.69</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk15" type="checkbox" name="tbChk" onclick="insert(this,'tbNum15')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk15')" name="tbNum[]" value="" id="tbNum15">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum15',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum15',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum15',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">16</span>
                        </td>
                        <td>14.49</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk16" type="checkbox" name="tbChk" onclick="insert(this,'tbNum16')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk16')" name="tbNum[]" value="" id="tbNum16">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum16',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum16',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum16',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">17</span>
                        </td>
                        <td>15.87</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk17" type="checkbox" name="tbChk" onclick="insert(this,'tbNum17')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk17')" name="tbNum[]" value="" id="tbNum17">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum17',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum17',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum17',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">18</span>
                        </td>
                        <td>18.18</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk18" type="checkbox" name="tbChk" onclick="insert(this,'tbNum18')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk18')" name="tbNum[]" value="" id="tbNum18">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum18',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum18',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum18',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">19</span>
                        </td>
                        <td>22.22</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk19" type="checkbox" name="tbChk" onclick="insert(this,'tbNum19')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk19')" name="tbNum[]" value="" id="tbNum19">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum19',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum19',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum19',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">20</span>
                        </td>
                        <td>27.77</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk20" type="checkbox" name="tbChk" onclick="insert(this,'tbNum20')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk20')" name="tbNum[]" value="" id="tbNum20">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum20',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum20',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum20',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">21</span>
                        </td>
                        <td>35.71</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk21" type="checkbox" name="tbChk" onclick="insert(this,'tbNum21')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk21')" name="tbNum[]" value="" id="tbNum21">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum21',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum21',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum21',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">22</span>
                        </td>
                        <td>47.61</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk22" type="checkbox" name="tbChk" onclick="insert(this,'tbNum22')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk22')" name="tbNum[]" value="" id="tbNum22">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum22',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum22',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum22',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">23</span>
                        </td>
                        <td>66.66</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk23" type="checkbox" name="tbChk" onclick="insert(this,'tbNum23')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk23')" name="tbNum[]" value="" id="tbNum23">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum23',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum23',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum23',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">24</span>
                        </td>
                        <td>100.00</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk24" type="checkbox" name="tbChk" onclick="insert(this,'tbNum24')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk24')" name="tbNum[]" value="" id="tbNum24">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum24',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum24',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum24',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">25</span>
                        </td>
                        <td>166.66</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk25" type="checkbox" name="tbChk" onclick="insert(this,'tbNum25')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk25')" name="tbNum[]" value="" id="tbNum25">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum25',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum25',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum25',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">26</span>
                        </td>
                        <td>333.33</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk26" type="checkbox" name="tbChk" onclick="insert(this,'tbNum26')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk26')" name="tbNum[]" value="" id="tbNum26">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum26',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum26',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum26',10)" class="multiple">10</button>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="border-left:1px solid #ccc">
                            <span class="num_1">27</span>
                        </td>
                        <td>1000.00</td>
                        <td style="padding:0 2% 0 2%; border-right:none" name="tdChk">
                            <input id="tbChk27" type="checkbox" name="tbChk" onclick="insert(this,'tbNum27')">
                        </td>
                        <td>
                            <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" onblur="input(this,'tbChk27')" name="tbNum[]" value="" id="tbNum27">
                        </td>
                        <td class="bs">
                            <button @click="chgRateEvent('tbNum27',0.5)" class="multiple">.5</button>
                            <button @click="chgRateEvent('tbNum27',2)" class="multiple">2</button>
                            <button @click="chgRateEvent('tbNum27',10)" class="multiple">10</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import HeadNav from '../../components/topNav'
import{Toast} from 'mint-ui'
export default{
data(){
    return {
        title:this.$route.params['text'],
        type:this.$route.params['type']
    }
},    
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE(this.title)
        this.SHOW_BACK_BUT(true)
    },
    useModelEvent(__model){
        Toast('MLGB 让开 我要包场了')
    },
    chgRateEvent(__dom,__rate){
        Toast('MLGB 让开 我要加倍了')
    },
    chgAllRateEvent(__rate){
        Toast('MLGB 让开 我要全部加倍了')
    }
  },
  components: {HeadNav}
}
</script>
<style scoped>
.menudiv2{float:left;width:100%;background:#4F1511}
.menudiv2 ul{margin:3% 0 7% 1%;padding:0 0 2% 1%}
.menudiv2 li{float:left;margin-right:1%;background-image:url(../../assets/images/game/btn_topyellow.png);background-position:center;background-repeat:no-repeat;padding:.2rem .3rem;border-radius:5px;line-height:140%;height:140%;margin-bottom:2%;list-style:none}
.menudiv2 li a{color:#4F1511;font-size:.85rem}
.menudiv2 .on{color:#ff0000}
.recorddiv{width:100%;margin:1% 0 0 0;padding:0;float:left;font-size:.75rem;font-family:黑体}
.recorddiv table{width:100%;border-spacing:0}
.recorddiv table th,.recorddiv table th{background:url(../../assets/images/game/thbg.png) repeat-x;height:300%;line-height:300%;text-align:center;color:#333333;border-bottom:1px solid #d1d1d1}
.recorddiv table td,.recorddiv table td{height:200%;line-height:160%;background:#fff none repeat scroll 0 0;color:#000;border-right:1px solid #d1d1d1;border-bottom:1px solid #d1d1d1}
.moddiv{width:99%;float:left;margin:0 0 0 0.5%;padding:0%}
.binfodiv .content,.moddiv .content{background:#FFF;margin-top:0.5%;color:#777777}
.binfodiv .content,.moddiv .content{background:#FFF;margin-top:0.5%;color:#777777}
.moddiv ul{margin:2% 0 1.5% 2%;padding:0 0 5% 0}
.moddiv ul li{float:left;padding-bottom:0.5%;list-style:none}
.moddiv ul li a{cursor:pointer}
.tzms{margin:1% 1.5% 1% 0;border:1px solid #a3a3a3;font-size:.75rem;line-height:1.5rem;height:1.5rem;width:14%;float:left;text-align:center;background-image:-moz-linear-gradient(top,#FDFDFE,#F2F4F6);background-image:-webkit-gradient(linear,left top,left bottom,from(#FDFDFE),to(#F2F4F6));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#FDFDFE,endColorstr=#F2F4F6);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#FDFDFE,endColorstr=#F2F4F6)";-webkit-box-shadow:1px 1px 1px rgba(0,0,0,0.2);-moz-box-shadow:1px 1px 1px rgba(0,0,0,0.2);box-shadow:1px 1px 1px rgba(0,0,0,0.2)}
.chips{margin:1% 1% 1% 0;border:1px solid #ccc;font-size:.75rem;line-height:1.5rem;height:1.5rem;width:11%;float:left;text-align:center;background-image:-moz-linear-gradient(top,#FDFDFE,#F2F4F6);background-image:-webkit-gradient(linear,left top,left bottom,from(#FDFDFE),to(#F2F4F6));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#FDFDFE,endColorstr=#F2F4F6);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#FDFDFE,endColorstr=#F2F4F6)";-webkit-box-shadow:1px 1px 1px rgba(0,0,0,0.2);-moz-box-shadow:1px 1px 1px rgba(0,0,0,0.2);box-shadow:1px 1px 1px rgba(0,0,0,0.2)}
.self{margin:1% 0;border:1px solid #ccc;color:#8b5100;float:left;line-height:150%;height:150%;padding:0px;width:43%}
.self1{width:50%;float:left}
.avinput{border:medium none;color:#f00;line-height:150%;height:150%;width:100%;padding-left:1%}
.self2{float:right}
.betscontentdiv{float:left;margin:0 0 0 0.5%;padding:0;width:99%;font-size:.75rem}
.betscontentdiv table th{background:#e93f40;color:#FFF}
.bordered{background:#FFF}
.betscontentdiv table td input{background:#fff none repeat scroll 0 0;border:1px solid #ccc;color:#f00;height:auto;text-align:left;width:80%}
.bs a{background:#eee none repeat scroll 0 0;border:1px solid #d7d7d7;border-radius:1px;color:#555;padding:1%;width:24%;margin-left:2%;line-height:100%;float:left}
.num_1{background:#e64047 none repeat scroll 0 0;border-radius:50%;color:#fff;display:block;font-weight:bold;text-align:center;width:20px;height:20px}
.betscontentdiv table td input[name=tbChk]{width:120%;padding:0.2%;margin:0.2%;height:100%}
</style>