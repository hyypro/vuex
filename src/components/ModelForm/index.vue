<template>
   <div>
     <el-dialog
      :title="id ? '修改' : '添加'"
      :visible="dialogVisible"
      width="60%"
      :before-close="handleClose"
      :close-on-click-modal="false"
      >
      <span>
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item
              label="名字"
              prop="age"
              :rules="[
                { required: true, message: '姓名不能为空'},
              ]"
            >
              <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="年龄"
              prop="age"
              :rules="[
                { required: true, message: '年龄不能为空'},
                { type: 'number', message: '年龄必须为数字值'}
              ]"
            >
              <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleOK('numberValidateForm')">提交</el-button>
              <el-button @click="handleClose">取消</el-button>
            </el-form-item>
        </el-form>
      </span>
    </el-dialog>
   </div>
</template>

<script>
  
  export default {
    props:['dialogVisible', 'id'],
data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      handleOK(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('handleOK')
          } else {
           // console.log('error submit!!');
            return false;
          }
        })
      },

      handleClose () {
        this.$emit('handleClose')
      }
    }
  }

</script>