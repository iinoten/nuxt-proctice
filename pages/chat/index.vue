<template>
  <div>chat page</div>
</template>

<script>
  import firebase from '~/plugins/firebase'
  const db = firebase.firestore()
  db.collection('chats').doc('test')
       .get()
       .then((res) => {
         console.log(res.data())
       })
  export default {
    
  }
</script>