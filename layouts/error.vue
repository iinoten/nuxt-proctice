<template>
  <div class="layout-error">
    <section class="error">
      <h2>error</h2>
      <ArticleBody>
        <h3>名前はまだない</h3>
        <p>アクセスしたページは存在しないか、すでに削除されています。</p>
      </ArticleBody>
    </section>
  </div>
</template>

<style scoped lang="scss">

  .error {
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