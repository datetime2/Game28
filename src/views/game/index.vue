<template>
  <div>
    <HeadNav></HeadNav>
    <div class="index-container" id="index-container">
        <div class="gamediv">
            <div class="gclass g1">
                <div class="bc">
                    急速类游戏
                </div>
                <ul class="gc">
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'js28',text:'急速28'}}">
                                <div class="intro">
                                    <div class="name">急速28</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
            <div class="gclass g2">
                <div class="bc">
                    蛋蛋、北京类游戏
                </div>
                <ul class="gc">
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'dd28',text:'蛋蛋28'}}">
                                <div class="intro">
                                    <div class="name">蛋蛋28</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'dd16',text:'蛋蛋16'}}">
                                <div class="intro">
                                    <div class="name">蛋蛋16</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'dd36',text:'蛋蛋36'}}">
                                <div class="intro">
                                    <div class="name">蛋蛋36</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'bj28',text:'北京28'}}">
                                <div class="intro">
                                    <div class="name">北京28</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'bj16',text:'北京16'}}">
                                <div class="intro">
                                    <div class="name">北京16</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'bj36',text:'北京36'}}">
                                <div class="intro">
                                    <div class="name">北京36</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
            <div class="gclass g3">
                <div class="bc">
                    Pk类游戏
                </div>
                <ul class="gc">
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'pk22',text:'PK冠军'}}">
                                <div class="intro">
                                    <div class="name">PK22</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'pkgj',text:'PK冠军'}}">
                                <div class="intro">
                                    <div class="name">PK冠军</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'pk10',text:'PK10'}}">
                                <div class="intro">
                                    <div class="name">PK10</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'pkgy',text:'PK冠亚'}}">
                                <div class="intro">
                                    <div class="name">PK冠亚</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'pklh',text:'PK龙虎'}}">
                                <div class="intro">
                                    <div class="name">PK龙虎</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
            <div class="gclass g4">
                <div class="bc">
                    加拿大类游戏
                </div>
                <ul class="gc">
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'jnd28',text:'加拿大28'}}">
                                <div class="intro">
                                    <div class="name">加拿大28</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'jnd16',text:'加拿大16'}}">
                                <div class="intro">
                                    <div class="name">加拿大16</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'jnd11',text:'加拿大11'}}">
                                <div class="intro">
                                    <div class="name">加拿大11</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'jnd36',text:'加拿大36'}}">
                                <div class="intro">
                                    <div class="name">加拿大36</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'jnd10',text:'加拿大10'}}">
                                <div class="intro">
                                    <div class="name">加拿大10</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'jndww',text:'加拿大外围'}}">
                                <div class="intro">
                                    <div class="name">加拿大外围</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ul>
                <div class="clear"></div>
            </div>
            <div class="gclass g5">
                <div class="bc">
                    韩国类游戏
                </div>
                <ul class="gc">
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'hg28',text:'韩国28'}}">
                                <div class="intro">
                                    <div class="name">韩国28</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'hg16',text:'韩国16'}}">
                                <div class="intro">
                                    <div class="name">韩国16</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'hg36',text:'韩国36'}}">
                                <div class="intro">
                                    <div class="name">韩国36</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'hg11',text:'韩国11'}}">
                                <div class="intro">
                                    <div class="name">韩国11</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'hg10',text:'韩国10'}}">
                                <div class="intro">
                                    <div class="name">韩国10</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="con">
                            <router-link :to="{name:'detail',params:{type:'hgww',text:'韩国外围'}}">
                                <div class="intro">
                                    <div class="name">韩国外围</div>
                                </div>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import{mapMutations} from 'vuex'
import FootNav from '../../components/footNav'
import HeadNav from '../../components/topNav'
export default{
created () {
    this.setTitle()
  },     
methods:{
    ...mapMutations(['CHANGE_TITLE','SHOW_BACK_BUT']),
    setTitle(){
        this.CHANGE_TITLE('游戏乐园')
        this.SHOW_BACK_BUT(true)
    }
  },
components: {HeadNav,FootNav}
}
</script>
<style scoped>
.gamediv{margin-top:.7rem;}
.gamediv ul,.gamediv ul li{padding:0;margin:0}
.gclass{width:97%;border-radius:10px;background-color:#fff;margin:.5rem auto 0%;padding:0 0 .25rem 0}
.bc{border-bottom:1px solid #ccc;font-size:1.2rem;padding:1% 3%}
.gamediv .gc li{border-radius:5px;margin:.2rem .5rem 0 .2rem;text-align:center;padding:.2rem;width:20%;height:1.5rem;line-height:1.5rem;list-style:none;float:left;}
.gamediv .gc li a{color:#fff}
.gamediv .g1 li{background-color:#F05550}
.gamediv .g1 .bc{color:#F05550}
.gamediv .g2 li{background-color:#23AEE5}
.gamediv .g2 .bc{color:#23AEE5}
.gamediv .g3 li{background-color:#FFAB10}
.gamediv .g3 .bc{color:#FFAB10}
.gamediv .g4 li{background-color:#B28AD1}
.gamediv .g4 .bc{color:#B28AD1}
.gamediv .g5 li{background-color:#E062A9}
.gamediv .g5 .bc{color:#E062A9}
.gamediv .gc .con .intro .name{font-size:.75rem;}
.clear{clear:both}
</style>