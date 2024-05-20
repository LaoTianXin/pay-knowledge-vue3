<script setup lang="tsx">
const slot = defineSlots()
defineRender(() => {
  return (
    <div class="relative flex justify-start items-center max-w-1200px w-full mx-auto h-full">
      {slot.default?.()}
    </div>
  )
})
</script>
