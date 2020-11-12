<template>
  <div>
    <div>
      <label>
          <h4>ハンドルネーム</h4>
          <input
            type="text"
            v-model="inputNameValue"
            style="margin-bottom: 8px"
           />
            <h4>投稿文(必須)</h4>
            <input
              type="text"
              v-model="inputMessageValue"
            />
            <input v-bind:disabled="!Boolean(inputMessageValue)" type="submit" @click="onClickSubmitForm"/>
      </label>
    </div>
    <div>
      <ul>
        <li v-for="item in this.chatLogs" :key="item.message">
          <ChatIndex :name="item.name" :message="item.message"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'
  export default {
    layout: 'chat',
    data: ()=>({
      chatLogs: [],
      inputNameValue: "",
      inputMessageValue: "",
    }),
    watch: {
      inputMessageValue: {
        handler( newVal, oldVal ) {
        } 
      }
    },
    methods: {
      onClickSubmitForm(){
        console.log("clicked", this.inputNameValue, this.inputMessageValue)
        const db = firebase.firestore();
        const nowTime = new Date();
        db.collection('chats').doc('test')
          .update({
            logs: firebase.firestore.FieldValue.arrayUnion({
              'date': nowTime.getFullYear() +'-'+ (nowTime.getMonth()+1) +'-'+ nowTime.getDate() +' '+ nowTime.getHours() +':'+ nowTime.getMinutes() +':'+ nowTime.getSeconds(),
              'message': this.inputMessageValue,
              name: this.inputNameValue ? this.inputNameValue : 'guest'
            })
          })
          .then((res) => {
            console.log("送信成功")
            this.inputMessageValue = "";
          })
          .catch( err => {
            console.log("送信失敗", err)
          })
      }
    },
    mounted: function () {
        const db = firebase.firestore()
        db.collection('chats').doc('test')
          .get()
          .then((res) => {
            this.inputMessageValue = "";
          })
      firebase.firestore().collection('chats').doc('test')
        .onSnapshot(doc => {
          console.log(doc.data())
          this.chatLogs = doc.data().logs.reverse()
        })
    }
  }
</script>