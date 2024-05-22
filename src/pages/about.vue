<script lang="tsx" setup>
defineRender(() => {
  return (
    <div
      class={'grid grid-cols-4 grid-rows-3 w-100 h-100'}
      style={{
        gridTemplateAreas: `
        "a a a a"
        "b b c c"
        "b b d e"
        `
      }}
    >
      <div class={'grid-area-a w-full h-full bg-gray'}></div>
      <div class={'grid-area-b w-full h-full bg-pink'}></div>
      <div class={'grid-area-c w-full h-full bg-green'}></div>
      <div class={'grid-area-d w-full h-full bg-blue'}></div>
      <div class={'grid-area-e w-full h-full bg-yellow'}></div>
    </div>
  )
})
</script>

<route lang="yaml">
meta:
  layout: default
</route>
