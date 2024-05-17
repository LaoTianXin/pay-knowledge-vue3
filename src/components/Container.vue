<script setup lang="tsx">
const slot = defineSlots()
defineRender(() => {
  return (
    <div class="flex justify-start items-center w-1200px mx-auto h-full">{slot.default?.()}</div>
  )
})
</script>
