<template>
  <div class="home">
    <el-button type="primary" @click="dialogVisible = true">添加</el-button>
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
        width="500">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="500">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="500">
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
    handleOK () {
      this.dialogVisible = false
    },

    handleClose () {
      this.dialogVisible = false
    }
  },

  components: {
    ModelForm
  }
}
</script>