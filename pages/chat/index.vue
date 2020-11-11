<template>
  <div>
    <div>chat page</div>
    <div>
      <ul>
        <li v-for="item in this.chatLogs" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'
  export default {
    data: ()=>({
      chatLogs: []
    }),
    mounted: function () {
       const db = firebase.firestore()
        db.collection('chats').doc('test')
          .get()
          .then((res) => {
            console.log(res.data())
            const chatLogsDataArray = res.data().logs;
            const tempChatLog = []
              chatLogsDataArray.forEach(element => {
                tempChatLog.push(element)
              });
              console.log(tempChatLog)
              this.chatLogs = tempChatLog
          })
    }
  }
</script>