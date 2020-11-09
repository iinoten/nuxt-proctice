<template>
  <div>
    <h1>table page</h1>
    <button @click="fetch">fetch</button>
    {{length}}件fetchしました
    <table border="1">
      <tr>
        <th>年齢</th>
        <th>推定ユーザー数</th>
      </tr>
      <tr v-for="item in items" :key="item.age">
        <td>{{ item.age }}</td>
        <td>{{ item.users }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  function getJson() {
    const ages = Array.from(
      new Set(
        new Array( parseInt(Math.random() * 100))
          .fill( null )
          .map(() => parseInt(Math.random() * 100))
      )
    )
    return ages.map(age => ({
      age,
      users: Math.random() * 10000
    }))
  }

  export default {
    computed: {
      length() {
        return this.items.length
      }
    },

    data: () => ({
      items: []
    }),

    methods: {
      fetch() {
        this.items = getJson()
      }
    },
    created() {
      this.fetch()
    }
  }
</script>
<style scoped lang="scss">

  .about,
  .works {
    h2 {
      display: flex;
      align-items: center;
      margin: 50px 0 30px;
      font-size: 30px;

      &::after {
        content: '';
        display: block;
        flex: 1;
        height: 1px;
        margin-left: 10px;
        background-color: $color-black;
      }
    }
  }

  .article-body {
    h3 {
      font-size: 20px;
      margin: 30px 0 20px;
    }

    p {
      line-height: 1.75;

      + p {
        margin-top: 20px;
      }

      a {
        color: $color-blue;
      }
    }

    ul {
      list-style: circle;
      margin-top: 20px;
      margin-left: 20px;

      li {
        &:nth-of-type(n+2) {
          margin-top: 0.5em;
        }
      }
    }

    img {
      max-width: 100%;
    }
  }
</style>