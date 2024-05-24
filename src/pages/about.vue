<script lang="tsx" setup>
defineRender(() => {
  return (
    <div
      class={'grid grid-cols-4 grid-rows-3 w-100 h-100 '}
      text-red
      text-center
      text-5xl
      animate-bounce
      style={{
        gridTemplateAreas: `
        "a a a a"
        "b b c c"
        "b b d e"
        `
      }}
    >
      <div class={'grid-area-a w-full h-full bg-gray'}>1</div>
      <div class={'grid-area-b w-full h-full bg-pink'}>2</div>
      <div class={'grid-area-c w-full h-full bg-green'}>3</div>
      <div class={'grid-area-d w-full h-full bg-blue'}>4</div>
      <div class={'grid-area-e w-full h-full bg-yellow'}>5</div>
    </div>
  )
})
</script>

<route lang="yaml">
meta:
  layout: default
</route>
