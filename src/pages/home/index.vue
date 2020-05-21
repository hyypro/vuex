<template>
  <div class="home">
    <el-button type="primary" @click="openDialog">添加</el-button>
    <ModelForm 
     :id="id"
     :dialogVisible="dialogVisible"
     @handleOK="handleOK"
     @handleClose="handleClose"
    />
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编码"
        width="300">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="300">
      </el-table-column>
      <el-table-column
        prop="msg"
        label="年龄"
        width="300">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ModelForm from '@/components/ModelForm'
import './style.less'
export default {
  created () {
    this.$store.dispatch('FETACH_TABLE_DATA')
  },

  data () {
    return {
      dialogVisible: false,
      id: ''
    }
  },
   
  computed: {
    ...mapState(['tableData']) 
  },

  methods: {

    openDialog () {
       this.id = ''
       this.dialogVisible = true
    },
    
    handleOK (value) {
      if (value.id) {
        this.$store.dispatch('FETACH_TABLE_EDIT', value)
      } else {
        console.log(value)
        this.$store.dispatch('FETACH_TABLE_ADD', value)
      }
      this.id = ''
      this.dialogVisible = false
      this.$store.dispatch('FETACH_EDIT_DATA', {}) 
    },

    handleClose () {
      this.dialogVisible = false
      this.$store.dispatch('FETACH_EDIT_DATA', {}) 
    },

    handleDelete (row) {
      this.$store.dispatch('FETACH_TABLE_DELETE', row.id)
    },

    handleEdit (row) {
     this.id = row.id
     this.dialogVisible = true
     this.$store.dispatch('FETACH_EDIT_DATA', row)
    }
  },

  components: {
    ModelForm
  }
}
</script>