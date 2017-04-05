<template>
<ul class="pagination">
  <li>
    <a href="#" @click.prevent="pageChanged(1)">
      <span aria-hidden="true">首页</span>
    </a>
  </li>
  <li v-for="n in paginationRange" :class="activePage(n)">
    <a href="#" @click.prevent="pageChanged(n)">{{ n }}</a>
  </li>
  <li>
    <a href="#" @click.prevent="pageChanged(lastPage)">
      <span aria-hidden="true">末页</span>
    </a>
  </li>
</ul>
</template>
<script>
import Util from '../data/util'
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: Number,
    itemsPerPage: Number,
    totalItems: Number,
    visiblePages: {
      type: Number,
      default: 5,
      coerce: (val) => parseInt(val)
    }
  },
  data () {
    return {}
  },
  computed: {
    lastPage () {
      if (this.totalPages) {
        return this.totalPages
      } else {
        return this.totalItems % this.itemsPerPage === 0
          ? this.totalItems / this.itemsPerPage
          : Math.floor(this.totalItems / this.itemsPerPage) + 1
      }
    },
    paginationRange () {
      let start = this.currentPage - this.visiblePages / 2 <= 0
                    ? 1 : this.currentPage + this.visiblePages / 2 > this.lastPage
                    ? Util.lowerBound(this.lastPage - this.visiblePages + 1, 1)
                    : Math.ceil(this.currentPage - this.visiblePages / 2)
      let range = []
      for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
        range.push(start + i)
      }
      return range
    }
  },
  methods: {
    pageChanged (pageNum) {
      this.$emit('page-changed', pageNum)
    },
    activePage (pageNum) {
      return this.currentPage === pageNum ? 'active' : ''
    }
  }
}
</script>
<style>
.pagination{display:inline-block;padding-left:0;margin:5px 0;border-radius:4px}
.pagination>li{display:inline}
.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}
.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}
.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}
.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 8px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}
</style>