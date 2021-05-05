<template>
  <v-breadcrumbs class="hidden-sm-and-down" :items="levelList" divider="/">
    <template #item="props">
      <a @click.prevent="handleLink(props.item)">
        {{ generateTitle(props.item.meta) }}
      </a>
    </template>
  </v-breadcrumbs>
</template>

<script>
import pathToRegexp from 'path'

export default {
  name: 'AppBreadcrumbs',
  data: () => ({
    levelList: null,
  }),
  watch: {
    $route() {
      this.getBreadcrumb()
    },
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle(meta) {
      const title = meta.find((m) => m.title !== null).title
      const hasKey = this.$te(`${title}`)
      if (hasKey) {
        const translatedTitle = this.$t(`${title}`)
        return translatedTitle
      }
      return title
    },
    getBreadcrumb() {
      const vm = this
      let matched = this.$nuxt.context.route.matched.filter((item) => item.name)
      const first = matched[0]
      if (first) {
        matched[0] = { ...first, meta: vm.$nuxt.context.route.meta }
        if (
          first.name.trim().toLocaleLowerCase().split('_')[0] !== 'dashboard'
        ) {
          matched = [
            { path: '/dashboard', meta: [{ title: 'router.dashboard' }] },
          ].concat(matched)
        }
      }
      this.levelList = matched
    },
    pathCompile(path) {
      const { params } = this.$route
      const toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      const lastIndex = path.indexOf('/', 1)
      this.$router.push(path.slice(0, lastIndex > 0 ? lastIndex : path.length))
    },
  },
}
</script>
