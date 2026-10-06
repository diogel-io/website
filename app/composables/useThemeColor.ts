// Browser toolbar colours, matching the page background (`--ui-bg`).
const LIGHT = '#ffffff'
const DARK = '#0a0a0a'

// The prerendered HTML cannot know the visitor's system theme, so it sends one
// tag per scheme and lets the browser choose. An explicit choice from the theme
// switcher sets both tags to that theme's colour.
export function useThemeColor() {
  const colorMode = useColorMode()

  const colors = computed(() => {
    if (colorMode.preference === 'light') {
      return { light: LIGHT, dark: LIGHT }
    }
    if (colorMode.preference === 'dark') {
      return { light: DARK, dark: DARK }
    }
    return { light: LIGHT, dark: DARK }
  })

  // No `key`: unhead matches unkeyed theme-color tags to the prerendered ones
  // on hydration, while a `key` makes it add a second pair.
  useHead({
    meta: [
      { name: 'theme-color', media: '(prefers-color-scheme: light)', content: () => colors.value.light },
      { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: () => colors.value.dark }
    ]
  })
}
