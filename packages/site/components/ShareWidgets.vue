<template>
  <div>
    <client-only placeholder="loading share widgets...">
      <div>
        <span class="mr-2">
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-hashtags="AndroidDagashi"
            data-show-count="false"
            >Tweet</a
          >
        </span>
        <span>
          <a
            href="http://b.hatena.ne.jp/entry/"
            class="hatena-bookmark-button"
            data-hatena-bookmark-layout="basic-label-counter"
            data-hatena-bookmark-lang="ja"
            title="このエントリーをはてなブックマークに追加"
          >
            <img
              src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
              alt="このエントリーをはてなブックマークに追加"
              width="20"
              height="20"
              style="border: none"
            />
          </a>
        </span>
      </div>
    </client-only>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ShareWidgets',
})
</script>
